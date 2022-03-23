import Input, {InputProps} from "../components/input";
import {Meta, Story} from "@storybook/react";

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'default',
      description: 'type',
      control: 'select',
      options: [ "default","underline", "bold"],
    },
    maxLength: {
      name: 'maxLength',
      defaultValue: 'default',
      description: 'color',
      control: 'select',
      options: [5,20,100,200,256],
    },
    disabled: {
      description: 'disabled',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta;

const BasicTemplate : Story<InputProps> = (args) => {
  return (
    <>
      <Input {...args}>CheckBox</Input>
    </>
  )
}

export const Basic = BasicTemplate.bind({});
Basic.args = {
  disabled: false,
  type: 'default',
  maxLength: 20,
};

