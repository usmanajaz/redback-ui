import{j as i}from"./jsx-runtime-DRTy3Uxn.js";import{u as l}from"./styled-components.browser.esm-CoKU8m7y.js";import{r as a,g as n,a as s,m,c}from"./polished.esm-DHPXM_EY.js";const d=l.div`
	width: 100%;
	border: ${e=>`1px solid ${e.theme.colors[e.type]}`};
	border-left-width: ${e=>e.theme.spacing.sm};
	color: ${e=>a(e.theme.colors[e.type])};
	padding: ${e=>e.theme.spacing.md};
	box-sizing: border-box;
	margin-bottom: ${e=>e.theme.spacing.lg};
	background: ${e=>n(e.theme.colors.background)<.5?s(.1,e.theme.colors.background):"white"};
	color: ${e=>{const r=n(e.theme.colors.background)<.5;let t=e.theme.colors[e.type],o=0;for(;o<4;){if(m(t,e.theme.colors.background).AA)return t;t=r?s(.1,t):c(.1,t),o++}return a(e.theme.colors.background)}};
	
	p {
		font-size: ${e=>e.theme.fontSizes.sm};
		margin-top: 0;
		margin-bottom: ${e=>e.theme.spacing.xs};
		
		&:first-child {
			font-size: ${e=>e.theme.fontSizes.default};
		}
		
		&:last-child {
			margin-bottom: 0;
		}
	}
`,u=({type:e,children:r})=>i.jsx(d,{"data-testid":"Alert",type:e??"info",children:r});u.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""}}};export{u as A};
