---
title: The Hero of Zotero
date: 2024-09-29 18:44:28
draft: false
summary: How I use the Zot Hero plugin with Alfred to add Zotero references anywhere.
tags:
    - Research
    - Tools
    - Productivity
    - Alfred
    - Zotero
    - Writing
---

I use [Zotero](https://www.zotero.org), and you should too. It's awesome. You should never ever spend time on formatting your bibliography or footnotes. You also should not by keeping a long list of books and references by hand. Let Zotero take care of all of that.

If you are writing in Word, use the [Zotero Word Plugin](https://www.zotero.org/support/word_processor_plugin_usage). It's great. Instantly insert footnotes and build a bibliography with a click of a button.

If you are taking notes in something like [Obsidian]({{< ref "https://obsidian.md" >}}), it can be a pain to reference a work. Enter [Zot Hero](https://github.com/deanishe/zothero). 

This puts your Zotero library at your fingertips. Open Alfred, trigger Zot Hero with `zot`, and get your book. This enables you to stay in the flow while you are writing.

![Zot Hero Screen Recording](/images/zot-hero-screen-recording.gif)

By default, the settings are `enter` to open and `⌘ enter` to copy. I wanted to swap that. There was no easy way to do it in the Workflow config, so I did modify the code. 

You can find this in the zh.py file, starting at line 186. 

```
# ------------------------------- CUSTOM CODE ------------------------------- #

it.setvar('url', url)
it.setvar('citekey', e.citekey)
it.setvar('id', e.id)

# ------------------------------------------------------------------
# Citations
if style:
it.setvar('stylename', style.name)  # for notification

it.setvar('action', 'copy-citation')
it.setvar('style', style.key)

# For notification
action = 'Paste' if AUTOPASTE else 'Copy'
mod = it.add_modifier('alt', u'%s bibliography (%s)' %
                      (action, style.name))
mod.setvar('action', 'copy-citation')
mod.setvar('bibliography', '1')
mod.setvar('style', style.key)

else:
it.add_modifier('cmd', u'No citation format set', valid=False)
it.add_modifier('alt', u'No citation format set', valid=False)

# Open in Zotero
mod = it.add_modifier('cmd', u'Open in Zotero')
mod.setvar('action', 'open-in-zotero')
mod.setvar('url', url)
mod.setvar('citekey', e.citekey)
mod.setvar('id', e.id)

# All citation formats
mod = it.add_modifier('ctrl', 'View all citation formats')
mod.setvar('action', 'show-citations')

# Alternative open-in-zotero key with fn
mod = it.add_modifier('fn', 'Open in Zotero')
mod.setvar('action', 'open-in-zotero')
mod.setvar('url', url)
mod.setvar('id', e.id)

# ----------------------------- END CUSTOM CODE ----------------------------- #
```

