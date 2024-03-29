import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	core: {
		builder: '@storybook/builder-vite',
	},
	stories: ['../src/**/*.stories.@(ts|tsx)', '../docs/**/*.mdx'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-docs'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs: true,
		defaultName: 'Docs',
	},
};

export default config;
