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
	border-radius: 3rem;
	${props => {
		if(props.$size === 'sm') {
			return `
				padding: ${props.theme.spacing.xs} ${props.theme.spacing.sm};
				font-size: ${props.theme.fontSizes.xs};
			`;
		}
		if(props.$size === 'lg') {
			return `
				padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg};
				font-size: ${props.theme.fontSizes.md};
			`;
		}
		return `
			padding: ${props.theme.spacing.xs} ${props.theme.spacing.md};
			font-size: ${props.theme.fontSizes.sm};
		`;
	}};
	cursor: pointer;
	background: ${props => props.theme.colors.background};
	transition: all 0.3s ease;

	&:hover, &:focus, &:active {
		background: ${props => darken(0.3, props.theme.colors.background)};
	}
`;
