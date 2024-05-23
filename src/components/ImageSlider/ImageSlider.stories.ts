import ImageSlider from './ImageSlider';
import type { Meta, StoryObj } from '@storybook/react';

// Declaring images array
const images = [
	'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const meta = {
	title: 'Components/ImageSlider',
	component: ImageSlider,
} satisfies Meta<typeof ImageSlider>;

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
		...defaultProps,
		images: images,
		size: 'large',
	},
	tags: ['excludeFromSidebar']
};

export const Default: Story = {
	args: {
		...defaultProps,
		images: images,
		size: 'large',
	},
	...disableControls
};

export const Large: Story = {
	args: {
		...defaultProps,
		images: images,
		size: 'large',
	},
	...disableControls
};

export const Small: Story = {
	args: {
		...defaultProps,
		images: images,
		size: 'small',
	},
	...disableControls
};

