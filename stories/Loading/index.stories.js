import { html } from 'lit-html';
import './index';

export default {
  title: 'loading',
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'color' },
    },
    size: {
      control: { type: 'number' },
    }
  },
};

const Template = ({ color, size, loading }) => {
  console.log(size, 'size');
  console.log(color, 'color');
  return html`
    <be-loading color="${color}" size="${size}" loading="${loading}"></be-loading>
  `;
}

export const Loading = Template.bind({});

Loading.args = {
  loading: true,
};
