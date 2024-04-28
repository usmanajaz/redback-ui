import Label from './Label';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Label',
	component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	type: 'info',
	text: 'Label'
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
		...defaultProps,
		type: 'info'
	},
	tags: ['excludeFromSidebar']
};

export const Info: Story = {
	args: {
		...defaultProps,
		type: 'info'
	},
	...disableControls
};

export const Warning: Story = {
	args: {
		...defaultProps,
		type: 'warning'
	},
	...disableControls
};

export const Success: Story = {
	args: {
		...defaultProps,
		type: 'success'
	},
	...disableControls
};

export const Error: Story = {
	args: {
		...defaultProps,
		type: 'error'
	},
	...disableControls
};
