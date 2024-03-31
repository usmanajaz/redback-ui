import { themes } from './themes';
import omit from 'lodash/omit';

export type RedbackUiTheme = typeof themes.default;

export const themeColors = omit(themes.default.colors, ['light', 'dark', 'background']);
export type ThemeColor = keyof typeof themeColors;

export type ThemeElementAppearance = 'solid' | 'outline';

export type ThemeElementSize = 'sm' | 'md' | 'lg';
