import { template } from '@/Button/template';
import { getBooleanAttribute } from '@/utils/getBooleanAttribute';

const stylesParams = {
  primary: {
    iconColor: '#fff',
    disabledIconColor: 'rgba(0, 0, 0, 0.25)',
  },
  default: {
    iconColor: 'rgba(0, 0, 0, 0.85)',
    disabledIconColor: '',
  }
}

class Button extends HTMLElement {
  static get observedAttributes() { return ['disabled', 'loading', 'type']; }

  constructor() {
    super();
    this.$root = this.attachShadow({ mode: 'open' });
    this.$root.appendChild(template.content.cloneNode(true));
    this.$button = this.$root.querySelector('button');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    switch (name) {
      case 'disabled':
        this._disabled = getBooleanAttribute(newValue);
        this.updateDisabled(this._disabled);
        break;
      case 'loading':
        this.updateLoading(getBooleanAttribute(newValue))
        break;
    }
  }

  updateDisabled(disabled) {
    if (disabled) {
      this.$button.setAttribute('disabled', ' ')
    } else {
      this.$button.removeAttribute('disabled')
    }
    const loading = getBooleanAttribute(this.getAttribute('loading'));
    loading && this.updateLoading(loading);
  }

  updateLoading(loading) {
    const existedloading = this.$root.querySelector('be-loading');
    if (loading && !existedloading) {
      const newLoading= document.createElement('be-loading');
      newLoading.setAttribute('loading', 'true');
      newLoading.setAttribute('size', '14');
      newLoading.setAttribute('class', 'loading');
      newLoading.setAttribute('color', this._disabled ? 'rgba(0, 0, 0, 0.25)' : '#fff');
      this.$button.appendChild(newLoading);
      this.$button.setAttribute('loading', ' ')
      return;
    } else if (existedloading && !loading) {
      existedloading.remove();
      this.$button.removeAttribute('loading')
      return;
    } else if (loading) {
      existedloading.setAttribute('color', this._disabled ? 'rgba(0, 0, 0, 0.25)' : '#fff');
      this.$button.setAttribute('loading', ' ')
    }
  }

  connectedCallback() {
    this.$button.addEventListener("click", (e) => {
      if (!this._disabled) {
        this.dispatchEvent(new CustomEvent('be-click', e))
      }
    });
  }

}

if ('customElements' in window) {
  customElements.define('be-button', Button);
}
