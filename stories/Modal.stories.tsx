import { Story, Meta } from '@storybook/react';

import Modal from '../components/modal';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    visible: {
      name: 'visible',
      defaultValue: false,
      description: '弹窗显示',
      control: { type: 'boolean' },
    },
  },
} as Meta;

const BasicTemplate: Story = () => {
  return (
    <>
      <h4>基础用法</h4>
      <Modal visible />
    </>
  );
};

export const Basic = BasicTemplate.bind({});
