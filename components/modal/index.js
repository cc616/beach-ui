import { template } from './template';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';
import { getUpdateMethodsName } from '../utils/updateAttribute';

// 'spinning'
class Modal extends HTMLElement {
  static get observedAttributes() { 
    return ['okText', 'visible', 'title', 'cancelText', 'closable', 'confirmLoading', 'okDisabled', 'cancelDisabled', 'type', 'okButtonType'];
  }

  constructor() {
    super();
    this.$root = this.attachShadow({ mode: 'open' });
    this.$root.appendChild(template.content.cloneNode(true));
    this.$portal = this.$root.querySelector('be-portal');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    this[getUpdateMethodsName(name)](newValue);
  }

  updateVisible(newValue) {
    this.$portal.setAttribute('visible', newValue);
    const visible = getBooleanAttribute(newValue);
    this.updateShow(visible);
  }

  updateShow(visible) {
    if (visible) {
      ['.mask', '.modal', '.modalWrapper'].forEach((className) => {
        this.$root.querySelector(className).classList.remove('hide');
        this.$root.querySelector(className).classList.add('show');
      })
    } else {
      ['.mask', '.modal', '.modalWrapper'].forEach((className) => {
        this.$root.querySelector(className).classList.remove('show');
        this.$root.querySelector(className).classList.add('hide');
      })
    }
  }
}

if ('customElements' in window) {
  customElements.define('be-modal', Modal);
}
