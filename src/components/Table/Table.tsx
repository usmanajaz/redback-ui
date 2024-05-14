import { FC, PropsWithChildren } from 'react';
import { StyledTable } from './Table.style';

export const Table: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledTable data-testid="Table">
			{children}
		</StyledTable>
	);
};
