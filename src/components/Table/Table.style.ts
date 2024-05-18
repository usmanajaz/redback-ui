import styled from 'styled-components';
import { readableColor } from 'polished';

export const StyledTable = styled.table<{ type: 'success' | 'info' | 'warning' | 'error' }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${props => props.theme.colors[props.type]};
  color: ${props => readableColor(props.theme.colors[props.type], 'white', 'black', false)}; 

  th, td {
    padding: ${props => props.theme.spacing.sm}; // use theme spacing for padding
    border: 1px solid ${props => props.theme.colors[props.type]};
  }
`;
