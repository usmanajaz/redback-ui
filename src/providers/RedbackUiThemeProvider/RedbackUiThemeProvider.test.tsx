import { render, screen } from '@testing-library/react';
import { RedbackUiThemeProvider } from './RedbackUiThemeProvider';
import { themes } from '../../themes';

describe('<RedbackUiThemeProvider />', () => {
	it('renders', () => {
		render(<RedbackUiThemeProvider theme={themes.default}>Content</RedbackUiThemeProvider>);

		const redbackUiThemeProvider = screen.getByTestId('redback-ui.wrapper');

		expect(redbackUiThemeProvider).toBeVisible();
	});
});
