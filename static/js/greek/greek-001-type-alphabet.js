class GreekAlphabetPractice extends HTMLElement {
  constructor() {
    super();
    this._letters = [
      'α','β','γ','δ','ε','ζ','η','θ',
      'ι','κ','λ','μ','ν','ξ','ο','π',
      'ρ','σ','τ','υ','φ','χ','ψ','ω'
    ];
    this._index    = 0;
    this._timerID  = null;
    this._start    = null;
    this._mistakes = [];

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: inherit;
          border: 1px solid var(--primary);
          border-radius: var(--radius);
          padding: 1rem 1.25rem;
        }

        h2 {
          margin: 0 0 0.75rem;
          font-size: inherit;
          text-align: center;
        }

        #timer {
          text-align: center;
          margin-bottom: 0.75rem;
        }

        .input-box {
          display: block;
          margin: 0 auto;
          width: 80%;
          min-height: 2rem;
          font-size: 1.5rem;
          padding: .5rem;
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
          text-align: center;
          color: var(--correct);
          position: relative;
          background: transparent;
          cursor: text;
        }

        .cursor {
          display: inline-block;
          width: 1px;
          height: 1.2em;
          background: var(--secondary);
          vertical-align: bottom;
          opacity: 0;
        }

        .input-box:focus .cursor {
          opacity: 1;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .wrong {
          color: var(--wrong);
          animation: fade .5s forwards;
        }

        @keyframes fade {
          to { opacity: 0; }
        }

        .done {
          color: var(--correct);
          font-weight: 700;
          margin-top: .75rem;
          text-align: center;
        }

        #mistakes {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: var(--wrong);
          text-align: center;
        }

        button {
          display: block;
          margin: 1rem auto 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        button svg {
          width: 24px;
          height: 24px;
          stroke: var(--secondary);
          stroke-width: 2;
          fill: none;
          border: 1px solid transparent;
          padding: 0.25rem;
          transition: stroke 0.2s;
        }

        button:hover svg {
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
          padding: 0.25rem;
        }
      </style>

      <h2>Type the Greek alphabet from memory</h2>
      <div id="timer">00:00</div>

      <div id="input" class="input-box" tabindex="0">
        <span id="text"></span>
        <span class="cursor"></span>
      </div>

      <div id="mistakes"></div>

      <div id="done" class="done" hidden></div>

      <button id="restart" aria-label="Restart">
        <svg viewBox="0 0 24 24">
          <path d="M4 4v6h6"></path>
          <path d="M20 20v-6h-6"></path>
          <path d="M4 10a8 8 0 0 1 14.83-4"></path>
          <path d="M20 14a8 8 0 0 1-14.83 4"></path>
        </svg>
      </button>
    `;
  }

  connectedCallback() {
    this.$text     = this.shadowRoot.getElementById('text');
    this.$inputBox = this.shadowRoot.getElementById('input');
    this.$timer    = this.shadowRoot.getElementById('timer');
    this.$done     = this.shadowRoot.getElementById('done');
    this.$mistakes = this.shadowRoot.getElementById('mistakes');
    this.$restart  = this.shadowRoot.getElementById('restart');

    window.addEventListener('keydown', e => this._handleKey(e));
    this.$restart.addEventListener('click', () => this._restart());
    this.$inputBox.addEventListener('click', () => this.$inputBox.focus());
  }

  _handleKey(e) {
    if (this.$done && !this.$done.hidden) {
        // Allow restart with Enter
        if (e.key === 'Enter') {
            this._restart();
            }
        return; // Stop when finished
    }

    const char = e.key.toLowerCase();
    if (!char.match(/^[a-zα-ω]$/)) return;

    if (this._index === 0 && !this._timerID) {
      this._start   = Date.now();
      this._timerID = setInterval(() => this._tick(), 1000);
    }

    if (char === this._letters[this._index]) {
      this._index++;
      this.$text.textContent = this._letters.slice(0, this._index).join('');
      if (this._index === this._letters.length) this._finish();
    } else {
      this._flashWrong(char);
      if (!this._mistakes.includes(char)) {
        this._mistakes.push(char);
        this._updateMistakes();
      }
    }
  }

  _flashWrong(ch) {
    const span = document.createElement('span');
    span.textContent = ch;
    span.classList.add('wrong');
    this.$text.appendChild(span);
    setTimeout(() => span.remove(), 500);
  }

  _updateMistakes() {
    this.$mistakes.textContent = `Mistakes: ${this._mistakes.join(', ')}`;
  }

  _tick() {
    const elapsed = Math.floor((Date.now() - this._start) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2,'0');
    const ss = String(elapsed % 60).padStart(2,'0');
    this.$timer.textContent = `${mm}:${ss}`;
  }

  _finish() {
    clearInterval(this._timerID);
    this._timerID = null;
    this.$done.hidden = false;
    this.$done.textContent = `Completed in ${this.$timer.textContent}! Mistakes: ${this._mistakes.length}`;
  }

  _restart() {
    clearInterval(this._timerID);
    this._index    = 0;
    this._mistakes = [];
    this._timerID  = null;
    this._start    = null;

    this.$text.textContent = '';
    this.$mistakes.textContent = '';
    this.$done.hidden = true;
    this.$timer.textContent = '00:00';
  }
}

customElements.define('greek-alphabet-practice', GreekAlphabetPractice);
