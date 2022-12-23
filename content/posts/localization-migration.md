---
title: Migration of Sprout Social's localization system
date: "2022-12-23"
template: "post"
draft: false
category: "Localization"
tags:
  - "teams"
  - "systems"
  - "language"
  - "localization"
  - "linting"
description: "Localizing a dynamic application like Sprout Social into multiple languages is a complex undertaking. For years, Sprout engineering team got by with a scrappy homemade localization solution. While this solution served us for years, we were running into limitations more and more as the team and the application grew. In this post, I will outline some of those limitations and the steps we took to redesign our localization system to address those limitations."
---

![Photo by Towfiqu barbhuiya on Unsplash](/media/towfiqu-barbhuiya-5u6bz2tYhX8-unsplash.jpg)

Localizing a dynamic application like Sprout Social into multiple languages is a complex undertaking. Not only does it require the translation of the text that appears in the application, but it also requires the application to be developed in a way that renders it easy to extract and swap out that text for the translations. Technically, the former is called localization and the latter is called internationalization. But for simplicity, I’ll refer to both as “localization” for the rest of this post. At Sprout, we lean on third-party vendors for translations. But we still need tools to extract, bundle, and submit translation requests to those vendors and then serve and render the translations in the user application.

For years, Sprout engineering team got by with a scrappy homemade localization solution. While this solution served us for years, we were running into limitations more and more as the team and the application grew. In this post, I will outline some of those limitations and the steps we took to redesign our localization system to address those limitations.

I organized a Localization Working Group within the web chapter to take on developing solutions that addressed the issues with our localization system. After an in-depth research process, the team decided to migrate the Sprout application from our homemade localization system to use formatjs’s [react-intl](https://formatjs.io/docs/getting-started/installation) library and build infrastructure around it. react-intl was the most supported and feature-rich open-source localization library that would integrate easily with our web application code. react-intl is also the most established and used localization library in the javascript ecosystem and had been used by some of the working group members at previous jobs. It is built on top of standards (ICU Message syntax) and covered our use-cases. It provided tooling that enabled us to improve and automate our localization infrastructure.

## Message Syntax

Application localization works by abstracting the text that is visible to the end-user into string units, called Messages. These messages are extracted and submitted to translators. By abstracting these strings, we can easily swap them out depending on the preferred language of the end-user.

These messages can be simple static strings like `“Hello, World”` or dynamic with placeholders for arguments like `“Hello, {name}”` or rich text formatting like `“Hello, <bold>world</bold>”`. Since these features need to be serialized into strings, you need a syntax that both the translators understand to only translate the necessary text and the application code understands to probably render the text for the end-user.

Part of what made our old localization system difficult to use was that we made up our own syntax and maintained a homemade “parser” for said syntax. This code was under-maintained and the syntax was pretty minimal, Latin-language-focused, and lacked the features to render more complex messages. Our old setup didn’t have proper support for pluralization, rich text (bolding, links, etc.), character encoding, capitalization, or dynamic sentences. Without these features, our application was not properly localized for non-English languages.

> Example: In the Sprout application, we had no good way of rendering “You have X posts” where X is a dynamic numeric value.
>
> Consider the plural case, “You have 5 posts”. Consider the singular case, “You have 1 post”. Consider the “0” case. Consider languages that might have a grammar for the “1” case like Chinese and Japanese. Consider languages that have a grammar for the case when X is a “large number” like Arabic, Polish, and Russian.

We needed a more robust solution and didn’t need to create something from scratch. We adopted the [ICU Message syntax](https://unicode-org.github.io/icu/userguide/format_parse/messages/), a standardized syntax that is used in Java, PHP, and C applications and captures the complexities of dynamic application messages. And we were able to use formatjs’s react-intl library to parse and render the ICU Message syntax messages for the end-user.

```js
`{members, plural,
    =0 {No members available}
    one {There is one member available.}
    other {There are # members available.}
}`;
```

```js
`{members, plural,
    =0 {Нет доступных членов}
    one {Есть один член.}
    few {Имеется # члена.}
    many {Есть # членов.}
    other {# члена.}
}`;
```

This is an example of how ICU Message syntax captures plural cases. This is the message in English and Russian. Notice how when the translators translate this message into other languages, they can add and remove cases as necessary to properly support the language. The Russian translation of this message adds “few” and “many” cases.

But, this meant we had to transition our team to use new syntax and migrate the old messages to the newer syntax. Luckily, for the most part, ICU Message syntax has a one-to-one translation from our older syntax barring a few exceptions.

By adopting the ICU Message syntax we had access to a syntax that has been battle-tested by countless applications in countless languages so we could trust that it had a solution and/or educational resources for any localization issues we ran into.

## Message management

Now we have these Messages, units of text, that we can send to translators and swap out in our application. Your application needs a way of storing these messages and serving them to your end-users.

Our old system stored all our messages in manually managed JSON files (we call “lang files” or “language files”). We referenced the messages in these lang files by using language-agnostic ids in our source javascript code. When a user wanted the application in Spanish, we would serve our Spanish language files, and then the javascript would render the corresponding Spanish message using the id. These ids were manually created and managed by our developers. For performance reasons, we tried to only serve the user messages that were on that page, so we had separate lang files for the different pages of the application. This was a valid system but as our team and application scaled it meant developers had to spend mental overhead creating and managing these ids and lang files.

```js
// ui.js
<Modal>
  <h1>{lang(‘modal.title’)}</h1>
  <p>{lang(‘modal.body)}</p>
</Modal>

// inbox/en.json
{
  modal: {
    title: “Hello world”,
    body: “This is a modal!”
  }
}

// inbox/es.json
{
  modal: {
    title: “Hola mundo”,
    body: “¡Esto es un modal!”
  }
}
```

To add a new message to the application, developers had to manually add that message to the correct lang file and with a unique id to reference that message. If we were not on top of the management of the lang messages, we ran into issues of id collisions and id typos leading to missing lang in the application. Adding text to the web application felt tedious with numerous steps that were easy to mess up.

We were able to develop a system using tooling provide by formatjs that would automate the process of adding, removing, and maintaining the storage of messages. This involved some philosophical changes in how we approached the storing and referencing of the messages.

### Inline messages as the source of truth

A big philosophical change from our old system that formatjs encourages, was using our Javascript UI code as the source of truth for messages. Our previous system used the lang files as the source of the messages. The UI code would reference the messages in the lang files using ids but the text of the messages existed in the lang files. In this way, the source of the messages and the usage of the messages were in two different places leading to issues where the two often became out of sync. Our new system still uses lang files to swap out different translations but they are not the source of truth. What our new system does with the help of formatjs tools, is keep the message sources with the rest of the UI code and then build the lang files based on those UI javascript files. We simply need to run a script that will extract all the English messages from the javascript files and add them to our lang file. And the English message content themselves becomes the unique ids with the help of a hash function.

```js
// ui.js
<Modal>
  <h1>{intl.formatMessage({defaultMessage: ‘Hello world’})}</h1>
  <p>{intl.formatMessage({defaultMessage: ‘This is a modal!’})}</p>
</Modal>

// inbox/en.json
{
  "t/eDuu": {
    "message": "Hello world"
  },
  "Z6p8Lr": {
    "message": "This is a modal!"
  },
}

// inbox/es.json
{
  "t/eDuu": {
    "message": "Hola mundo"
  },
  "Z6p8Lr": {
    "message": "¡Esto es un modal!"
  },
}
```

This co-locates the source of truth of messages with the source of our UI code! Co-location of similar things is always beneficial. This change in particular had several benefits:

- More readable! No more ids that are designed for robots in our UI code. Now we can read the English messages in the UI code and understand what text the user will be seeing.
- No more manual ids! These ids which were only used by machines are now generated by machines and by definition unique per message.
- No more manually managed lang files. Developers should not need to touch these lang files. Our scripts will manage the adding and deleting of the messages. This makes deleting messages easier and safer. We can simply delete the messages in the javascript file and let the extraction script take care of the cleanup. Since the source of truth is the javascript and written inline, there is no way to reference something missing. The power of co-location!
- This also makes validation much easier. We were able to write validation scripts to run on CI/CD systems that enforced the proper extraction of messages, the existence of translations, and the removal of unused translations, among other things.

## How did we migrate?

To migrate from our current solution to the new system, we set up our application to support both our old and new localization systems. Initially, only the working group would use the new system on a pilot basis. But once the working group felt comfortable with the new developer experience, we started to encourage usage of the new system in the wider web chapter and limit the usage of the old solution. Once the old solution was fully deprecated, the working group worked to migrate the usages of the old solution to the new system. At that point, the application was fully migrated to the new system.

This shook out into three milestones

1. Pilot the new system
1. Deprecate old system / All new code should use the new system
1. Migration and removal of the old system

### Pilot the new system

The working group piloted the new system in specific sections of the application to get a sense of the best practices for it and the scope of migrating our application to it. This got the new system set up on the client-side (poly-fills, etc.) and the build side of the application. This allowed us to iterate on the developer experience, and give us a sense of the scope of the following milestones all while mitigating risks.

For this pilot, we chose to migrate a simple application page to the new system. We picked code on a settings page that was mostly static and contained i.e. not loaded on every page like some global features. Migrating that code tested some basic localization use-cases while not being too complex. From there we swapped out more complex sections and test out more complex use-cases.

Once we feel more comfortable with the new system and developer experience, we started to encourage other developers (outside of the working group) to try out the new library. This was voluntary so developers who were curious about using the new system were encouraged to do so with the expectation that there might be some growing pains.

### Deprecate old system / All new code should use the new system

After we felt confident in the developer experience and scaling up the usage of the new system, we deprecate any new usage of the old system. We created some custom eslint rules and used the linting tool, esplint, to allow existing usages of the old system while blocking new usages. From this point on, Web engineers were expected to use the new system when writing new code.

Part of this Milestone involved the education of the entire web engineering team. We developed a FAQ and other educational documentation and presentations to aid developers using the new library. It’s easy to undervalue this step. This part of a migration is extremely important. It doesn’t matter how good your new system is if people don’t know to use it or how to use it or why it is better.

We also developed an ambassador program where each web feature team at Sprout had an appointed Localization Ambassador who was responsible for helping educate their team on the new system and reporting to the working group any issues or pain points of the new system.

This allowed us to delegate the education responsibilities and learn about issues specific to individual teams.

We had to adjust our system several times through this process.

For example, we initially added a pretty strict validation script to our Continuous Integration system. For a Pull Request to be approved, it needed to include all the translations for all the new messages. The goal of this change was to make changes to messages atomic. The pull request that included changes to a message in javascript had to also include all the associated translations in the lang files. That was nice because we could never be missing translations. Also, one developer’s changes would not affect another developer downstream. Translations would always be grouped with the javascript changes so if the commit had to be reverted, all the associated changes would also be included in that commit.

What we realized through this rollout process was that this disrupted some teams’ workflows. Some teams liked to ship changes quickly behind feature flags before translations were done. This allowed them to iterate quickly and wasn’t detrimental to non-English users since these changes were only visible behind a feature flag.

To support this workflow, we added an allowlist system where developers could mark certain messages as okay to be shipped without translations. This allowlist included meta-data about the developer so it was easy to clean up once the translations were done or know who to bug if the translations were done but not added to the application. The default behavior was still to block untranslated PRs and ship atomic translation changes but we provided that sensible escape hatch for developers to use. This is an important lesson in user design. Provide reasonable defaults but also provide escape hatches because if you don’t provide those hatches and are too proscriptive, someone else will hack an escape hatch that you don’t like.

This is one of the numerous examples of times we had to readjust things during our rollout.

### Migration and removal of the old system

Once we were confident in scaling up the usage of the new system to all of our existing usages, we started migrating the usages of the old system to the new system.

The most common usages of the old system had one-to-one equivalents in the new system. Where these one-to-one equivalents exist, we were able to automate the migration by writing a code-mod. From the first two milestones, we’d developed a good sense of how to migrate the old usages to the new system and we were able to codify that migration. We were able to iteratively run the code-mod over sections of the code base, learning and fixing issues as we went. The remaining edge cases that could not be easily code-moded were few enough that we felt comfortable fixing manually.

### Rollout Conclusion

Why did we opt for such an iterative approach to our migration instead of a big bang approach where we try to migrate everything at once? By using an iterative approach we were able to learn as we go, adjusting and fixing issues as we went. We were able to educate ourselves and then the ambassadors and then the rest of the team in waves instead of all at once. We also could roll back if the migration started to block application development. With a big bang approach, we would’ve encountered those same issues but would be less equipped to deal with them and create more disruption for the web team.

In general, we found that feature flagging major changes was almost always the way to go. That way we could test within a smaller group first before rolling out to everyone. We did this throughout the project on a smaller scale when we had to change direction and make breaking changes. The same principles of feature development for an application apply to the development of developer tools!

## Learnings and what’s next

We learned a lot from this project. I already detailed most of the learnings in this post but I’ll summarize some of them here:

- Use widely adopted standards! Don’t reinvent the wheel. Why create a custom message syntax when engineers who have spent years thinking on this problem space had already developed ICU Message syntax?
- The value of co-location and picking the right source of truth! I cannot tell you how important putting related things in the same place is. It will make adding, changing, and deleting them much easier. It will be much more obvious how something is used, or it’s not used at all. It also makes code much more readable.
- Iterative rollout! Design the rollout of your change in a way that allows you to learn as you go. You can’t anticipate everything so build in space for re-correction into your plan. Pilot the changes with a smaller group and then ramp up to a larger group as you feel more confident. Also, it’s easy to go back and migrate usages of an old system if there are no new usages of it. Deprecate usages of the old system and enforce it if you can.
- Importance of an education rollout! Education is half of a rollout, don’t forget about it. It doesn’t matter how good your new system is if people don’t know to use it or how to use it or why it is better. An ambassador program is a great way of distributing this educational work and ensure that every team’s use cases are covered.

As for what’s next, there are many ways we can continue to improve this system. Right now, this system is only built to serve one application. We already are encountering the need for other applications to use the same system. This might require decoupling the system from the Sprout web application and hoisting it out of the web application repository. Should the shared system be a shared library that is imported or a shared service that the build process of various applications can make requests to? Perhaps our messages should be stored in a database instead of JSON files? We’ve already encountered issues with merge conflicts since git has a limited understanding of JSON and we already have unique ids so a database table might make more sense. Also currently, we are serving all messages to the end-user, regardless of what page they are on. Instead of having manually maintained page-specific lang files like we had trouble with before, maybe we should explore a solution that involved inlining the translated messages at build time and having localized Javascript assets. This is a common solution for larger web applications since it scales much better. Since the translations are inline, users will only be served the messages related to the Javascript they need.

As you can see, there are lots of directions to go and we’re just getting started!
