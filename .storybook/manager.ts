import { addons } from '@storybook/manager-api';
import { API_PreparedIndexEntry, API_StatusObject } from '@storybook/types';
import { create } from '@storybook/theming/create';
import theme from '../src/themes/default';
import { tint } from 'polished';

const docTheme = create({
	base: 'light',
	brandTitle: 'Redback UI',
	brandImage: './icon.svg',
	brandTarget: '_blank',
	fontBase: "'Inter Tight', sans-serif",
	colorPrimary: theme.colors.primary,
	colorSecondary: theme.colors.secondary,

	// UI
	appBg: tint(0.9, theme.colors.subtle),
	appContentBg: '#ffffff',
	appPreviewBg: '#ffffff',
	appBorderColor: tint(0.5, theme.colors.subtle),
	appBorderRadius: 0,

	// Text colors
	textColor: theme.colors.dark,
	textInverseColor: '#ffffff',

	// Toolbar default and active colors
	barTextColor: theme.colors.dark,
	barSelectedColor: theme.colors.dark,
	barHoverColor: theme.colors.dark,
	barBg: tint(0.9, theme.colors.subtle),

	// Form colors
	inputBg: '#ffffff',
	inputBorder: theme.colors.dark,
	inputTextColor: theme.colors.dark,
	inputBorderRadius: 0,
});

addons.setConfig({
	theme: docTheme,
	sidebar: {
		filters: {
			patterns: (item: API_PreparedIndexEntry & {
				status: Record<string, API_StatusObject | null>;
			}): boolean => {
				return !(item.tags ?? []).includes('excludeFromSidebar');
			}
		}
	},
	panelPosition: 'bottom'
});
