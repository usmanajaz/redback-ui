import '@testing-library/jest-dom';

jest.mock('./src/providers/RedbackUiThemeProvider/GlobalStyle.tsx', () => ({
	GlobalStyle: () => null
}));

