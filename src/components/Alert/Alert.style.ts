import styled from 'styled-components';
import { getLuminance, meetsContrastGuidelines, readableColor, shade, tint } from 'polished';

export const StyledAlert = styled.div<{type: 'success' | 'info' | 'warning' | 'error'}>`
	width: 100%;
	border: ${props => `1px solid ${props.theme.colors[props.type]}`};
	border-left-width: ${props => props.theme.spacing.sm};
	color: ${props => readableColor(props.theme.colors[props.type])};
	padding: ${props => props.theme.spacing.md};
	margin-bottom: ${props => props.theme.spacing.lg};
	background: ${props => {
		const isDark = getLuminance(props.theme.colors.background) < 0.5;
		return isDark ? tint(0.1, props.theme.colors.background) : 'white';
	}};
	color: ${props => {
		const isDark = getLuminance(props.theme.colors.background) < 0.5;
		let color = props.theme.colors[props.type];
		let attempts = 0;
		// Gradually lighten/darken the text color until it either meets WCAG guidelines or 3 attempts have been made, whichever comes first
		while(attempts < 4) {
			const contrast = meetsContrastGuidelines(color, props.theme.colors.background);
			if(contrast.AA) {
				return color;
			}
			color = isDark ? tint(0.1, color) : shade(0.1, color);
			attempts++;
		}
		
		// If the colour is not accessbile after 3 attempts, just return the inverse of the background
		return readableColor(props.theme.colors.background);
	}};
	
	p {
		font-size: ${props => props.theme.fontSizes.sm};
		margin-top: 0;
		margin-bottom: ${props => props.theme.spacing.xs};
		
		&:first-child {
			font-size: ${props => props.theme.fontSizes.default};
		}
		
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
