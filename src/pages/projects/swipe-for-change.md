---
layout: ../../layouts/ProjectLayout.astro
section: Hackathons
title: SwipeForChange
date: 2026-07-19T09:30:00.000-04:00
description: Hack the 6ix 2026 | doomscrolling for social change
tags: ["Hackathon", "Hack the 6ix", "Environmental"]
techStack:
  [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Backboard.io",
    "Gemini API",
    "Auth0",
  ]
repo: https://github.com/zeukyr/SwipeForChange
demo: https://devpost.com/software/swipeforchange
---

# introduction

At [Hack the 6ix 2026](https://hackthe6ix.com/), my team developed **SwipeForChange**, a doomscrolling-style web app for users to scroll through local environmental petitions and take action by signing, sending an email to their local Member of Parliament (MP), or sharing the issue on social media. We ended up winning **2nd place** in **Deloitte's Green AI, and AI for Green** prize track!! 🏆🌿

Huge thank you to my amazing teammates: [Angela Li](https://github.com/zeukyr), [Jasmine Chen](https://github.com/J4sm1neC), and [Kale Wu](https://github.com/Kale-Wu)! <3

# video demo

Watch this to see what our app looks like and for some chaotic 2 am script-writing & acting...!

<div class="flex justify-center">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/sybXI_MoAcs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

# development

I worked mainly on infrastructure, and it was my first time using Next.js + MongoDB. After hooking up [Backboard.io](https://backboard.io/) for LLM integration and [Auth0](https://auth0.com/) for user login, I made the actions page where the user can sign the petition, send an LLM-generated email to their local MP, or share an LLM-generated social media post to various platforms. Then I spent the rest of the time on UI/UX, some documentation, and a bit of project management (Notion) & graphic design (Canva). These tasks were all team efforts though, and I was by no means the only person who worked on any of these! :D

# reflection

## what we did well

We spent a long time on Friday evening deciding on our project idea -- thanks Kale for insisting we come up with strict priorities to fast-track decision-making (we learned a lot from high school FRC after all). This was very helpful to make sure we didn't overscope our project while developing features, prioritizing things like polish and usability.

We also worked a lot in parallel -- Angela and Jasmine spent multiple hours on the pitch, video script, and video filming/editing while I was still working on the UI. In the end, we had everything ready for submission a few hours before, which was very nice for my stress levels.

## did I sleep?

With the hackathon being Friday to Sunday, we decided to sleep more (~6 hours) on Friday night in case we needed to pull an all-nighter later. I slept for around 3 hours on Saturday night (the most out of my lovely team) and actually didn't feel that tired on Sunday. Then I crashed on Monday night and slept for 11 hours straight... :'D

## flix...

I could go on a very long rant about FlixBus and how bad their system is at communicating changes to customers. Because I had issues this time both going Ottawa → Toronto and Toronto → Ottawa. I wish high-speed rail in Canada could get built faster. :(

## side quests!!

We took many breaks during the hackathon, including going to Bloom Café for matcha, trying to put together a floor lamp, and putting a comical amount of effort into our acting for the video. Super fun experience overall!! :D
