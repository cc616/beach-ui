import { template } from './template';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';

const typeStylesParams = {
  primary: {
    iconColor: '#fff',
    disabledIconColor: 'rgba(0, 0, 0, 0.25)',
  },
  default: {
    iconColor: 'rgba(0, 0, 0, 0.85)',
    disabledIconColor: 'rgba(0, 0, 0, 0.25)',
  }
}

const SIZE = ['large', 'medium', 'small'];

class Button extends HTMLElement {
  static get observedAttributes() { return ['disabled', 'loading', 'type', 'size']; }

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
        this.updateDisabled();
        break;
      case 'loading':
        this._loading = getBooleanAttribute(newValue);
        this.updateLoading()
        break;
      case 'type':
        this._type = newValue ?? 'default';
        this.$button.classList.add(this._type);
        break;
      case 'size':
        this._size = SIZE.includes(newValue) ? newValue : 'medium';
        this.updateSize();
    }
  }
  updateSize() {
    SIZE.forEach((size) => {
      if (size === this._size) {
        this.$button.classList.add(size);
      } else {
        this.$button.classList.remove(size);
      }
    })
  }

  updateDisabled() {
    if (this._disabled) {
      this.$button.setAttribute('disabled', ' ')
    } else {
      this.$button.removeAttribute('disabled')
    }
    this._loading && this.updateLoading();
  }

  updateLoading() {
    const existedloading = this.$root.querySelector('be-loading');
    const style = this._type ? typeStylesParams[this._type] : {};
    if (this._loading && !existedloading) {
      const newLoading= document.createElement('be-loading');
      newLoading.setAttribute('loading', 'true');
      newLoading.setAttribute('size', '14');
      newLoading.setAttribute('class', 'loading');
      newLoading.setAttribute('color', this._disabled ? style.disabledIconColor : style.iconColor);
      this.$button.appendChild(newLoading);
      this.$button.setAttribute('loading', ' ')
      return;
    } else if (existedloading && !this._loading) {
      existedloading.remove();
      this.$button.removeAttribute('loading')
      return;
    } else if (this._loading) {
      existedloading.setAttribute('color', this._disabled ? style.disabledIconColor : style.iconColor);
      this.$button.setAttribute('loading', ' ')
    }
  }

  connectedCallback() {
    this.$button.addEventListener("click", (e) => {
      if (!this._disabled && !this._loading) {
        this.dispatchEvent(new CustomEvent('be-click', e))
      }
    });
  }

}

if ('customElements' in window) {
  customElements.define('be-button', Button);
}