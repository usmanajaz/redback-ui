import{u as o}from"./styled-components.browser.esm-CoKU8m7y.js";import{r as t,c as n}from"./polished.esm-DHPXM_EY.js";const i=o.button`
	display: inline-block;
	font-family: ${e=>e.theme.fontFamily.body};
	font-weight: ${e=>e.theme.fontWeights.normal};
	background: ${e=>e.theme.colors[e.$color]};
	color: ${e=>t(e.theme.colors[e.$color])};
	text-decoration: underline;
	text-decoration-color: transparent;
	appearance: none;
	border: 0;
	border-radius: 3rem;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: ${e=>e.theme.fontSizes.sm};
	// Handle appearance
	${e=>{if(e.$appearance==="outline")return`
				background: transparent;
				color: ${e.theme.colors[e.$color]};
				border: 1px solid ${e.theme.colors[e.$color]};
			`}};
	// Handle sizes
	${e=>e.$size==="sm"?`
				padding: ${e.theme.spacing.xs} ${e.theme.spacing.md};
				font-size: ${e.theme.fontSizes.xs};
			`:e.$size==="lg"?`
				padding: ${e.theme.spacing.sm} ${e.theme.spacing.xxl};
				font-size: ${e.theme.fontSizes.default};
			`:`
			padding: ${e.theme.spacing.sm} ${e.theme.spacing.lg};
			font-size: 0.875rem; // in between sm (0.75rem) and default (1rem)
		`};

	&:hover, &:focus, &:active {
		text-decoration-color: currentColor;
		color: ${e=>t(e.theme.colors[e.$color])};
		
		${e=>e.$appearance==="outline"?`
				background: ${e.theme.colors[e.$color]};
			`:`
				background: ${n(.15,e.theme.colors[e.$color])};
			`}};
	}
`;export{i as S};
