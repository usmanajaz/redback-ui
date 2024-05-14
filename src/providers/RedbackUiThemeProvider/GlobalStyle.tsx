import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: ${props => props.theme.fontFamily.body};
		font-size: ${props => props.theme.fontSizes.default};
		font-weight: ${props => props.theme.fontWeights.light};
		line-height: 1.4;
	}
	
	h1, h2, h3, h4, h5, h6 {
		line-height: 1.2;
		
		&:first-child {
			margin-top: 0;
		}
	}
	
	h1 {
		font-size: ${props => props.theme.fontSizes.xl};
	}
	
	h2 {
		font-size: ${props => props.theme.fontSizes.lg};
	}
	
	h3 {
		font-size: ${props => props.theme.fontSizes.md};
	}
	
	strong {
		font-weight: ${props => props.theme.fontWeights.semibold};
	}
	
	a {
		color: ${props => props.theme.colors.dark};
		text-decoration: underline;
		text-decoration-color: ${props => rgba(props.theme.colors.subtle, 0.65)};
	}
`;