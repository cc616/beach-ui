import { template } from './template.js';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';

const sizeMapping = {
  small: 12,
  default: 18,
  large: 24,
}

class Icon extends HTMLElement {
  static get observedAttributes() { return ['type', 'color', 'size', 'pointer', 'disabled', 'icon']; }
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
    this.$icon = root.querySelector('span');
    this._style = document.createElement('style');
    root.appendChild(this._style);
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
      case 'type':
        this.$icon.classList.add(`icon-${newValue}`);
        break;
      case 'pointer':
        this.$icon.classList.add('icon-pointer');
        break;
      case 'disabled':
        this._disabled = getBooleanAttribute(newValue);
        this.updateDisabled();
        break;
      case 'icon':
        newValue.setAttribute('class', 'icon')
        break;
    }
  }

  updateDisabled() {
    if (this._disabled) {
      this.$icon.classList.add('icon-disabled');
    } else {
      this.$icon.classList.remove('icon-disabled');
    }
  }

  connectedCallback() {
    this.$icon.addEventListener("click", (e) => {
      if (!this._disabled) {
        this.dispatchEvent(new CustomEvent('be-click', e));
      }
    });
  }

  updateStyles({ color, size }) {
    console.log('size', size);
    this._style.textContent = `
      .icon {
        font-size: ${isNaN(Number(size)) ? sizeMapping[size ?? 'default'] : size}px;
        color: ${color ?? '#000'};
      }
    `;
  }
}

if ('customElements' in window) {
  customElements.define('be-icon', Icon);
}
