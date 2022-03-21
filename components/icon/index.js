import { template } from './template';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';

class Icon extends HTMLElement {
  static get observedAttributes() { return [ 'color', 'size']; }

  constructor() {
    super();
    this.$root = this.attachShadow({ mode: 'open' });
    this.$root.appendChild(template.content.cloneNode(true));
    this.$svg = this.$root.querySelector('svg');

    this._style = document.createElement('style');
    this.$root.appendChild(this._style);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case 'color':
        this.updateStyles({ color: newValue, size: this.getAttribute('size') });
        break;
      case 'size':
        this.updateStyles({ size: newValue, color: this.getAttribute('color') });
        break;
    }
  }
}

if ('customElements' in window) {
  customElements.define('be-icon', Icon);
}
