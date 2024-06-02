import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    label: {
      options: ['Email', 'Password', undefined],
      control: { type: 'select' },
    },
    variant: {
      options: ['bordered', 'faded', 'flat', 'underlined'],
      control: { type: 'select' },
    },
    placeholder: {
      options: ['example@gmail.com', undefined],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryInput: Story = {
  render: (args) => <Input {...args} />,
  args: {
    size: 'sm',
    label: 'Email',
    variant: 'flat',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    placeholder: undefined,
    color: 'default',
  },
};
