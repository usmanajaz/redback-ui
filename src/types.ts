import { themes } from './themes';

export type RedbackUiTheme = typeof themes.default;

export type ThemeColor = keyof typeof themes.default.colors;

export type ThemeElementAppearance = 'solid' | 'outline';

export type ThemeElementSize = 'sm' | 'md' | 'lg';
