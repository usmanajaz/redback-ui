import styled from 'styled-components';
import { readableColor } from 'polished';

export const RedbackUiWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: ${props => props.theme.colors.background};
	color: ${props => readableColor(props.theme.colors.background)};
`;
