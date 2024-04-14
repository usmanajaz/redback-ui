import { render, screen } from '@testing-library/react';
import RedbackUiThemeProvider from './RedbackUiThemeProvider';
import { themes } from '../../themes';

describe('<RedbackUiThemeProvider />', () => {
	it('should mount', () => {
		render(<RedbackUiThemeProvider theme={themes.default}>Content</RedbackUiThemeProvider>);

		const redbackUiThemeProvider = screen.getByTestId('RedbackUiThemeProvider');

		expect(redbackUiThemeProvider).toBeInTheDocument();
	});
});
