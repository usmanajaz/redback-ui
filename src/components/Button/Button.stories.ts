import Button from './Button';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'select' }
	},
	args: {
		label: 'Button',
		onClick: fn() // spy on the onClick arg, so it will appear in the actions panel once invoked
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: 'primary'
	},
};

