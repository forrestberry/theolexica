class PrintSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create a slot for the light DOM content
        const slot = document.createElement('slot');

        // Add a print icon
        const svgContainer = document.createElement('div');
        svgContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-printer" style="cursor: pointer;">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
        `;

        svgContainer.addEventListener('click', () => this.printContent());

        // Add content to the shadowRoot
        this.shadowRoot.appendChild(svgContainer);
        this.shadowRoot.appendChild(slot);

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                position: relative;
            }
            div {
                position: absolute;
                top: 0;
                right: 0;
            }
        `;
        this.shadowRoot.appendChild(style);
    }

    printContent() {
        const content = this.innerHTML;
        const printWindow = window.open('', '_blank');

        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<link rel="stylesheet" href="/css/print.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(content);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    }

}

customElements.define('print-section', PrintSection);

