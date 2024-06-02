import { Button } from '@components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { VerticalSpacing } from '@themes/spacing';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    backgroundColor: {
      control: { type: 'color' },
    },
    spinnerPlacement: {
      options: ['start', 'end'],
      control: { type: 'radio' },
    },
    radius: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'bordered',
        'faded',
        'flat',
        'ghost',
        'light',
        'shadow',
        'solid',
      ],
      control: { type: 'select' },
    },
    fontSize: {
      options: [
        FontSize.HEADLINE_4,
        FontSize.HEADLINE_5,
        FontSize.HEADLINE_6,
        FontSize.OVERLINE,
      ],
      control: { type: 'select' },
    },
    height: {
      options: [
        VerticalSpacing.M,
        VerticalSpacing.M_L,
        VerticalSpacing.L,
        VerticalSpacing.XL,
      ],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Button className="text-white" {...args}>
      Continue
    </Button>
  ),
  args: {
    backgroundColor: Color.RED,
    isDisabled: false,
    isLoading: false,
    isIconOnly: false,
    spinnerPlacement: 'start',
    radius: 'sm',
    size: 'lg',
    variant: 'flat',
    fontSize: FontSize.OVERLINE,
    height: VerticalSpacing.M_L,
  },
};
