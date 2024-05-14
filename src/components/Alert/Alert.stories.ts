import { Alert } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Alert',
	component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	children: 'This is an alert',
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

export const Success: Story = {
	args: {
		...defaultProps,
		type: 'success'
	},
	...disableControls
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

export const Error: Story = {
	args: {
		...defaultProps,
		type: 'error'
	},
	...disableControls
};
