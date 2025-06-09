class GreekCapitalsRecognition extends HTMLElement {
  constructor() {
    super();

    this._upper = [
      'Α','Β','Γ','Δ','Ε','Ζ','Η','Θ',
      'Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π',
      'Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω'
    ];
    this._lower = [
      'α','β','γ','δ','ε','ζ','η','θ',
      'ι','κ','λ','μ','ν','ξ','ο','π',
      'ρ','σ','τ','υ','φ','χ','ψ','ω'
    ];

    /** Letters still requiring a first-try success */
    this._remaining = [...this._upper];
    this._current   = null;          // current upper-case target
    this._missed    = new Set();     // letters missed at least once

    /** Timer */
    this._start   = null;
    this._timerID = null;

    /** Tracks whether any wrong answer was given for the current letter */
    this._incorrectThisRound = false;

    this.attachShadow({mode: 'open'});
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

        #letter {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 1rem;
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

      <h2>Greek Capitals Recognition</h2>
      <div id="timer">00:00</div>
      <div id="letter"></div>
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

  /** Lifecycle */
  connectedCallback() {
    this.$timer    = this.shadowRoot.getElementById('timer');
    this.$letter   = this.shadowRoot.getElementById('letter');
    this.$options  = this.shadowRoot.getElementById('options');
    this.$done     = this.shadowRoot.getElementById('done');
    this.$mistakes = this.shadowRoot.getElementById('mistakes');
    this.$restart  = this.shadowRoot.getElementById('restart');

    this.$restart.addEventListener('click', () => this._restart());

    this._next(); // show first letter
  }

  /** Timer helpers */
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

  /** Main flow */
  _next() {
    // If game finished, stop
    if (this._remaining.length === 0) {
      this._finish();
      return;
    }

    // Pick random uppercase letter still remaining
    const idx = Math.floor(Math.random() * this._remaining.length);
    this._current = this._remaining.splice(idx, 1)[0];
    this._incorrectThisRound = false;

    // Render current letter
    this.$letter.textContent = this._current;

    // Render options
    this.$options.innerHTML = '';
    const options = this._getOptions(this._current);
    options.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = ch;
      btn.addEventListener('click', e => this._handleChoice(e));
      this.$options.appendChild(btn);
    });
  }

  /**
   * Builds an array of four distinct lowercase options, one of which is correct.
   * @param {string} upper The target uppercase letter.
   */
  _getOptions(upper) {
    const correctLower = this._lower[this._upper.indexOf(upper)];
    const pool = this._lower.filter(l => l !== correctLower);
    // Shuffle pool and take first 3
    const randomThree = pool.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [correctLower, ...randomThree].sort(() => 0.5 - Math.random());
    return options;
  }

  _handleChoice(e) {
    // Start timer if not already started
    if (!this._timerID) {
        this._startTimer();
    }

    const btn = e.currentTarget;
    const chosen = btn.textContent;
    const correctLower = this._lower[this._upper.indexOf(this._current)];

    if (chosen === correctLower) {
      // Correct answer
      this._flash(btn, 'good');

      // If wrong attempts happened first, we must repeat this letter later
      if (this._incorrectThisRound) {
        this._remaining.push(this._current);
      }

      // Delay to allow flash animation before next letter
      setTimeout(() => this._next(), 400);
    } else {
      // Wrong answer
      this._flash(btn, 'bad');
      this._incorrectThisRound = true;
      this._missed.add(this._current);
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
      this.$mistakes.textContent = `Missed: ${[...this._missed].join(', ')}`;
    } else {
      this.$mistakes.textContent = 'Perfect score!';
    }
  }

  /** Resets the component to its initial state */
  _restart() {
    clearInterval(this._timerID);

    this._remaining = [...this._upper];
    this._missed.clear();
    this._start     = null;
    this._timerID   = null;
    this._incorrectThisRound = false;

    this.$timer.textContent = '00:00';
    this.$done.hidden = true;
    this.$mistakes.textContent = '';

    this._next();
  }
}

customElements.define('greek-capitals-recognition', GreekCapitalsRecognition);

