class AkkadianTOC extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create a slot for the light DOM content
        const slot = document.createElement('slot');

        const tocContainer = document.createElement('div');
        tocContainer.innerHTML = `
        A study guide for <em><a href="{{< ref "a-grammar-of-akkadian.md" >}}">A Grammar Of Akkadian</a></em> Third Edition by John Huehnergard. 
        `;

        // Add content to the shadowRoot
        this.shadowRoot.appendChild(tocContainer);
        this.shadowRoot.appendChild(slot);
    }

    connectedCallback() {
        // Additional setup if needed when the element is added to the DOM
    }
}

customElements.define('akkadian-toc', AkkadianTOC);

