import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { Table } from './Table';

describe('<Table />', () => {
	it('renders', () => {
		renderWithDeps(<Table/>);

		const table = screen.getByTestId('Table');

		expect(table).toBeInTheDocument();
	});
});
