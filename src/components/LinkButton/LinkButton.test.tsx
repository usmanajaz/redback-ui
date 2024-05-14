import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils';
import { LinkButton } from './LinkButton';

describe('<LinkButton />', () => {
	it('renders', () => {
		renderWithDeps(<LinkButton label="Test link" href="#" />);

		expect(screen.getByRole('link', { name: 'Test link' })).toBeVisible();
	});
});
