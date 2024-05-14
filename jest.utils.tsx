import { DiProvider, injectable } from 'react-magnetic-di';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import RedbackUiThemeProvider from './src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider.tsx';
import defaultTheme from './src/themes/default.ts';
import { render } from '@testing-library/react';

const commonDeps = [
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	injectable(RedbackUiThemeProvider, ({ theme, children }) => {
		return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
	}),
];


export const renderWithDeps = (component: ReactNode) => {
	return render(
		<DiProvider use={commonDeps}>
			<RedbackUiThemeProvider theme={defaultTheme}>
				{component}
			</RedbackUiThemeProvider>
		</DiProvider>);
};
