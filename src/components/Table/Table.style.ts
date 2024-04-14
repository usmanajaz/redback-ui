import styled from 'styled-components';
import { getLuminance, tint, transparentize } from 'polished';

export const StyledTable = styled.table`
	width: 100%;
	background: ${props => {
		const isDark = getLuminance(props.theme.colors.background) < 0.5;
		return isDark ? tint(0.1, props.theme.colors.background) : 'white';
	}};
	box-shadow: 0 0 0.5rem 0 ${props => transparentize(0.25, props.theme.colors.subtle)};
	border-collapse: collapse;
	margin-bottom: ${props => props.theme.spacing.lg};
	
	th, td {
		border-bottom: 1px solid ${props => transparentize(0.75, props.theme.colors.subtle)};
		padding: ${props => props.theme.spacing.sm};
	}
	
	th {
		&[scope="row"] {
			text-align: left;
		}
	}
`;
