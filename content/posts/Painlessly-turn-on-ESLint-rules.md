---
title: Painlessly turn on ESLint rules
date: "2019-06-08"
template: "post"
draft: false
slug: "/posts/painlessly-turn-on-eslint-rules/"
category: "Linting"
tags:
  - "ESLint"
  - "esplint"
  - "linting"
description: "Linting is a powerful way to catch bad code and enforce best practices. That said, turning a rule on for an existing project can be difficult. esplint is a tool that makes it easier to introduce new ESLint rules to large, legacy codebases by tracking, enforcing, and updating file and rule scoped warning counts."
---

[esplint](https://github.com/hjylewis/esplint) is an ESLint warning tracker to help introduce rules into a legacy code base.

### This tool will…

- Allow you the benefits of turning on a new ESLint immediately without forcing you to fix all the violations first.
- Prevent future violations from being introduced.

### This tool won’t…

- Automatically fix ESLint violations for you.

## The Problem

Linting is a powerful way to catch bad code and enforce best practices. By statically analyzing your code, linters create fast, consistent feedback loops that can flag bad practices, anti-patterns, and typos. They are great for educating developers by providing descriptions and resources for best practices. The JS community at large has embraced the power of linting through tools like [ESLint](https://eslint.org/) with its robust plugin ecosystem.

That said, turning on a new linting rule for an existing project can be difficult. When working with legacy codebases with a lot of code, each new rule can mean hundreds of violations that need to be fixed before the rule can be properly turned on. All codebases, regardless of their age, will have this issue eventually since new ESLint rules being created constantly. Who knows what will be a pattern today but an anti-pattern tomorrow?! Turning on rules can be very painful, surfacing hidden violations that you must fix before you can use the rule at all.

## Past Solutions

### Using ESLint Warnings

In general, it is good practice to have your linter block your continuous integration (CI) so that violations don’t get introduced to your codebase. This means in order to introduce a new ESLint rule, one would need to fix every violation. However, this wouldn’t be the case if we could classify these new violations as “non-blocking”. We can use ESLint’s warnings for this purpose. ESLint returns an error exit status if it finds violations of rules configured to `error` but not violations of rules configured to `warn`. If we turn on a new rule as a warning, we can introduce a new rule and not be blocked while fixing all the new violations. Warnings are great way to educate codebase contributors. We can work on fixing the newly exposed violations later without blocking anyone and then eventually switch the rule from `warn` to `error` when all the violations are fixed. However, ESLint's warnings alone will not prevent new violations from being introduced the way that errors do by nature of them not blocking CI. If you fix 1 violation per 2 being introduced, you’ll never finish!

### Using ESLint Max Warnings

ESLint does let you set a [cap on the number of warnings](https://eslint.org/docs/user-guide/command-line-interface#options). For example, `eslint --max-warnings 100`. If your codebase has more warnings than that number, ESLint fails, otherwise, it passes. We can use this feature to prevent new violations from being introduced while the new rule is still a warning. We just set the max number of warnings to the initial number of violations, then if someone accidentally tries to introduce a new violation, ESLint will block the CI. As the warning count does down, we can manually lower the max number. This is a better solution but still has some issues:

- What if someone fixes a violation in one file but accidentally introduces one somewhere else? The count will still be under the max, ESLint will still pass but a new violation was introduced.
- What if we want to introduce a second new rule? That count has to be the sum of the number of violations. How will we know when we’re ready to turn one of the rules on as an `error`?

What I am illustrating is that this approach is scoped too generally. We only have a totally warning count to enforce. There are no file or rule specific counts.

### Using ESLint disable comments

Another solution is turning on the new rule as an `error` and disabling ESLint for the specific violating lines using ESLint’s [disable comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments). This definitely solves some of the issues we had with the previous situations. This is more specifically scoped, scoped to the violating code. It won’t block introducing the new rule until all the violations are fixed and it will block CI if new violations are added. However, it does go against the point of turning on the rule. By disabling ESLint on those lines, you are suppressing the potential warnings you’d be getting, missing out on the education that ESLint rules provide, and basically giving up on ever fixing those hidden violations.

## Introducing esplint!

[esplint](https://github.com/hjylewis/esplint) is a tool that allows you to turn new rules on as warnings, and prevent further violations while being scoped by file and rule. esplint is built on top of ESLint and uses it under the hood. Running esplint tracks the number of ESLint warnings per file and per rule, and prevents the number of warnings from increasing. When the number of warnings decreases, esplint records the new lower number automatically. This way you can introduce a new rule and fix existing legacy violations over time while avoiding further violations.

Running esplint runs ESLint and creates a record file called `.esplint.rec.json` that stores information about the number of warnings per file and per rule. This works in a similar manner to lock files for npm and yarn and should be committed with your code. When esplint is run again, it will error if any of those counts get larger and update the counts if they get smaller. esplint encourages you to run esplint as part of our pre-commit hook using [lint-staged](https://github.com/okonet/lint-staged). Since it runs ESLint underhood, it can even replace your ESLint pre-commit hook. See the [Getting Started README](https://github.com/hjylewis/esplint#getting-started) for more information.

If you just want the checking functionality of esplint and not the automatic updating of counts, you can use the `esplint --no-write` option. The option `esplint --overwrite` is provided as an escape hatch for situations when introducing a new violation cannot be avoided. In those cases, esplint will disregard your existing `.esplint.rec.json` and will not error if a warning count increases.

For a readable list of files with violations and total warning counts run `esplint stats`.

## Things I learned

### The perils of writing to disk

Given their use of lock files, esplint is closer to npm or yarn than ESLint since it leaves a necessary artifact on disk to be committed to the codebase. This can add complexity and introduces the problem of merge conflicts. Whenever there is a central file on disk that many team members can touch, accidental merge conflicts have to be considered. esplint has gone through multiple improvements to avoid issues of merge conflicts.

In my initial approach, the record file was unsorted and included information for every file, even those that contained no violations. Whenever a new file was added to the codebase, it’s `.esplint.rec.json` entry would be added. Since the record file was unsorted, this meant the entry was always added to the bottom of the file. This obviously created conflicts when multiple people created new files in separate branches. Spoiler alert, I found out this happens a lot! Changing the file to store records in sorted order helped avoid a majority of unnecessary merge conflicts. Removing entries for files with zero violations from the record file also helped reduce merge conflicts. Further, it greatly reduced the size of the record files themselves. This change reduced the length of record files by a hundredfold in some codebases.

While these modifications improved the lock files, they didn’t prevent merge conflicts in the record file completely. Git doesn’t understand JSON format and only understands lines being removed and added. Git can get confused when violations are being fixed in separate branches so that multiple lines of the record file are being removed. In this case, running `esplint` will attempt to automatically resolve the git conflict similar to how npm resolves lock files.

### Fail loudly

Sometimes it can be more beneficial to fail loudly than fail gracefully but silently. An early version of esplint would fail gracefully when it encountered a record file that wasn’t valid JSON. It would continue on as if it were starting from scratch, ignoring the invalid record file. This made sense at the time as an appropriate way of handling an invalid record. But this would also cause esplint to analyze the entire codebase the same way that it does when no record exists. This can be very slow depending on the size of the codebase.

When an esplint user accidentally committed a corrupt record file to their repository, others started reporting very slow esplint times on the pre-commit hook which was confusing and hurt productivity. It took a while to discover the invalid JSON and understand what was happening. It wasn’t helpful that esplint was silently pretending everything was all right and it made it harder to track down the cause. Now, instead of failing silently, esplint fails in this situation with a helpful error message that lets the user know that the record file was corrupt.

### The danger of warning fatigue

Unfortunately, even with esplint, violations will not fix themselves! Depending on your team, contributors might not be motivated to fix warnings on their own. At work, we’ve found success focusing on one new rule at a time and scheduling hacking sessions where we work to resolve violations. [Warning fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue) is real and focusing on one at a time can mean introducing new rules faster.

## Summary

esplint will make it easier to introduce new ESLint rules to large, legacy codebases by tracking, enforcing, and updating file and rule scoped warning counts.

For more detail about getting started, usage, and configuration see the [README](https://github.com/hjylewis/esplint#esplint).
