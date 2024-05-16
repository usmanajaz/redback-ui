import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{u as i}from"./styled-components.browser.esm-CoKU8m7y.js";const n=i.span`
	display: -webkit-box; // required for line clamping to work
	-webkit-box-orient: vertical; // required for line clamping to work
	-webkit-line-clamp: ${e=>e.lines};
	overflow: hidden;
	text-overflow: ellipsis;
`,o=({lines:e,text:t})=>r.jsx(n,{"data-testid":"TruncatedText",lines:e,children:t});o.__docgenInfo={description:"",methods:[],displayName:"TruncatedText",props:{text:{required:!0,tsType:{name:"string"},description:""},lines:{required:!0,tsType:{name:"number"},description:""}}};export{o as T};
