import { screen, fireEvent }  from '@testing-library/react';
import { renderWithDeps } from '../../../jest.utils.tsx';
import Button from './Button';

const mockClick = jest.fn();

describe('<Button />', () => {
	it('renders', () => {
		renderWithDeps(<Button label="Test button" onClick={mockClick}/>);

		expect(screen.getByRole('button', { name: 'Test button' })).toBeVisible();
	});

	it('calls the click handler',  () => {
		renderWithDeps(<Button label="Test button" onClick={mockClick}/>);

		const button = screen.getByRole('button', { name: 'Test button' });

		fireEvent.click(button);

		expect(mockClick).toHaveBeenCalledTimes(1);
	});
});
