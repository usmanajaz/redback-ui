import{a as c,c as n}from"./polished.esm-DHPXM_EY.js";const a=1.25,r={colors:{primary:"#e97462",secondary:"#370e4a",subtle:"#b3a7b7",light:"#f8f9fa",dark:"#0e080e",success:"#00b285",error:"#84213A",warning:"#e97462",info:"#00aeb2",background:"#f8f9fa"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},typeScale:a,fontFamily:{body:"'Inter Tight', sans-serif",heading:"'Inter Tight', sans-serif"},fontWeights:{light:300,normal:400,semibold:600,bold:700},fontSizes:["md","lg","xl","xxl","display"].reduce((e,s)=>{const o=Object.values(e).pop();return e[s]=`${parseFloat(o.replace("rem",""))*a}rem`,e},{sm:"0.8rem",default:"1rem"})},l={...r,colors:{...r.colors,primary:"#fbb653",secondary:"#e97462",success:"#599d62",info:"#5d8de8",background:"#f8f9fa",dark:"#370e4a"}},t={...r,colors:{...r.colors,primary:"#370e4a",secondary:"#5680a6",info:"#5680a6",success:"#00776d",background:"#f8f9fa",dark:"#0B0E10",subtle:"#e8d5b5"}},i={...r,colors:{...r.colors,primary:"#84213A",secondary:"#FF3465",info:"#54bac1",background:"#0B0E10",dark:c(.05,"#0B0E10"),subtle:n(.65,r.colors.subtle)}};export{t as a,i as b,r as d,l as s};
