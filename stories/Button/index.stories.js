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

const Template = ({ disabled, onClick }) => {
  return html`
    <be-button disabled="${disabled}" @be-click=${onClick}>hello</be-button>
  `;
}

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
};
