import { screen } from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils.tsx';
import Label from './Label';

describe('<Label />', () => {
	it('renders', () => {
		renderWithDeps(<Label type="info" text="Test label"/>);

		expect(screen.getByText('Test label')).toBeVisible();
	});
});
