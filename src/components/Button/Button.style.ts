import styled from 'styled-components';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';
import { darken, readableColor } from 'polished';

type StyledButtonProps = {
	$color: ThemeColor;
	$appearance: ThemeElementAppearance;
	$size: ThemeElementSize
}
export const StyledButton = styled.button<StyledButtonProps>`
	background: ${props => props.theme.colors[props.$color]};
	color: ${props => readableColor(props.theme.colors[props.$color])};
	appearance: none;
	padding: ${props => props.theme.spacing.md};
	cursor: pointer;
	background: ${props => props.theme.colors.background};
	transition: all 0.3s ease;

	&:hover, &:focus, &:active {
		background: ${props => darken(0.3, props.theme.colors.background)};
	}
`;
