import { theme } from './theme.ts';

export type RedbackUiTheme = typeof theme;

export type ThemeColor = keyof typeof theme.colors;

export type ThemeElementAppearance = 'solid' | 'outline';

export type ThemeElementSize = 'sm' | 'md' | 'lg';
