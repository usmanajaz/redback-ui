import { themes } from '../src/themes';

// When the page first loads, get the theme name from local storage, or if not set, use 'default'
// and add it as a data attribute to the body element
window.addEventListener('DOMContentLoaded', function() {
	if(Object.keys(themes).includes(localStorage.getItem('ui-theme'))) {
		// set the data attribute
		document.body.setAttribute('data-ui-theme', localStorage.getItem('ui-theme') ?? 'default');

		// Set storybook base UI theme (light or dark)
		setBaseTheme(localStorage.getItem('ui-theme') ?? 'default');

		// set the global CSS variables
		setGlobalCssVariables(localStorage.getItem('ui-theme') ?? 'default');
	}
});

// When the theme setting in local storage changes, enact the changes that will enable the Storybook UI styling to change
window.addEventListener('storage', (event) => {
	if(Object.keys(themes).includes(event.newValue)) {
		// update the data attribute
		document.body.setAttribute('data-ui-theme', event.newValue);

		// Set storybook base UI theme (light or dark)
		setBaseTheme(event.newValue);

		// update the global CSS variables
		setGlobalCssVariables(event.newValue);
	}
});

/**
 * Function to inject CSS variables for each theme into the HTML <head>
 * This is a somewhat hacky workaround to access colours to override the Storybook UI (sidebar, toolbar, etc.) styling
 * (see storybook-ui-themes.css for the implementation)
 * and could be used in other edge cases where we can't access the theme object directly
 */
function setGlobalCssVariables(themeName) {
	const theme = themes[themeName];
	const mappedColours = Object.entries(theme.colors).map(([key, value]) => {
		return `--theme-color-${key}: ${value};`;
	}).join('\n');

	document.head.insertAdjacentHTML('beforeend',  `
		<style data-test-id="redback-ui-theme-colours">
			:root {
				${mappedColours}
			}
		</style>
	`);
}

function setBaseTheme(redbackThemeName) {
	const darkThemes = ['smartrack'];

	setTimeout(() => {
		const button = document.querySelector('button[title^="Change theme to"]');
		const buttonIsSetToDark = button?.title.includes('light');

		if(button) {
			if (darkThemes.includes(redbackThemeName) && !buttonIsSetToDark) {
				button.click();
			}
			else if (!darkThemes.includes(redbackThemeName) && buttonIsSetToDark) {
				button.click();
			}

			// Hide the button because currently, themes are light OR dark (i.e., don't have their own light/dark modes)
			button.style.display = 'none';
		}
	}, 100);
}
