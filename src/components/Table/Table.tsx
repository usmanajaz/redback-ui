// Table.tsx
import React, { useState } from 'react';
import { StyledTable } from './Table.style';

interface TableProps {
  rows: number;
  columns: number;
}

const Table: React.FC<TableProps> = ({ rows, columns }) => {
  const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');

  const renderRows = () => {
    const content = [];
    for (let i = 0; i < rows; i++) {
      const cells = [];
      for (let j = 0; j < columns; j++) {
        cells.push(<td key={`cell-${i}-${j}`}>{i * columns + j + 1}</td>);
      }
      content.push(<tr key={`row-${i}`}>{cells}</tr>);
    }
    return content;
  };

  return (
    <>
      <select value={type} onChange={e => setType(e.target.value as any)}>
        <option value="success">Success</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
      <StyledTable type={type}>
        <tbody>
          {renderRows()}
        </tbody>
      </StyledTable>
    </>
  );
};
