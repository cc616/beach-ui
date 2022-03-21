import { template } from './template.js';

class Icon extends HTMLElement {
  static get observedAttributes() { return [ 'type', 'color', 'size']; }
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
    this.$ele = root.querySelector('span');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case 'type':
        this.$ele.classList.add(`icon-${newValue}`)
      break;
    }
  }
}

if ('customElements' in window) {
  customElements.define('be-icon', Icon);
}
