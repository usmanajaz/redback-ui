import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('<Table />', () => {
	it('should mount', () => {
		render(<Table/>);

		const table = screen.getByTestId('Table');

		expect(table).toBeInTheDocument();
	});
});
