---
title: Language and Engineering systems are ingrown 
date: "2020-11-05"
template: "post"
draft: false
category: "Engineering Teams"
tags:
  - "teams"
  - "maintenance"
  - "systems"
  - "language"
description: "In some ways we can think about engineering systems in the same way linguists think about natural languages. Both can become ingrown and complex over time. How might we relate what we know about how \"simpler\" natural languages are formed to engineering teams and systems?"
---

![Photo by Alice Donovan Rouse on Unsplash](/media/alice-donovan-rouse-yu68fUQDvOI-unsplash.jpg)

## Human Languages are Ingrown
A major theme of linguist [John McWhorter's](https://en.wikipedia.org/wiki/John_McWhorter) book ["What Language Is (And What It Isn't and What It Could Be)"](https://bookshop.org/books/what-language-is-and-what-it-isn-t-and-what-it-could-be/9781592407200) is that languages become ingrown over time. What he means by this is it is natural for human languages to develop complexities and quirks when left alone over time. McWhorter compares languages to kudzu, "they grow hungrily, ceaselessly, and rampantly into available space, here sprouting multiple plural markers, there conjugating verbs differently according to whether they are about doing something to something (like throwing) or just about experiencing something (like falling)". In fact, of the thousands of spoken languages in the world, it is much more common to have gendered words or odd categorization flourishes and have more exceptions than rules.
McWhorter explains that there are a number of reasons why this is. Though we often think of language as something that is written and documented, in actuality, language is something that is spoken. Language has been spoken for far longer than it has been written (150,000 years instead of 5,500 years). In fact, a great number of languages in the world have no written component. This makes languages much more flexible and subject to change than people realize. You can think of language as a lower fidelity projection of reality into grammar and vocabulary. As reality changes (politically or culturally), language must also change.
Since language changes, grammar rules collide and conflict causing edge cases and exceptions to emerge. In this way, languages become ingrown and more complex.
## Engineering systems + teams are Ingrown
In these ways, languages are similar to systems developed by teams of engineers. As time goes on and different constraints and requirements emerge, the system must evolve. With a changing system, business logic written a couple of months ago might be stretched further and collide with other rules. Components might be reused in ways that were unthought off when they were originally designed. Edge cases and exceptions emerge and complexity seeps into the design. Think of this as the natural [entropy of systems](https://twitter.com/cramforce/status/1139925981051801600).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yesterday I overheard &quot;Easy-to-replace systems tend to get replaced with hard-to-replace systems.&quot; and now I can&#39;t stop thinking about whether this is just a restatement of the second law of thermodynamics in terms of systems design.</p>&mdash; Malte Ubl (@cramforce) <a href="https://twitter.com/cramforce/status/1139925981051801600?ref_src=twsrc%5Etfw">June 15, 2019</a></blockquote> 

Engineers might identify this as a good time to refactor the design of a system. With the constraints and requirements we know now, we might re-design the system differently than when we had originally.
What would refactoring a human language look like?

## Refactoring Language
Some languages are more ingrown than others. Languages spoken by people with less exposure to other communities or cut off in some way (think languages spoken on islands) tend to become more ingrown than languages spoken by people who speak other languages. This is because children are good at learning complex languages, adults aren't. When languages are more isolated and it is only children learning them, they continue to become more complex and ingrown. When languages are in a position where adults are learning them due to trade, imperialism, slavery, or any number of political or cultural reasons, they tend to evolve to become simpler so that adults can learn them easier. When adults have to learn second languages, those languages tend to become simplified over time. Good examples are English which was learned by Vikings in the 8th century A.D. and Persian which was the primary trade language of the Persian Empire and spoken all over the Middle East. I like to think of these simplifications to languages like refactoring. They revisit what is required of the language and smooth out some of the more complex rules and exceptions. They come about when a new person has to learn an ingrown language.
> Disclaimer: No metaphors are perfect. I am not advocating for the spoken languages to be “refactored” in the same way that engineering systems are.  Ease of learning is not necessarily the “goal” of a natural spoken language unlike constructed (programming) languages and systems. Natural languages are in many ways an organic byproduct of culture, history, and politics of the people speaking them. 
## New Engineers simplify systems
I believe ingrown engineering systems are similar. Engineers on a team that maintains a system understand the history behind the exceptions. They understand what deadlines, third party libraries, external issues, and the lack of resources contributed to some of the edge cases and quirks. They might be too close to that history to see what might be confusing about the system. New engineers learning the system for the first time feel the rough edges more acutely. They can identify where the complexities lay and how a system can be refactored to be simpler. Like adults learning a second language, an engineer learning a new system is only seeing the final, ingrown product and not the history that leads up to it. With that perspective, they can see what is confusing and where changes can be made to smooth out the complexities. They can work with existing engineers to identify and refactor confusing elements of the system.
I believe that rotating new engineers between teams is key to maintaining simple systems. It is also important for existing engineers to listen to the friction that newer engineers identify because it is harder for existing engineers to notice those same frustrations. Without new eyes, systems become ingrown and overly complex without the perspective to understand why they are confusing.

