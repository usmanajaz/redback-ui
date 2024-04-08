import { themes } from './themes';
import omit from 'lodash/omit';
import pick from 'lodash/pick';

export type RedbackUiTheme = typeof themes.default;

// To be used in Storybook and anywhere else we want to access this subset
export const themeColorSubset = omit(themes.default.colors, ['light', 'dark', 'background']);
export type ThemeColor = keyof typeof themeColorSubset;
export const baseColorSet = pick(themes.default.colors, ['light', 'dark', 'background']);
export type BaseColor = keyof typeof baseColorSet;

export type ThemeElementAppearance = 'solid' | 'outline';

export type ThemeElementSize = 'sm' | 'md' | 'lg';
