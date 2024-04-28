import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('<Label />', () => {
	it('should mount', () => {
		render(<Label/>);

		const label = screen.getByTestId('Label');

		expect(label).toBeInTheDocument();
	});
});
