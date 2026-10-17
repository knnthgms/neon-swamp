---
slug: designing-for-low-bandwidth
title: "Designing for Low-Bandwidth: Lessons from Building in Africa"
excerpt: "Building React Native apps for markets with inconsistent connectivity forced me to rethink assumptions I had about what a 'normal' network looks like. Here's what changed."
tag: React Native
publishDate: "2026-11-15"
draft: false
---

When I joined OmniRetail, I assumed mobile development was mobile development. Same patterns, same libraries, same mental model — just smaller screens. I was wrong.

OmniRetail operates across several African markets where the median connection speed and device specs look nothing like the environments most frontend engineers test against. 3G is the ceiling, not the floor. Devices are two to three hardware generations behind. And users aren't sitting at a desk — they're in the field, in and out of coverage, often mid-workflow.

This post is about what that context forced me to learn.

## The assumption you don't know you're making

Most React Native performance advice is written for high-end Android and iOS devices on WiFi. The standard guidance — lazy-load images, paginate lists, avoid unnecessary re-renders — is correct, but it treats optimisation as polish. Something you do after things are working.

In a low-bandwidth environment, *those are the baseline requirements*. If you don't make offline-first a first-class concern from day one, you'll spend the second half of the project retrofitting it under deadline pressure.

## Offline-first, not offline-tolerant

There's a meaningful difference between an app that *works* without connectivity and one that *degrades gracefully* when connectivity drops. The first is a design decision you make upfront. The second is a series of patches you apply to an architecture that wasn't built for it.

We used Redux with a persistence layer (redux-persist) and a sync queue — local writes that flush when the device comes back online. The sync layer had to handle conflicts, partial failures, and the case where the same record had been updated on both the server and the device during a gap.

...

*This post is still being written. Check back on November 15, 2026.*
