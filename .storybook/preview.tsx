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
				const sectionOrder = ['Design Tokens', 'Components'];
				if (sectionOrder.some(section => a.title.startsWith(section) && sectionOrder.some(section => b.title.startsWith(section)))) {
					const aSection = sectionOrder.find(section => a.title.startsWith(section));
					const bSection = sectionOrder.find(section => b.title.startsWith(section));
					return sectionOrder.indexOf(aSection) - sectionOrder.indexOf(bSection);
				}
				return a.title === b.title
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true });
			},
		},
		docs: {
			container: ({ children, context }) => {
				const theme = context.channel.data.setGlobals[0].globals.theme ?? 'default';
				return (
					<RedbackUiThemeProvider theme={themes[theme]}>
						<DocsContainer context={context}>
							<Unstyled>
								{children}
							</Unstyled>
						</DocsContainer>
					</RedbackUiThemeProvider>
				);
			},
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
