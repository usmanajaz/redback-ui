import styled from 'styled-components';
import './global.css';

export const RedbackUiWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: ${props => props.theme.colors.background};
	font-family: ${props => props.theme.fontFamily.body};
	font-size: ${props => props.theme.fontSizes.default};
`;
