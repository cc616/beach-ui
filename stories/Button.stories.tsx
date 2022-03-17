import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../components/button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'default',
      description: '按钮类型',
      control: 'select',
      options: ["primary", "default", "ghost", "link", "text"]
    },
    size: {
      defaultValue: 'default',
      description: '按钮大小',
      control: 'select',
      options: ["sm", "default", "lg"]
    },
    disabled: {
      description: '按钮禁止',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta;

const ButtonTextMap: {[key: string]: string} = {
  primary: 'Primary',
  default: 'Default',
  ghost: 'Ghost',
  link: 'Link',
  text: 'Text',
}

const BasicTemplate: Story<ButtonProps> = (args) => {
  const { type = 'default' } = args
  return (
    <>
      <h4>按钮类型：{type}</h4>
      <Button {...args}>{ButtonTextMap[type]} Button</Button>
    </>
  )
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  disabled: false,
  type: 'primary',
  size: 'default'
};
