import { template } from '@/Loading/template';
import { getBooleanAttribute } from '@/utils/getBooleanAttribute';

// interface LoadingProps {
//   size?: number;
//   loading?: boolean;
//   color?: string;
// }

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

    switch (name) {
      case 'loading':
        this._loading = getBooleanAttribute(newValue);
        this.updateLoading();
        break;
      case 'color':
        this.updateStyles({ color: newValue, size: this.getAttribute('size') });
        break;
      case 'size':
        this.updateStyles({ size: newValue, color: this.getAttribute('color') });
        break;
    }
  }

  updateLoading() {
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
