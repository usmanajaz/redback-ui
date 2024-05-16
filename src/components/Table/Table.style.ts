// Table.style.ts
import styled from 'styled-components';

export const StyledTable = styled.table<{ type: 'success' | 'info' | 'warning' | 'error' }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${props => props.theme.colors[props.type]};
  color: white;  // Assuming white text for simplicity, adjust as needed for contrast

  th, td {
    padding: 8px;
    border: 1px solid ${props => props.theme.colors[props.type]};
  }
`;
