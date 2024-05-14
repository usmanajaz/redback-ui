import { FC, PropsWithChildren, ReactNode } from 'react';
import { RedbackUiWrapper } from './RedbackUiThemeProvider.style';
import { RedbackUiTheme } from '../../types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

type RedbackUiThemeProviderProps = {
	theme: RedbackUiTheme;
	children: ReactNode;
}

export const RedbackUiThemeProvider: FC<PropsWithChildren<RedbackUiThemeProviderProps>> = ({
	theme,
	children
}) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<RedbackUiWrapper id="redback-ui" data-testid="redback-ui.wrapper">
				{children}
			</RedbackUiWrapper>
		</ThemeProvider>
	);
};