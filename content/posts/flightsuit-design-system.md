---
slug: flightsuit-design-system
title: "FlightSuit: What I Learned Maintaining a Design System"
excerpt: "Joining Aviatrix and immediately being handed ownership of FlightSuit was a crash course in everything design systems quietly do for you — and everything they don't."
tag: Design Systems
publishDate: "2026-11-01"
draft: false
---

Six weeks into my time at Aviatrix, I was handed ownership of FlightSuit — the internal component library and design system used across the Copilot platform. The person who had been running it was leaving. There was no handoff document. There was a Figma file, a Storybook instance, and a Slack channel with 200 unread messages.

This is what I learned.

## Design systems are load-bearing infrastructure

The thing that surprises most engineers who inherit a design system is how much is implicitly load-bearing. You can't just refactor a token or rename a component prop without tracing every downstream dependency. At scale, a design system is less like a library and more like a shared contract — and the more teams consuming it, the more expensive it is to break.

FlightSuit had four internal teams as consumers. Each had their own patterns of using (and working around) the system. Before I could improve anything, I needed to understand where the gaps were — the places where teams had diverged from the system because it wasn't meeting their needs.

## The gap audit

I spent the first two weeks doing a visual audit of the product: screenshotting every unique UI pattern I could find, grouping them, and mapping them against the components that existed in Storybook. What I found was a long tail of one-off implementations — custom modals, bespoke table variants, inline styles that overrode design tokens.

...

*This post is still being written. Check back on November 1, 2026.*
