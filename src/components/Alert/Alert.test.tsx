import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils.tsx';
import Alert from './Alert';

describe('<Alert />', () => {
	it('renders', () => {
		renderWithDeps(<Alert>Example alert</Alert>);

		expect( screen.getByText('Example alert')).toBeInTheDocument();
	});
});
