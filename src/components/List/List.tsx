import { FC, PropsWithChildren } from 'react';
import { StyledList } from './List.style';

type ListProps = {
	text: string;
	lines: number;
}

const List: FC<PropsWithChildren<ListProps>> = ({ lines, text }) => {
	return (
		<StyledList data-testid="List" lines={lines}>
			{text}
		</StyledList>
	);
};

export default List;
