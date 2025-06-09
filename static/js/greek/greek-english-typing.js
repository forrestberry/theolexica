// English - Greek practice with curated word dataset
const PAIRS = [
  { en: 'cat', grNoBreath: 'κατ', grBreath: 'κατ' },
  { en: 'man', grNoBreath: 'μαν', grBreath: 'μαν' },
  { en: 'boy', grNoBreath: 'βοι', grBreath: 'βοι' },
  { en: 'house', grNoBreath: '', grBreath: 'οὑσ' },
  { en: 'car', grNoBreath: 'καρ', grBreath: 'καρ' },
  { en: 'food', grNoBreath: 'φουδ', grBreath: 'φουδ' },
  { en: 'star', grNoBreath: 'σταρ', grBreath: 'σταρ' },
  { en: 'ski', grNoBreath: 'σκι', grBreath: 'σκι' },
  { en: 'tree', grNoBreath: 'τρι', grBreath: 'τρι' },
  { en: 'bread', grNoBreath: 'βρεδ', grBreath: 'βρεδ' },
  { en: 'tea', grNoBreath: 'τε', grBreath: 'τε' },
  { en: 'pen', grNoBreath: 'πεν', grBreath: 'πεν' },
  { en: 'road', grNoBreath: 'ροαδ', grBreath: 'ροαδ' },
  { en: 'river', grNoBreath: 'ριβερ', grBreath: 'ριβερ' },
  { en: 'sea', grNoBreath: 'σεα', grBreath: 'σεα' },
  { en: 'mountain', grNoBreath: 'μοουνταιν', grBreath: 'μοουνταιν' },
  { en: 'valley', grNoBreath: 'βαλλε', grBreath: 'βαλλε' },
  { en: 'field', grNoBreath: 'φιελδ', grBreath: 'φιελδ' },
  { en: 'farm', grNoBreath: 'φαρμ', grBreath: 'φαρμ' },
  { en: 'city', grNoBreath: 'σιτυ', grBreath: 'σιτυ' },
  { en: 'village', grNoBreath: 'βιλλαγε', grBreath: 'βιλλαγε' },
  { en: 'market', grNoBreath: 'μαρκετ', grBreath: 'μαρκετ' },
  { en: 'shop', grNoBreath: 'σοπ', grBreath: 'σοπ' },
  { en: 'money', grNoBreath: 'μονε', grBreath: 'μονε' },
  { en: 'king', grNoBreath: 'κινγ', grBreath: 'κινγ' },
  { en: 'queen', grNoBreath: 'κουιν', grBreath: 'κουιν' },
  { en: 'lord', grNoBreath: 'λορδ', grBreath: 'λορδ' },
  { en: 'servant', grNoBreath: 'σερβαντ', grBreath: 'σερβαντ' },
  { en: 'friend', grNoBreath: 'φριενδ', grBreath: 'φριενδ' },
  { en: 'enemy', grNoBreath: 'ενεμυ', grBreath: 'ἐνεμυ' },
  { en: 'hate', grNoBreath: 'ηατε', grBreath: 'ἡατε' },
  { en: 'peace', grNoBreath: 'πεασε', grBreath: 'πεασε' },
  { en: 'war', grNoBreath: 'ουαρ', grBreath: 'ὑαρ' },
  { en: 'joy', grNoBreath: 'ζοϋ', grBreath: 'ζοϋ' },
  { en: 'fear', grNoBreath: 'φεαρ', grBreath: 'φεαρ' },
  { en: 'hope', grNoBreath: 'χοπε', grBreath: 'χοπε' },
  { en: 'faith', grNoBreath: 'φαιθ', grBreath: 'φαιθ' },
  { en: 'light', grNoBreath: 'λαιτ', grBreath: 'λαιτ' },
  { en: 'dark', grNoBreath: 'δαρκ', grBreath: 'δαρκ' },
  { en: 'day', grNoBreath: 'δαυ', grBreath: 'δαυ' },
  { en: 'night', grNoBreath: 'ναιτ', grBreath: 'ναιτ' },
  { en: 'year', grNoBreath: 'υεαρ', grBreath: 'ὐεαρ' },
  { en: 'month', grNoBreath: 'μονθ', grBreath: 'μονθ' },
  { en: 'week', grNoBreath: 'ουεεκ', grBreath: 'ὑεεκ' },
  { en: 'hour', grNoBreath: 'ουαρ', grBreath: 'ὑαρ' },
  { en: 'minute', grNoBreath: 'μινυτε', grBreath: 'μινυτε' },
  { en: 'second', grNoBreath: 'σεκονδ', grBreath: 'σεκονδ' },
  { en: 'hand', grNoBreath: 'χανδ', grBreath: 'χανδ' },
  { en: 'foot', grNoBreath: 'φουτ', grBreath: 'φουτ' },
  { en: 'head', grNoBreath: 'χεαδ', grBreath: 'χεαδ' },
  { en: 'heart', grNoBreath: 'χεαρτ', grBreath: 'χεαρτ' },
  { en: 'eye', grNoBreath: 'αï', grBreath: 'ἀï' },
  { en: 'ear', grNoBreath: 'εαρ', grBreath: 'ἐαρ' },
  { en: 'mouth', grNoBreath: 'μουθ', grBreath: 'μουθ' },
  { en: 'nose', grNoBreath: 'νοσε', grBreath: 'νοσε' },
  { en: 'face', grNoBreath: 'φασε', grBreath: 'φασε' },
  { en: 'hair', grNoBreath: 'χαïρ', grBreath: 'χαïρ' },
  { en: 'skin', grNoBreath: 'σκιν', grBreath: 'σκιν' },
  { en: 'bone', grNoBreath: 'βονε', grBreath: 'βονε' },
  { en: 'blood', grNoBreath: 'βλοοδ', grBreath: 'βλοοδ' },
  { en: 'voice', grNoBreath: 'βοις', grBreath: 'βοις' },
  { en: 'song', grNoBreath: 'σονγ', grBreath: 'σονγ' },
  { en: 'music', grNoBreath: 'μυσικ', grBreath: 'μυσικ' },
  { en: 'dance', grNoBreath: 'δανσε', grBreath: 'δανσε' },
  { en: 'game', grNoBreath: 'γαμε', grBreath: 'γαμε' },
  { en: 'sport', grNoBreath: 'σπορτ', grBreath: 'σπορτ' },
  { en: 'work', grNoBreath: 'ουορκ', grBreath: 'ὑορκ' },
  { en: 'rest', grNoBreath: 'ρεστ', grBreath: 'ρεστ' },
  { en: 'sleep', grNoBreath: 'σλεεπ', grBreath: 'σλεεπ' },
  { en: 'dream', grNoBreath: 'δρεαμ', grBreath: 'δρεαμ' },
  { en: 'story', grNoBreath: 'στορυ', grBreath: 'στορυ' },
  { en: 'word', grNoBreath: 'ουορδ', grBreath: 'ὑορδ' },
  { en: 'name', grNoBreath: 'ναμε', grBreath: 'ναμε' },
  { en: 'number', grNoBreath: 'νυμβερ', grBreath: 'νυμβερ' },
  { en: 'color', grNoBreath: 'κιολορ', grBreath: 'κιολορ' },
  { en: 'shape', grNoBreath: 'σαιπε', grBreath: 'σαιπε' },
];

class GreekEnglishTyping extends HTMLElement {
  static get observedAttributes() { return ["mode", "breathing"]; }
  constructor() {
    super();
    this.mode = this.getAttribute("mode") || "en2gr";
    this.breathing = this.getAttribute("breathing") !== "false";
    this._pairs = PAIRS;
    this._indexWord = 0;
    this._charIndex = 0;
    this._timerID = null;
    this._start = null;
    this._mistakes = 0;
    this._wrongChars = [];

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: inherit; border: 1px solid var(--primary); border-radius: var(--radius); padding: 1rem 1.25rem; }
        h2 { margin: 0 0 0.75rem; font-size: inherit; text-align: center; }
        #prompt { text-align: center; font-size: 1.25rem; margin-bottom: 0.5rem; }
        #timer { text-align: center; margin-bottom: 0.75rem; }
        .input-box { display: block; margin: 0 auto; width: 80%; min-height: 2rem; font-size: 1.5rem; padding: .5rem; border: 1px solid var(--secondary); border-radius: var(--radius); text-align: center; position: relative; background: transparent; color: var(--correct); cursor: text; }
        .cursor { display: inline-block; width: 1px; height: 1.2em; background: var(--secondary); vertical-align: bottom; animation: blink 1s steps(1) infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .wrong { color: var(--wrong); animation: fade .5s forwards; }
        @keyframes fade { to { opacity: 0; } }
        .done { color: var(--correct); font-weight: 700; margin-top: .75rem; text-align: center; }
        #mistakes { margin-top: 1rem; font-size: 1.2rem; color: var(--wrong); text-align: center; }
        button { display: block; margin: 1rem auto 0; background: none; border: none; cursor: pointer; padding: 0.5rem; }
        button svg { width: 24px; height: 24px; stroke: var(--secondary); stroke-width: 2; fill: none; border: 1px solid transparent; padding: 0.25rem; transition: stroke 0.2s; }
        button:hover svg { border: 1px solid var(--secondary); border-radius: var(--radius); padding: 0.25rem; }
      </style>
      <h2>Greek Word Typing Practice</h2>
      <div id="prompt"></div>
      <div id="timer">00:00</div>
      <div id="input" class="input-box"><span id="text"></span><span class="cursor"></span></div>
      <div id="mistakes"></div>
      <div id="done" class="done" hidden></div>
      <button id="restart" aria-label="Restart"><svg viewBox="0 0 24 24"><path d="M4 4v6h6"></path><path d="M20 20v-6h-6"></path><path d="M4 10a8 8 0 0 1 14.83-4"></path><path d="M20 14a8 8 0 0 1-14.83 4"></path></svg></button>`;
  }
  attributeChangedCallback(name, _old, value) { if (name === 'mode') this.mode = value || 'en2gr'; if (name === 'breathing') this.breathing = value !== 'false'; }
  connectedCallback() {
    this.$prompt = this.shadowRoot.getElementById('prompt'); this.$text = this.shadowRoot.getElementById('text'); this.$inputBox = this.shadowRoot.getElementById('input'); this.$timer = this.shadowRoot.getElementById('timer'); this.$done = this.shadowRoot.getElementById('done'); this.$mistakes = this.shadowRoot.getElementById('mistakes'); this.$restart = this.shadowRoot.getElementById('restart');
    this.$inputBox.addEventListener('click', () => this.$inputBox.focus()); window.addEventListener('keydown', e => this._handleKey(e)); this.$restart.addEventListener('click', () => this._restart()); this._updatePrompt();
  }
  _currentPair() { return this._pairs[this._indexWord]; }
  _expectedString() { const p = this._currentPair(); return this.mode === 'en2gr' ? (this.breathing ? p.grBreath : p.grNoBreath) : p.en; }
  _displayPrompt() { const p = this._currentPair(); this.$prompt.textContent = this.mode === 'en2gr' ? p.en : (this.breathing ? p.grBreath : p.grNoBreath); }
  _updatePrompt() { if (this._indexWord >= this._pairs.length) { this._finish(); return; } this._charIndex = 0; this.$text.textContent = ''; this._displayPrompt(); }
  _handleKey(e) { if (this.$done.hidden === false) return; const char = e.key.length === 1 ? e.key : ''; if (!char) return; let inputChar = char; if (this.mode === 'gr2en') inputChar = char.toLowerCase(); else inputChar = char.normalize('NFC'); if (this._timerID === null) { this._start = Date.now(); this._timerID = setInterval(() => this._tick(), 1000); }
    const expected = this._expectedString(); if (inputChar === expected[this._charIndex]) { this.$text.textContent += expected[this._charIndex]; this._charIndex++; if (this._charIndex === expected.length) { this._indexWord++; this._updatePrompt(); } } else { this._mistakes++; this._flashWrong(inputChar); if (!this._wrongChars.includes(inputChar)) this._wrongChars.push(inputChar); this._updateMistakes(); } }
  _flashWrong(ch) { const span = document.createElement('span'); span.textContent = ch; span.classList.add('wrong'); this.$text.appendChild(span); setTimeout(() => span.remove(), 500); }
  _updateMistakes() { this.$mistakes.textContent = `Mistakes: ${this._mistakes} (${this._wrongChars.join(', ')})`; }
  _tick() { const elapsed = Math.floor((Date.now() - this._start) / 1000); const mm = String(Math.floor(elapsed / 60)).padStart(2, '0'); const ss = String(elapsed % 60).padStart(2, '0'); this.$timer.textContent = `${mm}:${ss}`; }
  _finish() { clearInterval(this._timerID); this._timerID = null; this.$done.hidden = false; this.$done.textContent = `Completed ${this._pairs.length} words in ${this.$timer.textContent}! Total mistakes: ${this._mistakes}`; }
  _restart() { clearInterval(this._timerID); this._indexWord = 0; this._charIndex = 0; this._timerID = null; this._start = null; this._mistakes = 0; this._wrongChars = []; this.$done.hidden = true; this.$timer.textContent = '00:00'; this.$mistakes.textContent = ''; this._updatePrompt(); }
}
customElements.define('greek-english-typing', GreekEnglishTyping);
