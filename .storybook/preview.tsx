// @ts-ignore
import React from 'react';
import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContainer, Unstyled } from '@storybook/blocks';
import RedbackUiThemeProvider from '../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';
import { themes } from '../src/themes';

const preview: Preview = {
	globalTypes: {
		theme: {
			defaultValue: 'default',
			toolbar: {
				name: 'Theme',
				title: 'Theme',
				icon: 'paintbrush',
				items: Object.keys(themes),
				dynamicTitle: true,
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
		options: {
			storySort: (a, b) => {
				const pageOrder = ['About', 'Usage', 'Contributing'];
				if(pageOrder.includes(a.title) && pageOrder.includes(b.title)) {
					return pageOrder.indexOf(a.title) - pageOrder.indexOf(b.title);
				}
				return a.title === b.title
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true });
			},
		},
		docs: {
			container: ({ children, context }) => (
				<DocsContainer context={context}>
					<Unstyled>
						{children}
					</Unstyled>
				</DocsContainer>
			),
			page: () => (
				<Unstyled>
					<Title/>
					<Subtitle/>
					<Description/>
					<Primary/>
					<Controls/>
					<Stories includePrimary={false} title="Variations"/>
				</Unstyled>
			),
		},
	},
};

export default preview;
