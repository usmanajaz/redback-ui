import { FC } from 'react';
import { ColourDemoBlock, ColourDemoGrid, StyledColourDocs } from './ColourDemo.style';
import { RedbackUiTheme, RedbackUiThemeName } from '../../../src/types';
import RedbackUiThemeProvider from '../../../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';
import { themes } from '../../../src/themes';
import Alert from '../../../src/components/Alert/Alert';

const ColourDemo: FC = () => {
	const themeName = localStorage.getItem('ui-theme') as RedbackUiThemeName;
	const theme: RedbackUiTheme = themes[themeName];

	return (
		<RedbackUiThemeProvider theme={theme}>
			<Alert type="info">
				<p>You are currently viewing these docs with Redback's <strong>{themeName}</strong> theme.</p>
				<p>You can select a different theme in the toolbar at the top of the page.</p>
			</Alert>
			<StyledColourDocs data-testid="Colour Docs">
				<ColourDemoGrid>
					{Object.entries(theme.colors).map(([key, value]) => (
						<ColourDemoBlock key={key} $color={key}>
							<div></div>
							<span>{key} <strong>{value}</strong></span>
						</ColourDemoBlock>
					))}
				</ColourDemoGrid>
			</StyledColourDocs>
		</RedbackUiThemeProvider>
	);
};

export default ColourDemo;
