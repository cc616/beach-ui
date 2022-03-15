import { template } from './template';

export interface ButtonProps {
  type?: 'primary' | 'tertiary' | 'secondary' | 'text' | 'quaternary';
  disabled?: boolean;
  // loading?: boolean;
  onClick?: (event: Event) => void;
  icon?: Node;
  // iconPosition?: 'left' | 'right';
  // shape: 'default' | 'circle';
  // size?: 'medium' | 'small';
  // htmlType?: 'submit' | 'button' | 'reset';
}

class Button extends HTMLElement {
  private _disabled: boolean;
  private element: ShadowRoot;
  static get observedAttributes() { return ['disabled', 'loading', 'type']; }

  constructor() {
    super();
    this.element = this.attachShadow({ mode: 'open' });
    this.element.appendChild(template.content.cloneNode(true));
    this._disabled = this.hasAttribute('disabled') && this.getAttribute('disabled') === 'true';
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

  updateDisabled () {
    const buttonEle = this.element.querySelector('button');
    if (this._disabled) {
      buttonEle.setAttribute('disabled', ' ')
    } else {
      buttonEle.removeAttribute('disabled')
    }
  }

}

if ('customElements' in window) {
  customElements.define('be-button', Button);
}
