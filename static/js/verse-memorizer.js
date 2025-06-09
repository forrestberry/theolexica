class VerseMemorizer extends HTMLElement {
  constructor() {
    super();
    this._words = [];                 // complete passage split into word-objects
    this._hiddenIndices = new Set();  // indices of words currently blanked-out
    this._currentRoundMissing = [];   // indices the learner must guess *this* round (ordered)
    this._guessCursor = 0;            // pointer into _currentRoundMissing
    this._round = 0;
    this._madeError = false;          // whether a wrong answer happened in current round
    this._inputBuffer = '';           // Text buffer for input when textarea is disabled

    // build DOM
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Default palette */
        :host {
          display: block;
          font-family: inherit;
          border: 1px solid var(--primary);
          border-radius: var(--radius);
          padding: 1rem 1.25rem;
          max-width: 600px;
        }

        h2 {
          margin: 0 0 0.75rem;
          font-size: inherit;
          text-align: center;
        }

        textarea {
          width: 100%;
          min-height: 6rem;
          resize: vertical;
          padding: 0.75rem;
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
          font: inherit;
          box-sizing: border-box;
          background: var(--tertiary);
          color: var(--primary);
        }

        button {
          display: block;
          margin: 1rem auto 0;
          background: none;
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
          padding: 0.5rem 1.25rem;
          font: inherit;
          cursor: pointer;
          color: var(--primary);
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        #display {
          margin: 1rem 0;
          line-height: 1.6;
          text-align: left;
        }

        .blank {
          display: inline-block;
          border-bottom: 1px solid var(--secondary);
          min-width: 3rem;
          text-align: center;
        }

        #answerInput {
          display: block;
          width: 100%;
          padding: 0.5rem;
          border: 1px solid var(--secondary);
          border-radius: var(--radius);
          font-size: 1.1rem;
          box-sizing: border-box;
          text-align: center;
          margin: 0 auto;
          transition: color 0.2s ease;
          background: var(--tertiary);
          color: var(--primary);
          font: inherit;
        }

        .correct {
          color: var(--correct) !important;
          font-weight: 700 !important;
        }

        .wrong {
          color: var(--wrong) !important;
          font-weight: 700 !important;
        }

        #answerInput.wrong {
          animation: shake 0.3s linear both;
        }

        /* Simple shake animation for wrong answers */
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        #answerInput:focus::placeholder {
          color: transparent;
        }

        #stats {
          text-align: center;
          margin-top: 0.75rem;
          font-size: 0.9rem;
        }

        #roundMessage {
            text-align: center;
            margin: 0.75rem;
        }

      </style>

      <h2>Memorizer</h2>

      <div id="setup">
        <textarea id="inputText" placeholder="Enter the text you want to memorize"></textarea>
        <button id="startBtn">Start Practice</button>
      </div>

      <div id="practice" hidden>
        <div id="display"></div>
        <input id="answerInput" type="text" placeholder="Type the missing word..." autocomplete="off" />
        <div id="roundMessage" hidden></div>
        <div id="stats"></div>
        <button id="restartBtn">Restart</button>
      </div>
    `;
  }

  connectedCallback() {
    // setup area elements
    this.$setup = this.shadowRoot.getElementById('setup');
    this.$inputText = this.shadowRoot.getElementById('inputText');
    this.$startBtn = this.shadowRoot.getElementById('startBtn');

    // practice area elements
    this.$practice = this.shadowRoot.getElementById('practice');
    this.$display = this.shadowRoot.getElementById('display');
    this.$answerInput = this.shadowRoot.getElementById('answerInput');
    this.$roundMessage = this.shadowRoot.getElementById('roundMessage');
    this.$stats = this.shadowRoot.getElementById('stats');
    this.$restartBtn = this.shadowRoot.getElementById('restartBtn');

    // listeners
    this.$startBtn.addEventListener('click', () => this._start());
    this.$inputText.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        event.preventDefault();
        this._start();
      }
    });
    this.$restartBtn.addEventListener('click', () => this._restart());

    // Buffer input
    this.shadowRoot.addEventListener('keydown', e => {
        if (this.shadowRoot.activeElement === this.$inputText) return;

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this._handleGuess(this.$answerInput.value.trim());
            this._inputBuffer = '';
        }

        if (e.key.length === 1) {
            this._inputBuffer += e.key;
        } else if (e.key === 'Backspace') {
            this._inputBuffer = this._inputBuffer.slice(0, -1);
        }
    });
  }

  // ---------- Setup & restart ----------
  _start() {
    const raw = this.$inputText.value.trim();
    if (!raw) return;

    // Tokenise passage into words + punctuation objects
    this._words = raw.split(/\s+/).map(w => {
      const match = w.match(/^(.*?)([\.,;:!?]+)?$/);
      return { text: match[1], punct: match[2] || '' };
    });

    this._hiddenIndices.clear();
    this._currentRoundMissing = [];
    this._guessCursor = 0;
    this._round = 0;
    this._madeError = false;

    this.$setup.hidden = true;
    this.$practice.hidden = false;
    this.$roundMessage.hidden = true;

    this._nextRound();
    this.$answerInput.focus();
  }

  _restart() {
    this._words = [];
    this._hiddenIndices.clear();
    this._currentRoundMissing = [];
    this._guessCursor = 0;
    this._round = 0;
    this._madeError = false;
    this._inputBuffer = '';

    this.$answerInput.classList.remove('correct', 'wrong');
    this.$answerInput.disabled = false;
    this.$answerInput.value = '';
    this.$answerInput.placeholder = 'Type the missing word...';

    this.$setup.hidden = false;
    this.$roundMessage.hidden = true;
    this.$practice.hidden = true;

    this.$inputText.focus();
  }

  // ---------- Round management ----------
  _nextRound() {
    // End of game.
    if (this._hiddenIndices.size === this._words.length) {
      this.$display.innerHTML = this._words.map(w => `<span>${w.text}${w.punct}</span>`).join(' ');
      this.$roundMessage.hidden = false;
      this.$stats.hidden = true;
      this.$roundMessage.classList.add('correct');
      this.$roundMessage.textContent = 'Great job! You typed the entire passage from memory!';
      setTimeout(() => {
          this.$answerInput.disabled = true;
          this.$answerInput.value = '';
          this.$answerInput.placeholder = 'Practice complete';
      }, 305);
      return;
    }

    if (this._round > 0) {
        //this.$answerInput.disabled = true;
        this.$roundMessage.classList.add('correct');
        this.$roundMessage.textContent = 'Great job! Moving to the next round.';
        this.$roundMessage.hidden = false;
        this.$stats.hidden = true;
        setTimeout(() => {
            this.$roundMessage.hidden = true;
            this.$roundMessage.classList.remove('correct');
            this.$stats.hidden = false;
            //this.$answerInput.disabled = false;
            this.$answerInput.value = this._inputBuffer;
            this.$answerInput.focus();
        }, 1000);
    }

    this._round += 1;

    const totalToHide = Math.min(5, Math.ceil(this._words.length * 0.2));
    const remainingVisible = this._words.map((_, i) => i).filter(i => !this._hiddenIndices.has(i));
    const shuffle = arr => arr.sort(() => 0.5 - Math.random());
    const newHides = shuffle(remainingVisible).slice(0, totalToHide);
    newHides.forEach(i => this._hiddenIndices.add(i));

    this._currentRoundMissing = Array.from(this._hiddenIndices).sort((a, b) => a - b);
    this._guessCursor = 0;
    this._madeError = false;

    this._render();
    this._updateStats();
  }

  _repeatRound() {

    //this.$answerInput.disabled = true;
    this.$roundMessage.classList.add('wrong');
    this.$roundMessage.textContent = 'Errors made! Repeating this round.';
    this.$roundMessage.hidden = false;
    this.$stats.hidden = true;
    setTimeout(() => {
        this.$roundMessage.hidden = true;
        this.$stats.hidden = false;
        this.$roundMessage.classList.remove('wrong');
        //this.$answerInput.disabled = false;
        this.$answerInput.value = this._inputBuffer;
        this.$answerInput.focus();
    }, 1000);

    this._currentRoundMissing = Array.from(this._hiddenIndices).sort((a, b) => a - b);
    this._guessCursor = 0;
    this._madeError = false;
    this._render();
    this._updateStats();
  }

  // ---------- Rendering ----------
  _render() {
    const html = this._words.map((w, idx) => {
      if (!this._hiddenIndices.has(idx)) return `${w.text}${w.punct}`;

      const isRevealed = this._currentRoundMissing.indexOf(idx) < this._guessCursor;
      if (isRevealed) return `<span class="correct">${w.text}</span>${w.punct}`;
      return `<span class="blank">&nbsp;</span>${w.punct}`;
    }).join(' ');

    this.$display.innerHTML = html;
  }

  _updateStats() {
    this.$stats.textContent = `Round ${this._round} — Hidden words: ${this._hiddenIndices.size}/${this._words.length}`;
  }

  // ---------- Guess handling ----------
  _handleGuess(rawInput) {
    if (!rawInput || this._guessCursor >= this._currentRoundMissing.length) return;

    const expected = this._words[this._currentRoundMissing[this._guessCursor]].text;
    const normalize = s => s.replace(/[^\w'-]/g, '').toLowerCase();

    if (normalize(rawInput) === normalize(expected)) {
      /* -------- Correct -------- */
      this.$answerInput.classList.add('correct');
      //this.$answerInput.disabled = true;
      setTimeout(() => {
        this.$answerInput.classList.remove('correct');
        this.$answerInput.value = this._inputBuffer;
        //this.$answerInput.disabled = false;
        this.$answerInput.focus();
      }, 300);

      this._guessCursor += 1;
      if (this._guessCursor >= this._currentRoundMissing.length) {
        if (this._madeError) {
          this._repeatRound();
        } else {
          this._nextRound();
        }
      } else {
        this._render();
      }
    } else {
      /* -------- Wrong -------- */
      this._madeError = true;
      this.$answerInput.classList.add('wrong');
      //this.$answerInput.disabled = true;
      setTimeout(() => {
        this.$answerInput.classList.remove('wrong');
        this.$answerInput.value = this._inputBuffer;
        //this.$answerInput.disabled = false;
        this.$answerInput.focus();
      }, 300);
    }
  }
}

customElements.define('verse-memorizer', VerseMemorizer);
