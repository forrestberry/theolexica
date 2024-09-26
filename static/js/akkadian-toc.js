class AkkadianTOC extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Clear the shadowRoot to prevent duplicate content
        this.shadowRoot.innerHTML = '';

        const tocContainer = document.createElement('div');
        tocContainer.innerHTML = `
            A study guide for <em>
                <a href="https://www.academia.edu/234697/2013_Key_to_A_Grammar_of_Akkadian_3rd_edition_">A Grammar Of Akkadian</a>
            </em> Third Edition by John Huehnergard. 
            (<a href="/posts/akkadian/akkadian-study-guide-toc">View all study guides</a>.)
        `;

        this.shadowRoot.appendChild(tocContainer);
    }
}

customElements.define('akkadian-toc', AkkadianTOC);

