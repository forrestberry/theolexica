class AkkadianTOC extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create a slot for the light DOM content
        const slot = document.createElement('slot');

        const tocContainer = document.createElement('div');
        tocContainer.innerHTML= `
        A study guide for <em>A Grammar Of Akkadian</em> Third Edition by John Huehnergard. 
        <br />
        TODO: Link the to the study guide
        <br />
        TODO: TOC placeholder automation
        `
        // Add content to the shadowRoot
        this.shadowRoot.appendChild(tocContainer);
        this.shadowRoot.appendChild(slot);
    }

    AkkadianTOC() {
        const content = this.innerHTML;
    }

}

customElements.define('akkadian-toc', AkkadianTOC);
