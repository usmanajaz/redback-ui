import { render, screen } from '@testing-library/react';
import RedbackUiThemeProvider from './RedbackUiThemeProvider';

describe('<RedbackUiThemeProvider />', () => {
	it('should mount', () => {
		render(<RedbackUiThemeProvider/>);

		const redbackUiThemeProvider = screen.getByTestId('RedbackUiThemeProvider');

		expect(redbackUiThemeProvider).toBeInTheDocument();
	});
});
