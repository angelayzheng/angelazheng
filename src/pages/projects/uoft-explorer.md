---
layout: ../../layouts/ProjectLayout.astro
title: UofT Explorer
date: 2026-06-16T00:22:00.000-04:00
description: Graph visualizer and planning tool for courses at the University of Toronto.
tags: ["UofT", "Courses", "Graphs"]
techStack: ["Python", "Flask", "React", "TypeScript", "Tailwind CSS"]
repo: https://github.com/andrei-akopian/UofTExplorer
demo: https://uoftexplorer.ca
---

# introduction

[Andrei](https://github.com/andrei-akopian), [Jack](https://github.com/PeanutPiglet), [Jasmine](https://github.com/J4sm1neC), and I originally had to come up with a graph-based project idea for [CSC111 -- Foundations of Computer Science II](https://artsci.calendar.utoronto.ca/course/csc111h1). We ended up going with the simple-to-understand but harder-to-implement topic of UofT courses. After CSC111 was over, we completely redid the frontend and deployed it! :D

For actual demos, check the [GitHub README](https://github.com/andrei-akopian/UofTExplorer/blob/main/README.md) for explanations of the pages. The [website](https://uoftexplorer.ca/) also has help menus.

# structure

- Data is scraped and parsed from the [UofT ArtSci Academic Calendar](https://artsci.calendar.utoronto.ca/) into json files (thanks Andrei).
- Backend server (Python, Flask) reads from the json files and constructs the graph. Does all the computation stuff, as backend does.
- Frontend (React, TypeScript, Tailwind CSS) is, well, a frontend. Does API calls to the backend for data.

# what I worked on

## Originally during the course:

- **Core graph data structures:** My contributions include our custom hashing formats for the requisite nodes and determining whether a requisite is satisfied, given a list of courses. Basically `core.py`.
- **Graph constructor:** Wrote part of the constructor algorithm -- specifically parsed the nested requisite format. Love recursion.
- **Filtering:** Wrote our filtering algorithms (i.e. the filter dropdowns on the top right). My favourite methods: `CourseGraph.get_filtered_courses` and `CourseGraph.get_filtered_programs` in `core.py`. (The idea of having a list of lambdas passed in was to only go through the dictionary of course nodes once, and be able to return courses that match multiple filters.) Love lambdas.
- **Searching:** Refined our searching algorithms for the search bar -- these are all the `get_*_suggestions` functions in `algorithms.py`. Uses my favourite beautiful `get_filtered_courses` and `get_filtered_programs` methods.
- **Docstrings:** I am a formatting maniac, and have a bad habit of writing multi-paragraph docstrings for complex functions/methods... but it does really help to remember what I did later on.
- **Frontend:** Edited the styling a bit, but didn't touch it too much.
- **Housekeeping:** A lot of docstring writing, [PythonTA](https://www.cs.toronto.edu/~david/pyta/) fixing, and report writing. How it be for school assignments.

## After the course:

- **Project manager (lol):** Acted as an annoying project manager (sorry guys). We have a to-do database on Notion now though!
- **UI**: Worked mostly on the UI after I was annoying and insisted that we use frameworks (thank you Jack for carrying out the migration). Thank you Jasmine for suffering through UI work with me! <3
- **Categorizing search results:** Split search results into courses, programs, and departments tabs for ease of access.
- **Graph node information panel:** Added information panels to show detailled information about each node, but in a centralized panel listing all the nodes in the current graph.
- **Increased colour flexibility:** Used [ColorAide](https://facelessuser.github.io/coloraide/) to colour map the base node colours to a gradient, based on an easily swappable metric. Currently the metric is the course code number, with white being first year courses and dark blue being upper year courses.
- **Formatting:** Insisted that we use automatic code formatters ([Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Black](https://black.readthedocs.io/en/stable/)). And [standard commit message & PR formats](https://github.com/andrei-akopian/UofTExplorer/blob/main/CONTRIBUTING.md).

# fun stuff

- We somehow managed to spend a crazy amount of time in Robarts together, not being very productive...
- We also spent a crazy amount of time after midnight together during the week of the project deadline. Not very fun times when we were delirious, but core memory of first year...?!
- I averaged 6h 15m of sleep in March (oops). Not fun for my health probably, but it's okay -- I don't know if I've ever had a month with average above 7h.
- Most of all, [insert sappy story about how we are all besties now]!!

# future

We still have a lot of ideas and tasks written down for UofT Explorer, so I'll update this post once in a while. :D
