---
layout: ../../layouts/ProjectLayout.astro
title: Huffman Coding
date: 2026-04-30T00:00:00.000-05:00
description: A journey into compression algorithms.
tags: ["Algorithms", "Data Compression"]
techStack: ["Python"]
repo: https://github.com/angelayzheng/huffman-coding
demo: 
---

# how it started...

Last week, a Friend Who Shall Not Be Named (I will refer to them henceforth as FWSNBN) challenged me (and later another friend) to write code for Huffman compression from scratch.

# obligatory About section

*Obligatory note: Wikipedia definitely explains these better than I can.*

[Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding) is a lossless data compression algorithm that compresses text (or any file, really) by computing the relative frequency of each character, then turning these into a binary tree, with each character being a leaf in the tree. To determine the encoding for each original character, you traverse from the root of the tree down to the character, and each traversed layer appends a 0 or 1 to the character encoding.

By constructing the tree in this way, the most frequent characters have the shortest encoding, thereby making it efficient at compressing the data. Also, Huffman is a [prefix-free code](https://en.wikipedia.org/wiki/Prefix_code), meaning no character encoding is a prefix for another character encoding, allowing for easier decoding.

Use cases: Huffman is combined with [LZ77](https://en.wikipedia.org/wiki/LZ77_and_LZ78) to get the [DEFLATE algorithm](https://en.wikipedia.org/wiki/Deflate), which is used for [ZIP folders](https://en.wikipedia.org/wiki/ZIP_(file_format)).

# what I did

*Obligatory note: my code is [open source on GitHub](https://github.com/angelayzheng/huffman-coding), not that I'm expecting it to be useful in any way to anyone.*

Armed only with [*Algorithms Unlocked* by Thomas H. Cormen](https://www.penguinrandomhouse.ca/books/656664/algorithms-unlocked-by-thomas-h-cormen/9780262518802) (bought by my parents many years ago to get me to learn CS and sitting on my shelf since) and the [Huffman Wikipedia page](https://en.wikipedia.org/wiki/Huffman_coding), I set out to write a Python module that implements this algorithm.

As a Perfectionist and Person Who Loves Organization and Documentation, and since I was using Pycharm originally, I created a custom `HuffmanBinaryTree` class and made sure to write sufficient docstrings, representation invariants, and preconditions for all my methods (CMP1 students will know). 

My algorithm is basically split between two files -- `huffman_compression.py` contains the actual algorithm (the main functions are `huffman_encode` and `huffman_decode`, along with all their helper functions & methods) and `huffman_io.py` contains all the file read/write functionalities. I included a `runner.py` file (based on what FWSNBN wrote) that can run my algorithm on any specified text file (see the [README](https://github.com/angelayzheng/huffman-coding) for details).

# optimization

FWSNBN was generous enough to spend some amount of hours optimizing my algorithm (most of `huffman_decode` in `huffman_compression.py` and lines 55-64 of `huffman_io.py`), which significantly decreased the decoding time from (off the top of my head) ~30-60 seconds to less than 3 seconds. This was by reading the binary file as actual binary data, rather than reading the entire thing as a string and slowly removing the string (which takes O(n) time for each character, resulting approximately in O(n^2) time total).

I also then realized that my algorithm embarrassingly managed to take up more disk space with the encoded version than the original, thereby turning Huffman compression into Huffman inflation. I naively had saved the encoding into a text file with UTF-8 encoding, and the binary was obviously much longer than the original text file. I modified `huffman_io.py` to save the encoded data in binary format, which required some more finagling of Python byte reading, but I got there in the end.

# results

FWSNBN conducted some test runs using all 3 of our algorithms (shoutout to *The Great Gatsby*, *Alice in Wonderland*, and *Dune*; *Pride & Prejudice*, one of my favourite novels, was an addendum), and mine (with optimizations) turned out to be fastest. :D Although as you can see, mine was definitely not the most optimized in terms of space (you know what they say about [having a constant speed through spacetime](https://backreaction.blogspot.com/2020/08/do-we-really-travel-through-time-with.html)). Here's the data that I stole:

```
Huffman Benchmarks (time is in ns)

300K      gatsby.txt
----  Angela Optimized  ----
164K      gatsby.txt.huff
8.0K      gatsby.txt.tree
291780000ns
----  FWSNBN  --------------
192K      gatsby.txt.huff
751163000ns
----  Other Friend  --------
164K      gatsby.txt.huff
377688000ns

172K      alice.txt
----  Angela Optimized  ----
 96K      alice.txt.huff
8.0K      alice.txt.tree
206514000ns
----  FWSNBN  --------------
104K      alice.txt.huff
455659000ns
----  Other Friend  --------
 96K      alice.txt.huff
232271000ns

1.1M      dune.txt
----  Angela Optimized  ----
656K      dune.txt.huff
8.0K      dune.txt.tree
1100954000ns
----  FWSNBN  --------------
664K      dune.txt.huff
2586312000ns
----  Other Friend  --------
656K      dune.txt.huff
1384351000ns
```

# obligatory Lessons Learned

1. A small, easy algorithm to implement will always be more complicated than you think it is.
2. ... Especially if your friends are (healthily) competitive and want to optimize everything.
3. ... Especially if you got challenged into doing this by FWSNBN.
4. ... We all thought this would only take a few hours at most, but ended up spending multiple days ruminating about this.
5. For your sanity, try to avoid any sort of annoying standards like UTF-8.
6. Good documentation is extremely valuable, no matter what your friends say.
7. Just use Git, even if you don't think this will be a project requiring version control, because from lessons 1-4, you will reach a point where you wish you had used Git from the start. And now all you can do is go back through message history and commit to your repo over a week after you did all of this.
8. As my friends would say, sometimes these kinds of crazily optimized algorithms are better left to whoever wrote them first, probably in assembly or something, because we will never be able to beat them (especially not in Python). Anyway, this was still a good learning experience!
9. I hate delimiters.