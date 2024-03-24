import TemplateName from './TemplateName';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'TemplateName',
	component: TemplateName,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof TemplateName>;

export  default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
