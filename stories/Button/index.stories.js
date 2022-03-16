import { html } from 'lit-html';
import './index';

export default {
  title: 'button',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ disabled, onClick, loading, type }) => {
  return html`
    <be-button disabled="${disabled}" @be-click=${onClick} loading="${loading}" type="${type}">hello</be-button>
  `;
}

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  loading: false,
  type: 'primary',
};

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  loading: false,
  type: 'default',
}
