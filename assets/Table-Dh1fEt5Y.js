import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{u as r}from"./styled-components.browser.esm-CoKU8m7y.js";import{g as a,a as s,b as t}from"./polished.esm-DHPXM_EY.js";const i=r.table`
	width: 100%;
	background: ${e=>a(e.theme.colors.background)<.5?s(.1,e.theme.colors.background):"white"};
	box-shadow: 0 0 0.5rem 0 ${e=>t(.25,e.theme.colors.subtle)};
	border-collapse: collapse;
	margin-bottom: ${e=>e.theme.spacing.lg};
	
	th, td {
		border-bottom: 1px solid ${e=>t(.75,e.theme.colors.subtle)};
		padding: ${e=>e.theme.spacing.sm};
	}
	
	th {
		&[scope="row"] {
			text-align: left;
		}
	}
`,n=({children:e})=>o.jsx(i,{"data-testid":"Table",children:e});n.__docgenInfo={description:"",methods:[],displayName:"Table"};export{n as T};
