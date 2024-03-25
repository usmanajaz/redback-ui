// @ts-ignore
import React from 'react';
import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import RedbackUiThemeProvider from '../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';
import { themes } from '../src/themes';
import './storybook.css';

const preview: Preview = {
	globalTypes: {
		theme: {
			defaultValue: 'default',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: Object.keys(themes),
				dynamicTitle: true
			}
		},
	},
	decorators: [
		(Story, context) => {
			return (
				<RedbackUiThemeProvider theme={themes[context.globals.theme]}>
					<Story />
				</RedbackUiThemeProvider>
			);
		}
	],
	parameters: {
		layout: 'centered',
		backgrounds: { disable: true },
		docs: {
			page: () => (
				<>
					<Title/>
					<Subtitle/>
					<Description/>
					<Primary/>
					<Controls/>
					<Stories includePrimary={false}/>
				</>
			),
		},
	},
};

export default preview;
