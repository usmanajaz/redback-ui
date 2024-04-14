import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('<Alert />', () => {
	it('should mount', () => {
		render(<Alert>Example alert</Alert>);

		const alert = screen.getByTestId('Alert');

		expect(alert).toBeInTheDocument();
	});
});
