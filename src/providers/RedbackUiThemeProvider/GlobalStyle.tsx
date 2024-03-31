import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: ${props => props.theme.fontFamily.body};
		font-size: ${props => props.theme.fontSizes.default};
		font-weight: ${props => props.theme.fontWeights.light};
		line-height: 1.4;
	}
	
	h1 {
		font-size: ${props => props.theme.fontSizes.xxl};
	}
	
	h2 {
		font-size: ${props => props.theme.fontSizes.xl};
	}
`;