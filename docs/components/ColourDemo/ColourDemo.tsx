import { FC } from 'react';
import { ColourDemoBlock, ColourDemoGrid, StyledColourDocs } from './ColourDemo.style';
import { RedbackUiTheme } from '../../../src/types';
import RedbackUiThemeProvider from '../../../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';

type ColourDocProps = {
	name: string;
	theme: RedbackUiTheme;
}

const ColourDemo: FC<ColourDocProps> = ({ name, theme }: ColourDocProps) => {
	return (
		<RedbackUiThemeProvider theme={theme}>
			<StyledColourDocs data-testid="Colour Docs">
				<h2>{name}</h2>
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
