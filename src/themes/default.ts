/**
 * Sample design system theme
 */

// Demo typescales at https://typescale.com/
const typeScale = 1.333;

export default {
	colors: {
		primary: '#e97462',
		secondary: '#370e4a',
		success: '#00af60',
		error: '#970009',
		warning: '#e97462',
		subtle: '#b3a7b7',
		light: '#fef7ff',
		dark: '#0e080e',
		background: '#f8f9fa',
	},
	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
	},
	fontFamily: {
		body: '\'Inter Tight\', sans-serif',
		heading: '\'Inter Tight\', sans-serif',
	},
	fontWeights: {
		light: 300,
		normal: 400,
		bold: 700
	},
	// Automatically generate font size key-value pairs using the specified type scale and starting xs font size
	fontSizes: ['md', 'lg', 'xl', 'xxl', 'display'].reduce((result: {[key: string]: string}, size: string) => {
		const prev: string = <string>Object.values(result).pop();
		result[size] = `${parseFloat(prev.replace('rem', '')) * typeScale}rem`;
		return result;
	}, { sm: '0.875rem', default: '1rem' })
};


