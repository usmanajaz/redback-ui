import {type StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	core: {
		builder: '@storybook/builder-vite',
	},
	async viteFinal(config, { configType }) {
		if (!config.optimizeDeps) {
			config.optimizeDeps = { include: [] };
		}
		config.optimizeDeps.include.push('polished');

		if(configType === 'PRODUCTION') {
			config.server = mergeConfig(config.server, {
				mimeTypes: {
					'ts': 'text/javascript'
				}
			});
		}

		return config;
	},
	staticDirs: ['../public', {from: '../src/themes', to: 'themes'}],
	stories: ['../src/**/*.stories.@(ts|tsx)', '../docs/**/*.mdx'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-docs',
		'storybook-dark-mode'
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
