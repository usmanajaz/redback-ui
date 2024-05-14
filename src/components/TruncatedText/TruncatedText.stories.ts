import { TruncatedText } from './TruncatedText';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/TruncatedText',
	component: TruncatedText,
} satisfies Meta<typeof TruncatedText>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis faucibus mattis. Sed eget magna urna. Quisque posuere vehicula pharetra. Pellentesque bibendum condimentum lacus, at elementum justo ultrices ut. Ut at ipsum vel metus condimentum venenatis. Ut varius nisi in massa porttitor mollis. Pellentesque ac auctor quam.',
	lines: 2
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
