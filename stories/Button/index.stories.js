import { html } from 'lit-html';
import './index';

export default {
  title: 'button',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'onClick' },
  },
};

export const Primary = ({ disabled, onClick }) =>
  html`
    <be-button disabled="${disabled}" onClick="${onClick}">hello</be-button>
  `;
