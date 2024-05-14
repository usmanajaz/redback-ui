import { LinkButton } from './LinkButton';
import type { Meta, StoryObj } from '@storybook/react';
import { themeColorSubset } from '../../types';

const meta = {
	title: 'Components/LinkButton',
	component: LinkButton,
	parameters: {
		componentSubtitle: 'Like a Button, but rendered as an <a>.',
		docs: {
			description: {
				component: 'All props and variations of Button are also available for LinkButton.'
			},
		},
	},
	argTypes: {
		label: { disable: true },
		color: { control: 'select', options: Object.keys(themeColorSubset) },
		target: { control: 'radio', options: ['_blank', undefined] }
	},
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

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
		label: 'LinkButton',
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		label: 'Default LinkButton',
	},
	...disableControls
};