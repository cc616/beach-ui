import { getBooleanAttribute } from '../utils/getBooleanAttribute';
import { getUpdateMethodsName } from '../utils/updateAttribute';

class Portal extends HTMLElement {
  static get observedAttributes() { return ['visible']; }

  constructor() {
    super();
    const template = `<div>
      <slot></slot>
    </div>`;
    this.$root = this.attachShadow({ mode: 'open' });
    this.$portal = template.content.cloneNode(true);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    this[getUpdateMethodsName(name)](newValue);
  }

  updateVisible(newValue) {
    const visible = getBooleanAttribute(newValue);
    if (visible) {
      this._timer = setTimeout(() => {
        this.$root.append(this.$portal);
      }, 300);
    }
  }

  disconnectedCallback() {
    clearTimeout(this._timer);
    this.$portal.remove();
  }
}

if ('customElements' in window) {
  customElements.define('be-portal', Portal);
}
