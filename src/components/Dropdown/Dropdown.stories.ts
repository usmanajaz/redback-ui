import Dropdown from './Dropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Dropdown',
	component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {

};

const disableControls = {
	parameters: {
		controls: {
			disable: true
		},
		actions: {
			disable: true
		},
	}
};

export const Demo: Story = {
	args: {
		...defaultProps
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		...defaultProps
	},
	...disableControls
};
