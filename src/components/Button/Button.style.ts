import styled from 'styled-components';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types';
import { readableColor, shade } from 'polished';

type StyledButtonProps = {
	$color: ThemeColor;
	$appearance: ThemeElementAppearance;
	$size: ThemeElementSize
}
export const StyledButton = styled.button<StyledButtonProps>`
	display: inline-block;
	font-family: ${props => props.theme.fontFamily.body};
	font-weight: ${props => props.theme.fontWeights.normal};
	background: ${props => props.theme.colors[props.$color]};
	color: ${props => readableColor(props.theme.colors[props.$color])};
	text-decoration: underline;
	text-decoration-color: transparent;
	appearance: none;
	border: 0;
	border-radius: 3rem;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: ${props => props.theme.fontSizes.sm};
	// Handle appearance
	${props => {
		if(props.$appearance === 'outline') {
			return `
				background: transparent;
				color: ${props.theme.colors[props.$color]};
				border: 1px solid ${props.theme.colors[props.$color]};
			`;
		}
	}};
	// Handle sizes
	${props => {
		if(props.$size === 'sm') {
			return `
				padding: ${props.theme.spacing.xs} ${props.theme.spacing.md};
				font-size: ${props.theme.fontSizes.xs};
			`;
		}
		if(props.$size === 'lg') {
			return `
				padding: ${props.theme.spacing.sm} ${props.theme.spacing.xxl};
				font-size: ${props.theme.fontSizes.default};
			`;
		}
		return `
			padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg};
			font-size: 0.875rem; // in between sm (0.75rem) and default (1rem)
		`;
	}};

	&:hover, &:focus, &:active {
		text-decoration-color: currentColor;
		color: ${props => readableColor(props.theme.colors[props.$color])};
		
		${props => props.$appearance === 'outline' ? `
				background: ${props.theme.colors[props.$color]};
			` : `
				background: ${shade(0.15, props.theme.colors[props.$color])};
			`
}};
	}
`;
