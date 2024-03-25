/**
 * Sample design system theme
 */

// Demo typescales at https://typescale.com/
const typeScale = 1.333;

export default {
	colors: {
		primary: '#007bff',
		secondary: '#6c757d',
		success: '#28a745',
		error: '#dc3545',
		warning: '#ffc107',
		subtle: '#6c757d',
		light: '#f8f9fa',
		dark: '#343a40',
		background: '#f8f9fa',
	},
	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
	},
	// Automatically generate font size key-value pairs using the specified type scale and starting xs font size
	fontSizes: ['sm', 'md', 'lg', 'xl', 'xxl', 'display'].reduce((result: {[key: string]: string}, size: string) => {
		const prev: string = <string>Object.values(result).pop();
		result[size] = `${parseFloat(prev.replace('rem', '')) * typeScale}rem`;
		return result;
	}, { xs: '0.75rem' })
};


