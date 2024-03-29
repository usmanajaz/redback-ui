import styled from 'styled-components';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';
import { darken, readableColor } from 'polished';

type StyledButtonProps = {
	$color: ThemeColor;
	$appearance: ThemeElementAppearance;
	$size: ThemeElementSize
}
export const StyledButton = styled.button<StyledButtonProps>`
	font-family: ${props => props.theme.fontFamily.body};
	font-weight: ${props => props.theme.fontWeights.normal};
	background: ${props => props.theme.colors[props.$color]};
	color: ${props => readableColor(props.theme.colors[props.$color])};
	text-decoration: underline;
	text-decoration-color: transparent;
	appearance: none;
	border-radius: 3rem;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: ${props => props.theme.fontSizes.sm};
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

	&:hover, &:focus, &:active {
		background: ${props => darken(0.3, props.theme.colors[props.$color])};
		text-decoration-color: currentColor;
	}
`;
