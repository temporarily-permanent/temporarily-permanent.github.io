import"../chunks/CWj6FrbW.js";import{p as _,f as v,a as g,i as c,b as m,c as k,d as $,m as q,as as x,aq as M,r as y,s as O}from"../chunks/DIUQrLkW.js";import{i as j}from"../chunks/-xI9udHL.js";import{r as w}from"../chunks/Bii7DsrY.js";import{b as z,t as d,e as A}from"../chunks/D6ehteFB.js";var B=v('<div class="centered svelte-8aqkg4"><span class="svelte-8aqkg4">transitions!</span></div>'),C=v('<label><input type="checkbox"/> visible</label> <!>',1);function I(f,u){_(u,!0);let t=x(!0);function r(a,{duration:s}){return{duration:s,css:(n,l)=>{const p=A(n);return`
					transform: scale(${p}) rotate(${p*3*1080}deg);
					color: hsl(
						${Math.trunc(n*360)},
						${Math.min(100,1e3*l)}%,
						${Math.min(50,500*l)}%
					);`}}}var i=C(),e=g(i),o=$(e);w(o),M(),y(e);var b=O(e,2);{var h=a=>{var s=B();d(1,s,()=>r,()=>({duration:8e3})),d(2,s,()=>r,()=>({duration:8e3})),m(a,s)};j(b,a=>{c(t)&&a(h)})}z(o,()=>c(t),a=>q(t,a)),m(f,i),k()}export{I as component};
