import Button from './Button';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { themeColorSubset } from '../../types.ts';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		label: { disable: true },
		color: { control: 'select', options: Object.keys(themeColorSubset) },
	},
	args: {
		label: 'Button',
		onClick: fn() // spy on the onClick arg, so it will appear in the actions panel once invoked
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	onClick: fn()
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
		label: 'Button',
		...defaultProps,
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		...defaultProps,
		color: 'primary',
		label: 'Default button',
	},
	...disableControls
};

export const Primary: Story = {
	args: {
		...defaultProps,
		color: 'primary',
		label: 'Primary button',
		onClick: fn()
	},
	...disableControls
};

export const Secondary: Story = {
	args: {
		...defaultProps,
		color: 'secondary',
		label: 'Secondary button',
		onClick: fn()
	},
	...disableControls
};

export const PrimaryOutline: Story = {
	args: {
		...defaultProps,
		color: 'primary',
		label: 'Outline button (primary)',
		appearance: 'outline'
	},
	...disableControls
};

export const SecondaryOutline: Story = {
	args: {
		...defaultProps,
		color: 'secondary',
		label: 'Outline button (secondary)',
		appearance: 'outline'
	},
	...disableControls
};

export const Small: Story = {
	args: {
		...defaultProps,
		color: 'primary',
		label: 'Small button',
		size: 'sm',
	},
	...disableControls
};

export const Large: Story = {
	args: {
		...defaultProps,
		color: 'primary',
		label: 'Large button',
		size: 'lg',
	},
	...disableControls
};

