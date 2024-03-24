import { FC, PropsWithChildren, ReactNode } from 'react';
import { RedbackUiWrapper } from './RedbackUiThemeProvider.style.ts';
import { RedbackUiTheme } from '../../types.ts';
import { ThemeProvider } from 'styled-components';

type RedbackUiThemeProviderProps = {
	theme: RedbackUiTheme;
	children: ReactNode;
}

const RedbackUiThemeProvider: FC<PropsWithChildren<RedbackUiThemeProviderProps>> = ({
	theme,
	children
}) => {
	return (
		<ThemeProvider theme={theme}>
			<RedbackUiWrapper id="redback-ui" data-testid="redback-ui.wrapper">
				{children}
			</RedbackUiWrapper>
		</ThemeProvider>
	);
};

export default RedbackUiThemeProvider;
