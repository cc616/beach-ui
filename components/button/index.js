import { template } from './template';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';
import { getUpdateMethodsName } from '../utils/updateAttribute';

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

const SIZE = ['small', 'medium', 'large'];

const fontSizeMapping = {
  small: 14,
  medium: 14,
  large: 16,
};

class Button extends HTMLElement {
  static get observedAttributes() { return ['disabled', 'loading', 'type', 'size']; }

  constructor() {
    super();
    this.$root = this.attachShadow({ mode: 'open' });
    this.$root.appendChild(template.content.cloneNode(true));
    this.$button = this.$root.querySelector('button');
    this._style = document.createElement('style');
    this.$root.appendChild(this._style);

    this.initIcon();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    this[getUpdateMethodsName(name)](newValue);
  }

  updateType(newValue) {
    this._type = newValue ?? 'default';
    this.$button.classList.add(this._type);
  }

  updateSize(newValue) {
    const _size = SIZE.includes(newValue) ? newValue : 'medium';
    this.$button.setAttribute(_size, ' ');
    this.updateStyles({ size: _size });
  }

  updateDisabled(newValue) {
    this._disabled = getBooleanAttribute(newValue);
    if (this._disabled) {
      this.$button.setAttribute('disabled', ' ')
    } else {
      this.$button.removeAttribute('disabled')
    }
    this._loading && this.updateLoading();
  }

  updateStyles({ size }) {
    this._style.textContent = `
      .btn {
        font-size: ${fontSizeMapping[size]}px;
      }
    `;
  }

  initIcon() {
    const slot = this.$root.querySelector('slot[name="button-icon"]');
    slot.addEventListener('slotchange', () => {
      const nodes = slot.assignedNodes();
      const iconStyle = document.createElement('style');
      const buttonSize = this.getAttribute('size');
      const _size = SIZE.includes(buttonSize) ? buttonSize : 'medium';
      iconStyle.textContent = `
        .icon {
          font-size: ${fontSizeMapping[_size]}px;
        }
      `;
      nodes[0].shadowRoot.appendChild(iconStyle);
    });
  }

  updateLoading(newValue) {
    this._loading = getBooleanAttribute(newValue);
    const existedloading = this.$root.querySelector('be-loading');
    const style = this._type ? typeStylesParams[this._type] : {};
    if (this._loading && !existedloading) {
      const newLoading= document.createElement('be-loading');
      newLoading.setAttribute('loading', 'true');
      newLoading.setAttribute('size', '14');
      newLoading.setAttribute('class', 'loading');
      newLoading.setAttribute('color', this._disabled ? style.disabledIconColor : style.iconColor);
      newLoading.setAttribute('name', 'icon');
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
