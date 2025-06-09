/* ============================================================
 *   Title: Name the Greek Alphabet
 *   Filename: greek-001-name-alphabet.js
 *   Description: Match the Greek letter to its name (α -> alpha)
 *       and the reverse (alpha -> α).
 *   HTML Element: <greek-name-alphabet></greek-name-alphabet>
 *   HTML Attributes: reverse
 *
 * ============================================================ */
class GreekLetterNameMatch extends HTMLElement {
  constructor() {
    super();

    // Lower‑case Greek letters
    this._letters = [
      'α','β','γ','δ','ε','ζ','η','θ',
      'ι','κ','λ','μ','ν','ξ','ο','π',
      'ρ','σ', 'ς', 'τ','υ','φ','χ','ψ','ω'
    ];

    // Full names that correspond 1‑to‑1 with the above list
    this._names = [
      'alpha','beta','gamma','delta','epsilon','zeta','eta','theta',
      'iota','kappa','lambda','mu','nu','xi','omicron','pi',
      'rho','sigma', 'sigma', //or 'final sigma'
      'tau','upsilon','phi','chi','psi','omega'
    ];

    /** Indices of letters still requiring a first‑try success */
    this._remaining = Array.from({ length: this._letters.length }, (_, i) => i);
    this._currentIdx = null;          // index of the current target
    this._missed     = new Set();     // indices missed at least once (for summary)

    /** Timer */
    this._start   = null;
    this._timerID = null;

    /** Tracks whether any wrong answer was given for the current item */
    this._incorrectThisRound = false;

    const reverse = this.hasAttribute('reverse');
    this.title = reverse 
        ? 'Match the Name to the Greek Letter'
        : 'Match the Greek Letter to the Name';

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

        #prompt {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 1rem;
          word-break: break-word;
        }

        #options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        button.option {
          font-size: 1.5rem;
          font-family: inherit;
          color: var(--primary);
          padding: 0.5rem 0;
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
          background: transparent;
          cursor: pointer;
          transition: background 0.1s, color 0.1s;
        }

        button.option.good {
          background: var(--correct);
          color: var(--tertiary);
        }

        button.option.bad {
          background: var(--wrong);
          color: var(--tertiary);
        }

        #done {
          margin-top: 1rem;
          font-weight: 700;
          text-align: center;
          color: var(--correct);
        }

        #mistakes {
          margin-top: 0.5rem;
          text-align: center;
          color: var(--wrong);
        }

        #restart {
          display: block;
          margin: 1rem auto 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        #restart svg {
          width: 24px;
          height: 24px;
          stroke: var(--secondary);
          stroke-width: 2;
          fill: none;
          border: 1px solid transparent;
          padding: 0.25rem;
          transition: stroke 0.2s;
        }

        #restart:hover svg {
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
        }
      </style>

      <h2>Name</h2>
      <div id="timer">00:00</div>
      <div id="prompt"></div>
      <div id="options"></div>

      <div id="done" hidden></div>
      <div id="mistakes"></div>

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
    this.$timer    = this.shadowRoot.getElementById('timer');
    this.$prompt   = this.shadowRoot.getElementById('prompt');
    this.$options  = this.shadowRoot.getElementById('options');
    this.$done     = this.shadowRoot.getElementById('done');
    this.$mistakes = this.shadowRoot.getElementById('mistakes');
    this.$restart  = this.shadowRoot.getElementById('restart');

    this.$restart.addEventListener('click', () => this._restart());

    this._next(); // initial prompt
  }

  _startTimer() {
    if (this._timerID) return;
    this._start   = Date.now();
    this._timerID = setInterval(() => this._tick(), 1000);
  }

  _tick() {
    const elapsed = Math.floor((Date.now() - this._start) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const ss = String(elapsed % 60).padStart(2, '0');
    this.$timer.textContent = `${mm}:${ss}`;
  }

  _next() {
    // All correct?
    if (this._remaining.length === 0) {
      this._finish();
      return;
    }

    // Pick random remaining index
    const randIdx = Math.floor(Math.random() * this._remaining.length);
    this._currentIdx = this._remaining.splice(randIdx, 1)[0];
    this._incorrectThisRound = false;

    // Determine current mode: default (letter → name) or reverse (name → letter)
    const reverse = this.hasAttribute('reverse');

    // Render prompt
    this.$prompt.textContent = reverse ? this._names[this._currentIdx] : this._letters[this._currentIdx];

    // Build and render answer buttons
    this.$options.innerHTML = '';
    const options = this._buildOptions(reverse);
    options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = option;
      btn.addEventListener('click', e => this._handleChoice(e, reverse));
      this.$options.appendChild(btn);
    });
  }

  /**
   * Builds an array of four distinct options.
   * When reverse=false, options are names; when reverse=true, options are letters.
   */
  _buildOptions(reverse) {
    const correct = reverse ? this._letters[this._currentIdx] : this._names[this._currentIdx];
    const poolArr = reverse ? this._letters : this._names;
    // exclude correct answer, shuffle, take three
    const pool = poolArr.filter((_, i) => i !== this._currentIdx).sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...pool, correct].sort(() => 0.5 - Math.random());
  }

  _handleChoice(e, reverse) {
    // Start timer once first interaction occurs
    if (!this._timerID) {
      this._startTimer();
    }

    const btn     = e.currentTarget;
    const chosen  = btn.textContent;
    const correct = reverse ? this._letters[this._currentIdx] : this._names[this._currentIdx];

    if (chosen === correct) {
      // Correct
      this._flash(btn, 'good');

      // If user missed first, recycle current item for later
      if (this._incorrectThisRound) {
        this._remaining.push(this._currentIdx);
      }

      // Move on after brief delay for flash
      setTimeout(() => this._next(), 400);
    } else {
      // Incorrect
      this._flash(btn, 'bad');
      this._incorrectThisRound = true;
      this._missed.add(this._currentIdx);
    }
  }

  _flash(el, cls) {
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), 300);
  }

  _finish() {
    clearInterval(this._timerID);
    this._timerID = null;

    this.$done.hidden = false;
    this.$done.textContent = `Completed in ${this.$timer.textContent}!`;

    if (this._missed.size) {
      const missedReadable = Array.from(this._missed).map(i => {
        const reverse = this.hasAttribute('reverse');
        return reverse ? this._names[i] : this._letters[i];
      }).join(', ');
      this.$mistakes.textContent = `Missed: ${missedReadable}`;
    } else {
      this.$mistakes.textContent = 'Perfect score!';
    }
  }

  /** Resets component to initial state */
  _restart() {
    clearInterval(this._timerID);

    this._remaining = Array.from({ length: this._letters.length }, (_, i) => i);
    this._missed.clear();
    this._start     = null;
    this._timerID   = null;
    this._incorrectThisRound = false;

    this.$timer.textContent = '00:00';
    this.$done.hidden       = true;
    this.$mistakes.textContent = '';

    this._next();
  }
}

customElements.define('greek-name-alphabet', GreekLetterNameMatch);

