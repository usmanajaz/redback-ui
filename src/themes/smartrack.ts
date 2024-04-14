import defaultTheme from './default';

const smartrack = {
	...defaultTheme,
	colors: {
		...defaultTheme.colors,
		primary: '#84213A',
		secondary: '#FF3465',
		info: '#54bac1',
		dark: '#0B0E10',
		background: '#0B0E10',
	},
};

document.head.insertAdjacentHTML('beforeend',  `
	<style>
	    body {
	        --fit-color-primary: ${smartrack.colors.primary};
	        --fit-color-secondary: ${smartrack.colors.secondary};
	        --fit-color-info: ${smartrack.colors.secondary};
	        --fit-color-subtle: ${smartrack.colors.subtle};
	        --fit-color-dark: ${smartrack.colors.dark};
	        --fit-color-light: ${smartrack.colors.light};
	        --fit-color-background: ${smartrack.colors.background};
	    }
	</style>
`);

export default smartrack;