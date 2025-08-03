---
title: Technical Migrations – Making a new path in the woods
date: "2025-7-3"
template: "post"
draft: false
category: "Engineering Teams"
tags:
  - "teams"
  - "maintenance"
  - "systems"
description: "Learn how to safely migrate from old systems to new ones without disrupting users—using the metaphor of building a new path through the woods. This post walks through a thoughtful, phased approach to change: building in parallel, encouraging adoption, adjusting based on feedback, and retiring the old system with confidence."
---

![Photo by Beth MacDonald on Unsplash](/media/beth-macdonald-P3rS8J1THi4-unsplash.jpg)

If you build anything in software, you will eventually have to change it or remove it. There comes a time when the old system or library or endpoint or function is no longer cutting it and you have to transition to a new one. This is usually not as simple as changing it in place or ripping it out and replacing it. Often the current system is still being used. To change it or remove it in a brute force way would be disruptive. How do we make these changes safely so that it isn’t disruptive but also allows for forward progress? I’ve found it helpful to thing of paths through the woods.

You can think of your current system was a pathway through the woods. It has served its purpose, allowing you to stroll through the woods but maybe it’s eroding away or you want it to not be so close to the edge of the forest. It’s time for a new path through the woods. The issue is that people are still using it and you can’t make a new path overnight. You don’t want to shut down the path and prevent anyone's access to the woods in the meantime. You might also want to gauge how happy people will be with the new path. What’s a good way of migrating from the old path to the new path?

## 1. Build the new path

Let’s start by build the second path while the first path is still operational. Building the second path isn’t instantaneous and this allows us to take the time to build it properly without limiting people’s access to the woods. This does require us to build the new path in a slightly different spot. But doing so means we can have both paths–new and old–at the same time. We can limit access to the new path to only those working on it. This allows us to iterate on it and make drastic changes if we need to without disrupting people not involved in the project. Since we aren’t impacting people’s usage of the old path, we aren’t rushed to deliver access to the woods quickly and instead focus on building something that will achieve our goals.

## 2. Deprecation of the old path

Now that we have a new path build alongside the old path, we can start opening it up to the public. This can be gradual with a pilot group and ease into 100% of foot traffic or all at once depending on the project and the amount of foot traffic. This is the stage where we start informing people that there is a new path and that the old pathway is going away. We can put up new signage as a form of documentation, informing people coming to the woods to try out the new path. We can start to gently nudge these people to get familiar with the new path because the old one is going away soon. But, it is important that the old path is not closed yet. The old path is still accessible. This is in case there are situations or use cases that we didn’t carry over to the new path. Or if there is an issue with the new path that causes use to close it temporarily and revert to the old path. This is the first time the new path is being properly used so it’s important to have a fallback in the old path, just in case. Adventurous hikers can try out the new path and let us know what they think. And more cautious walkers can stick to the old path until it is permanently closed. This is called deprecation of the old path, since it is still usable, we just have documentation letting people know that they should start using the new system but that isn’t required or enforced yet.

## 3. Monitor and Adjust

This is where we pay attention to how people are using (or not using) the new path. Are people using the new path for some things and not all things. Are people using the new path for hiking but not birding? Are older people or people with mobility issues not using the new path? Why might that be? Are there use cases that the old path addressed that the newer path doesn’t? Can we continue to migrate those use cases? Can we make the path more accessible? Or more bird friendly? Do we need to document on signs at the start of the path to set expectations for that they should expect from the new path. This step is important for the migration to go smoothly. If you skip this step, you risk people not being able to use the new path, demand the old path back, or forge their own path through the woods to meet their needs (not sustainable for anyone!).

## 4. Remove the old path

You’ve build the new path, encouraged its usage, and adjusted it to make sure it meets the needs of the people using the old path. It’s now time to prevent the usage of the old path by blocking off access and removing it from the woods. Now everyone should be using the new path. Your migration is complete! That is, until you need a new path..

As you can see, this is a metaphor that mirrors closely the migration of technical systems. The path ways are digital but they still have traffic and use cases you have to migrate carefully. By building a second system while maintaining your current one, you can iterate and transition traffic in stages. Doing so will ensure that the new system is used quickly without disrupting current workflows. Good luck and happy path building!
