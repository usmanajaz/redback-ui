import styled from 'styled-components';
import { readableColor, shade } from 'polished';

export const StyledDropdown = styled.div<{type: 'success' | 'info' | 'warning' | 'error'}>`
    width: 100%;
    padding: ${props => props.theme.spacing.md};
    background-color: ${props => props.theme.colors[props.type]};
    border: 1px solid ${props => shade(0.1, props.theme.colors[props.type])};
    box-sizing: border-box;
    margin-bottom: ${props => props.theme.spacing.md};

    select {
        width: 100%;
        padding: ${props => props.theme.spacing.sm};
        border: 1px solid ${props => shade(0.1, props.theme.colors[props.type])};
        background-color: ${props => readableColor(props.theme.colors[props.type], 'white', 'black', false)};
        color: ${props => readableColor(props.theme.colors[props.type], 'white', 'black')};

        // Ensure dropdown options are visible against the background
        option {
            background-color: ${props => props.theme.colors.background}; // Adjust this to your theme's suitable background
            color: ${props => props.theme.colors.text}; // Adjust this to your theme's text color for better contrast
        }
    }
`;
