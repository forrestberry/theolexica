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

