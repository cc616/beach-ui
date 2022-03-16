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
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ disabled, onClick, loading, type, size }) => {
  return html`
    <be-button disabled="${disabled}" @be-click=${onClick} loading="${loading}" type="${type}" size="${size}">hello</be-button>
  `;
}

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  loading: false,
  type: 'primary',
  size: 'medium',
};

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  loading: false,
  type: 'default',
  size: 'medium',
}
