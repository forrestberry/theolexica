---
title: Linking the TOC for the Study Guides
date: "2025-05-27 11:04:46"
tags:
  - Note
  - Hugo
  - Blog
  - Writing
---
# Linking Toc In My Docs

This is a Hugo site. The nice thing about that for me is that all of my blog pages are written in markdown files. It makes it really portable and easily searchable. If I want to change something programatically, I can grep throught it all and do a find and replace in vim.

Since it's markdown, I can add any html that I need if I want to get fancy. 

One of the things that I do on certain pages is add a link back to the mother page. Eg, [Greek Study Guide Intro]({{< ref "greek/schwandt-000.md" >}}) links back to the [Greek Study Guide TOC]({{< ref "greek/greek-study-guide-toc.md" >}}). Doing this for dozens of pages is tedious, so I added a web-component `<greek-toc></greek-toc>` to the template for my Greek Study Guides.

I add a snippet to [Alfred](https://www.alfredapp.com) to auto-expand on `!gr`. Now my post is ready to write with minimal mental overhead.

## The Problem

I had to create another one for latin and forgot the steps in Hugo, so I am documenting it for my future self.

## The Solution

1. In `theolexica > static > js` duplicate one of the `NAME-toc.js` files, rename, and edit as needed.
```
class GreekTOC extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Clear the shadowRoot to prevent duplicate content
        this.shadowRoot.innerHTML = '';

        const tocContainer = document.createElement('div');
        tocContainer.innerHTML = `
        <p>
            A study guide for <em>
                <a href="https://lexhampress.com/Schwandt">An Introduction to Biblical Greek</a>
            </em> by John D Schwandt.
            (<a href="/posts/greek/greek-study-guide-toc">View all study guides</a>.)
        </p>
        `;

        this.shadowRoot.appendChild(tocContainer);
    }
}

customElements.define('greek-toc', GreekTOC);
```

2. In `layouts > partials > extend_head.html` add the script: `<script src="/js/NAME-toc.js" defer></script>`

3. Add your web component to a page <name-toc></name-toc>

## Known issues

- This adds the script to every page, not just the relevant post pages. I don't care.
- Because of shadow DOM issues, it doesn't inherit the styling of the site. So far, I don't care enough to fix it.
