import {Meta, Story} from "@storybook/react";
import CheckBox, {CheckBoxProps} from "../components/checkbox";

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    disabled: {
      description: 'unchecked',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta;

const BasicTemplate: Story<CheckBoxProps> = (args) => {
  return (
    <>
      <CheckBox {...args}>CheckBox</CheckBox>
    </>
  )
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  disabled: false,
};
