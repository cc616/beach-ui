import { template } from '@/Button/template';

// interface ButtonProps {
//   type?: 'primary' | 'tertiary' | 'secondary' | 'text' | 'quaternary';
//   disabled?: boolean;
//   // loading?: boolean;
//   icon?: Node;
//   // iconPosition?: 'left' | 'right';
//   // shape: 'default' | 'circle';
//   // size?: 'medium' | 'small';
//   // htmlType?: 'submit' | 'button' | 'reset';
//   onClick: (event: Event) => void;
// }

class Button extends HTMLElement {
  private _disabled: boolean;
  private $root: ShadowRoot;
  private $button: HTMLElement;
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
        this._disabled = newValue === 'true';
        this.updateDisabled();
        break;
    }
  }

  updateDisabled() {
    if (this._disabled) {
      this.$button.setAttribute('disabled', ' ')
    } else {
      this.$button.removeAttribute('disabled')
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
