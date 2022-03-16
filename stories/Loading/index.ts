import { template } from '@/Loading/template';

// interface LoadingProps {
//   size?: number;
//   loading?: boolean;
//   color?: string;
// }

class Loading extends HTMLElement {
  private $root: ShadowRoot;
  private $svg: SVGSVGElement;
  private _style: HTMLElement;
  private _loading: boolean;
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
        this._loading = newValue === 'true';
        this.updateLoading();
        break;
      case 'color':
        this.updateStyles({ color: newValue });
        break;
      case 'size':
        this.updateStyles({ size: newValue });
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

  updateStyles({ color, size }: { color?: string; size?: string }) {
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
