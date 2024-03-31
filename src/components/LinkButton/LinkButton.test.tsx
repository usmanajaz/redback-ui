import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('<LinkButton />', () => {
	it('should mount', () => {
		render(<LinkButton/>);

		const linkButton = screen.getByTestId('LinkButton');

		expect(linkButton).toBeInTheDocument();
	});
});
