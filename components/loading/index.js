import { template } from './template';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';
import { getUpdateMethodsName } from '../utils/updateAttribute';

class Loading extends HTMLElement {
  static get observedAttributes() { return ['loading', 'color', 'size']; }

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

    this[getUpdateMethodsName(name)](newValue);
  }

  updateColor(newValue) {
    this.updateStyles({ color: newValue, size: this.getAttribute('size') });
  }

  updateSize(newValue) {
    this.updateStyles({ size: newValue, color: this.getAttribute('color') });
  }

  updateLoading(newValue) {
    this._loading = getBooleanAttribute(newValue);
    if (this._loading) {
      this.$svg.setAttribute('loading', ' ')
    } else {
      this.$svg.removeAttribute('loading')
    }
  }

  updateStyles({ color, size }) {
    this._style.textContent = `
      .wrapper {
        width: ${size ?? '24'}px;
        height: ${size ?? '24'}px;
      }
      .icon {
        fill: ${color ?? '#000'};
      }
    `;
  }
}

if ('customElements' in window) {
  customElements.define('be-loading', Loading);
}
