import { template } from './template.js';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';
import { getUpdateMethodsName } from '../utils/updateAttribute';

const sizeMapping = {
  small: 12,
  default: 18,
  large: 24,
}

class Icon extends HTMLElement {
  static get observedAttributes() { return ['type', 'color', 'size', 'pointer', 'disabled']; }
  constructor() {
    super();
    this.$root = this.attachShadow({ mode: 'open' });
    this.$root.appendChild(template.content.cloneNode(true));
    this.$icon = this.$root.querySelector('span');
    this._style = document.createElement('style');
    this.$root.appendChild(this._style);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    this[getUpdateMethodsName(name)](newValue);
  }

  updateColor(newValue) {
    this.updateStyles({ color: newValue, size: this.getAttribute('size') });
  }

  updateSize(newValue) {
    this.updateStyles({ size: newValue, color: this.getAttribute('color') });
  }

  updateType(newValue) {
    this.$icon.classList.add(`icon-${newValue}`);
  }

  updatePointer() {
    this.$icon.classList.add('icon-pointer');
  }

  updateDisabled(newValue) {
    this._disabled = getBooleanAttribute(newValue);
    if (this._disabled) {
      this.$icon.classList.add('icon-disabled');
    } else {
      this.$icon.classList.remove('icon-disabled');
    }
  }

  connectedCallback() {
    this.$root.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!this._disabled && !!this.onclick) {
        this.onclick({ ...e });
      }
    });
  }

  updateStyles({ color, size }) {
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
