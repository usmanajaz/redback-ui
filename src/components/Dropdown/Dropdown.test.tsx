import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
	it('should mount', () => {
		render(<Dropdown/>);

		const dropdown = screen.getByTestId('Dropdown');

		expect(dropdown).toBeInTheDocument();
	});
});
