import { Meta, Story } from '@storybook/react';
import Input from '../components/input';
import { InputProps } from '../components/input/index.d';

import '../components/input/index.less';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'default',
      description: 'type',
      control: 'select',
      options: ['default', 'underline', 'bold'],
    },
    content: {
      name: 'content',
      defaultValue: 'number',
      description: 'content',
      control: 'select',
      options: ['number', 'string'],
    },
    maxLength: {
      name: 'maxLength',
      defaultValue: 'default',
      description: 'color',
      control: 'select',
      options: [5, 20, 100, 200, 256],
    },
    disabled: {
      description: 'disabled',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta;

const BasicTemplate: Story<InputProps> = (args) => {
  return <Input {...args}>CheckBox</Input>;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  disabled: false,
  type: 'default',
  maxLength: 20,
};
