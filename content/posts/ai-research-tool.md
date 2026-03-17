---
title: Building an Agentic Research Chain
date: "2026-03-16 15:18:39"
draft: false
tags:
    - llm
    - ai
    - agent
    - research
    - markdown
    - alfred
---

This is a work in progress. I am working and thinking through building a tool that will speed up research without getting in the way.

I don't want the AI to guide the research or think for me, but I do want to have a TA at my disposal to do the true drudge work and source things for me.

I may use something like [openclaw](https://openclaw.ai) for the foundation of the system.

Some features: 

- Bibliography manager - like zotero, but I want the llm to do a lot more of the work. I should be able to take a picture of a book or journal article and just throw it at the llm and know that it will be added to my database or it will reach out to me if it is having trouble. Zotero is great, but I am not always disciplined to be on top of it.
- I like paper books, but they are a pain to work with. With multi-modal ai this may change. I can take a picture of the book, write a note in chat, and have the image transcribed and the note added. It should just be waiting for me in my notes.
- The most important feature is low friction. I should be able to add things fast and via mobile.
- The second most important feature is recall. I should be able to find what I put in.


Resources:
- [Citum](https://citum.org): a modern citation engine, like [citeproc-js](https://github.com/Juris-M/citeproc-js). This is lower level than zotero, but may serve as a replacement.
- [Pandoc](https://pandoc.org) to convert documents
- [Djot](https://github.com/jgm/djot) - a markdown alternative, probably don't need.
