import { FC, PropsWithChildren } from 'react';
import { StyledTable } from './Table.style';

const Table: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledTable data-testid="Table">
			{children}
		</StyledTable>
	);
};

export default Table;
