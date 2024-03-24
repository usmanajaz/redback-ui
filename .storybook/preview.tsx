// @ts-ignore
import React from 'react';
import type { Preview } from '@storybook/react';
import RedbackUiThemeProvider from '../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';
import { theme } from '../src/theme';
import './storybook.css';

const preview: Preview = {
	decorators: [
		(Story) => {
			return (
				<RedbackUiThemeProvider theme={theme}>
					<Story />
				</RedbackUiThemeProvider>
			);
		}
	],
};

export default preview;
