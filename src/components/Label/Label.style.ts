import styled from 'styled-components';
import { readableColor } from 'polished';

export const StyledLabel = styled.span<{ type: 'info' | 'warning' | 'success' | 'error' }>`
	display: inline-block;
	background: ${props => props.theme.colors[props.type]};
	color: ${props => readableColor(props.theme.colors[props.type])};
	font-size: ${props => props.theme.fontSizes.sm};
	padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
	line-height: 1;
	text-transform: uppercase;
	font-weight: ${props => props.theme.fontWeights.semibold};
`;
