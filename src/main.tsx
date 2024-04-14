import React from 'react';
import ReactDOM from 'react-dom/client';
import RedbackUiThemeProvider from './providers/RedbackUiThemeProvider/RedbackUiThemeProvider.tsx';
import { themes } from './themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RedbackUiThemeProvider theme={themes.default}>
			<h1>418: I'm A Teapot</h1>
			<p><strong>This is not the coffee you're trying to brew</strong></p>
			<p>Please head back to your terminal and run `npm run storybook`</p>
		</RedbackUiThemeProvider>
	</React.StrictMode>,
);
