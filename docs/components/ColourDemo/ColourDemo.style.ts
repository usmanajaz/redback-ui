import styled from 'styled-components';
import { BaseColor, ThemeColor } from '../../../src/types';
import { getLuminance, shade, tint } from 'polished';

export const StyledColourDocs = styled.div`
	background: ${props => props.theme.colors.background};
	padding: ${props => props.theme.spacing.lg};
	margin-bottom: ${props => props.theme.spacing.xl};
`;

export const ColourDemoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr); 
	grid-gap: ${props => props.theme.spacing.md};
`;

export const ColourDemoBlock = styled.div<{$color: ThemeColor | BaseColor}>`
	grid-column: ${props => {
		switch(props.$color) {
			case 'background':
				return 'span 12';
			case 'primary':
			case 'secondary':
				return 'span 6';
			case 'subtle':
			case 'light':
			case 'dark':
				return 'span 4';
			default:
				return 'span 3';
		}
	}};
			
	> div {
		background: ${props => props.theme.colors[props.$color]};
		height: ${props => {
		/* eslint-disable indent */
			if (props.$color === 'primary' || props.$color === 'secondary') {
				return '6rem';
			} 
			else if(props.$color !== 'background') { 
				return '4rem';
			}
		}};
		/* eslint-enable indent */
		border: ${props => {
			const isDark = getLuminance(props.theme.colors[props.$color]) < 0.5;
			/* eslint-disable indent */ 
			return props.theme.colors[props.$color] === props.theme.colors.background && props.$color !== 'background'
				? `1px solid ${isDark 
					? tint(0.3, props.theme.colors[props.$color])
					: shade(0.2, props.theme.colors[props.$color])
				}`
				: '1px solid transparent';
			}
		};
		/* eslint-enable indent */
	}
	
	> span {
		display: block;
		text-align: right;
		font-size: ${props => props.theme.fontSizes.default};
		padding-top: ${props => props.theme.spacing.xs};
	}
`;
