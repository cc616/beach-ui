import { Meta, Story } from '@storybook/react';
import CheckBox from '../components/checkbox';
import { CheckBoxProps } from '../components/checkbox/index.d';

import '../components/index.less';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'default',
      description: 'type',
      control: 'select',
      options: ['default', 'round'],
    },
    color: {
      name: 'color',
      defaultValue: 'default',
      description: 'color',
      control: 'select',
      options: ['default', 'red'],
    },
    disabled: {
      description: 'unchecked',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    size: {
      description: ' size',
      defaultValue: 'default',
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
} as Meta;

const BasicTemplate: Story<CheckBoxProps> = (args) => {
  return (
    <>
      <CheckBox {...args}>CheckBox</CheckBox>
    </>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  disabled: false,
  type: 'default',
};
