import { render, screen } from '@testing-library/react';
import List from './List';

describe('<List />', () => {
	it('should mount', () => {
		render(<List/>);

		const List = screen.getByTestId('List');

		expect(List).toBeInTheDocument();
	});
});
