---
layout: ../../layouts/ProjectLayout.astro
section: Quests
title: Geohashing
date: 2026-06-10T00:22:00.000-04:00
description: Calculating a new location every day.
tags: ["Algorithms", "Games", "Daily Games", "Geography"]
techStack: ["Python"]
repo: https://github.com/angelayzheng/geohashing
demo:
---

# introduction

As explained in my [README](https://github.com/angelayzheng/geohashing/blob/main/README.md), geohashing was an algorithm originating from [xkcd comic #426](https://xkcd.com/426/):

<img src="https://imgs.xkcd.com/comics/geohashing.png" alt="xkcd comic #426 about geohashing" class="mx-auto w-full max-w-xl" />

Essentially, the latitude and longitude lines divide the Earth into cells, and each cell is represented by an integer tuple. For example, the University of Toronto is located in the `43° N, -79° E` cell. The decimals after the integers nail down the specific location within the cell. Thus, the geohashing algorithm uses the daily [DOW](https://en.wikipedia.org/wiki/Dow_Jones_Industrial_Average) opening price and some hashing to generate random decimals for each day, which, added on to the integer tuples, give a specific location within each cell.

It's become a game for "geohashers" to travel to their nearest geohash location on a given day. There's more information about this (and lots of pictures) on [geohashing.site](https://geohashing.site/geohashing/Main_Page). There are also a variety of geohash location calculator sites, the main one being [geohashing.info](https://geohashing.info/).

# what I did

I thought it would be fun to try and get to one of these geohash locations one day, but I'm too lazy to check the site manually every day. Solution: calculate or get the closest daily geohash to my location (since it can be in any of the 8 neighbouring cells) and notify me somehow. Here's what I tried.

## Attempt #1: Reverse engineer [geohashing.info](https://geohashing.info/).

**Problem:** could not find their backend algorithms in their [GitHub repo](https://github.com/Eupeodes/gh). Almost impossible to replicate their exact results by blindly following [geohashing.site](https://geohashing.site/geohashing/Main_Page)'s described algorithm (too many issues with dates/timezones and places where roundin happens).

**Foreshadowing:** I was wrong and didn't poke around enough -- the algorithms were publicly available the entire time.

## Attempt #2: Scrape from [geohashing.info](https://geohashing.info/) every day.

[geohashing.info](https://geohashing.info/) has a nice API for passing in date and location parameters through the URL.

**Problem:** it only initially shows pins on the map. The actual calculated coordinates aren't sent to the client side until a specific pin is clicked, which requires vision of some sort. I decided it would be too difficult to make that happen.

## Attempt #3: Take a screenshot of [geohashing.info](https://geohashing.info/) every day.

I tried writing a script that navigates to [geohashing.info](https://geohashing.info/) in browser headless mode, takes a screenshot, and emails that screenshot to myself.

**Problem:** I ran into multiple issues. With Chrome, a cookies popup kept displaying in the screenshot, and there wasn't an easy way to disable the popup. Then I tried Firefox, but I couldn't set a delay between loading the page and taking the screenshot, so the screenshots kept capturing a barely-loaded map. Anyway, I gave up on this idea too -- the screenshot wouldn't have been that useful anyway.

I almost gave up on this entire side quest, but I came back to this a few weeks later with Attempt 4.

## Attempt #4: Go back to the beginning.

I _finally_ realized where the backend algorithm was, and it was written in PHP. I decided to turn this into Python with the help of LLMs, and after resolving some more rounding issues, it finally worked!

Adding the emailing part was pretty simple, just a matter of using `smtplib` and setting up my Gmail App Password.

Then I used Windows Task Scheduler to set up an automation. This took about two days (to wait and see if my first configuration worked -- _spoiler: it didn't_). It works now though, as long as I overlook the fact that it can't execute the script if my laptop is asleep at 11 AM. Easiest solution for this was just setting it up to execute as soon as it's able, if it wasn't able to execute on time.

So now I have a bunch of emails from myself. Of course, the week that I had a bunch of applications due and no time to go anywhere was the week that almost every day was fairly close to me. I will try to make it to at least one day's location this summer...

# other ideas

Last thing: some ideas that I may or may not implement sometime:

- Improve the email body's readability, because I'm lazy and want to read even less every day.
- Hook up the Google Maps API to judge a location's reachability by how long it would take to drive there, not just the pure distance. Very relevant because a lot of geohashes are across the Ottawa River in Gatineau, which might be geographically close to me but would take over an hour to drive to.
- Hook up some external library to come up with a better reachability score for the last few steps to get to the destination. Even if a geohash location is close enough to me, if it's in the middle of thick forest or someone's property, I can't really get there.
