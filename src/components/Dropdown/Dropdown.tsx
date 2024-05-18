import React, { useState } from 'react';
import { StyledDropdown } from './Dropdown.style';

const Dropdown: React.FC = () => {
    const [type, setType] = useState<'success' | 'info' | 'warning' | 'error'>('info');
    const [selected, setSelected] = useState<string>('');

    return (
        <StyledDropdown type={type}>
            <select value={type} onChange={e => setType(e.target.value as any)}>
                <option value="success">Health Good</option>
                <option value="info">Stable Health</option>
                <option value="warning">Health Limit</option>
                <option value="error">Critical Health</option>
            </select>
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="">Select an option</option>
                <option value="Option 1">Call for help</option>
                <option value="Option 2">Ask player to slow down</option>
                <option value="Option 3">No action</option>
            </select>
            <div>{selected ? `You have selected: ${selected}` : "Please select an option"}</div>
        </StyledDropdown>
    );
};

export default Dropdown;
