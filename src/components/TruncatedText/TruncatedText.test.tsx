import { render, screen } from '@testing-library/react';
import TruncatedText from './TruncatedText';

describe('<TruncatedText />', () => {
	it('should mount', () => {
		render(<TruncatedText/>);

		const truncatedText = screen.getByTestId('TruncatedText');

		expect(truncatedText).toBeInTheDocument();
	});
});
