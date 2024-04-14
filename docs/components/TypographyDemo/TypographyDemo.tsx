import { FC } from 'react';
import { StyledTypographyDemo } from './TypographyDemo.style';
import { RedbackUiTheme, RedbackUiThemeName } from '../../../src/types';
import { themes } from '../../../src/themes';
import RedbackUiThemeProvider from '../../../src/providers/RedbackUiThemeProvider/RedbackUiThemeProvider';
import Alert from '../../../src/components/Alert/Alert';
import Table from '../../../src/components/Table/Table';
import TruncatedText from '../../../src/components/TruncatedText/TruncatedText';

type TypographyDemoProps = {
	name: string;
	theme: RedbackUiTheme;
}

const TypographyDemo: FC<TypographyDemoProps> = () => {
	const themeName = localStorage.getItem('ui-theme') as RedbackUiThemeName;
	const theme: RedbackUiTheme = themes[themeName];

	return (
		<RedbackUiThemeProvider theme={theme}>
			<Alert type="info">
				<p>You are currently viewing these docs with Redback's <strong>{themeName}</strong> theme.</p>
				<p>You can select a different theme in the toolbar at the top of the page.</p>
			</Alert>
			<StyledTypographyDemo data-testid="TypographyDemo">
				<h2>Font families</h2>
				<Table>
					{Object.entries(theme.fontFamily).map(([key, value]) => {
						return (
							<tr key={key}>
								<th scope="row" style={{ width: '85px' }}><strong>{key}</strong></th>
								<td style={{ width: '225px' }}>{value}</td>
								<td style={{ fontFamily: value }}>
									<TruncatedText text="The quick brown fox jumped over the lazy dog" lines={1}/>
								</td>
							</tr>
						);
					})}
				</Table>
				<hr/>
				<h2>Font sizes</h2>
				<Table>
					{Object.entries(theme.fontSizes).map(([key, value]) => {
						return (
							<tr key={key}>
								<th scope="row" style={{ width: '85px' }}><strong>{key}</strong></th>
								<td style={{ width: '85px' }}>{parseFloat(value).toFixed(2)}rem</td>
								<td style={{ fontSize: value }}>
									<TruncatedText text="The quick brown fox jumped over the lazy dog" lines={1}/>
								</td>
							</tr>
						);
					})}
				</Table>
				<p>Type scale: <strong>{theme.typeScale}</strong></p>
				<hr/>
				<h2>Font weights</h2>
				<Table>
					{Object.entries(theme.fontWeights).map(([key, value]) => {
						return (
							<tr key={key}>
								<th scope="row" style={{ width: '85px' }}><strong>{key}</strong></th>
								<td style={{ width: '85px' }}>{value}</td>
								<td style={{ fontWeight: value }}>
									<TruncatedText text="The quick brown fox jumped over the lazy dog" lines={1}/>
								</td>
							</tr>
						);
					})}
				</Table>
			</StyledTypographyDemo>
		</RedbackUiThemeProvider>
	);
};

export default TypographyDemo;
