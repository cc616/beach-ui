import { template } from './template';
import { getBooleanAttribute } from '../utils/getBooleanAttribute';
import { getUpdateMethodsName } from '../utils/updateAttribute';

export class Modal extends HTMLElement {
  static get observedAttributes() { 
    return ['visible', 'title', 'closable', 'confirmLoading', 'okDisabled', 'type'];
  }

  constructor() {
    super();
    this.$root = this.attachShadow({ mode: 'open' });
    this.$root.appendChild(template.content.cloneNode(true));
    this.$portal = this.$root.querySelector('be-portal');
    const closable = this.getAttribute('closable') !== 'false';
    this.updateClosable(closable);
    this.initDefaultFooter();
  }

  static confirm({ title, content, okText, cancelText }) {
    this.$portal.setAttribute('visible', true);
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

  updateTitle(newValue) {
    if (newValue) {
      const titleEle = document.createElement('div');
      titleEle.innerHTML = newValue;
      this.$root.querySelector('slot[name="header"]').append(titleEle);
    }
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

  updateClosable(closable) {
    const that = this;
    if (!closable) {
      this.$root.querySelector('.close').remove();
    } else {
      this.$root.querySelector('.close').onclick = function() {
        that.setAttribute('visible', false);
      };
    }
  }

  initDefaultFooter() {
    const that = this;
    const cancelBtn = this.$root.querySelector('.defaultFooter be-button[type="default"]');
    const okBtn = this.$root.querySelector('.defaultFooter be-button[type="primary"]');

    okBtn.onclick = function() {
      that.setAttribute('visible', false);
    }

    cancelBtn.onclick = function() {
      that.setAttribute('visible', false);
    }
  }
}

if ('customElements' in window) {
  customElements.define('be-modal', Modal);
}
