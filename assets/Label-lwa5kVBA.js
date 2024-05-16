import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{u as a}from"./styled-components.browser.esm-CoKU8m7y.js";import{r as n}from"./polished.esm-DHPXM_EY.js";const s=a.span`
	display: inline-block;
	background: ${e=>e.theme.colors[e.type]};
	color: ${e=>n(e.theme.colors[e.type])};
	font-size: ${e=>e.theme.fontSizes.sm};
	padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
	line-height: 1;
	text-transform: uppercase;
	font-weight: ${e=>e.theme.fontWeights.semibold};
`,i=({type:e,text:t})=>r.jsx(s,{"data-testid":"Label",type:e,children:t});i.__docgenInfo={description:"",methods:[],displayName:"Label",props:{type:{required:!0,tsType:{name:"union",raw:"'info' | 'warning' | 'success' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};export{i as L};
