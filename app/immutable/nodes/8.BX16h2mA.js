import"../chunks/CWj6FrbW.js";import{p as _,f as v,a as g,i as c,b as m,c as k,d as $,m as x,ar as M,aw as q,r as w,s as y}from"../chunks/Bsr67UrP.js";import{i as O}from"../chunks/D4oFRjvc.js";import{r as j}from"../chunks/Djzm2A34.js";import{b as z,t as d,e as A}from"../chunks/Cv-fQNaK.js";var B=v('<div class="centered svelte-8aqkg4"><span class="svelte-8aqkg4">transitions!</span></div>'),C=v('<label><input type="checkbox"/> visible</label> <!>',1);function I(f,u){_(u,!0);let s=M(!0);function r(a,{duration:t}){return{duration:t,css:(n,l)=>{const p=A(n);return`
					transform: scale(${p}) rotate(${p*3*1080}deg);
					color: hsl(
						${Math.trunc(n*360)},
						${Math.min(100,1e3*l)}%,
						${Math.min(50,500*l)}%
					);`}}}var i=C(),e=g(i),o=$(e);j(o),q(),w(e);var b=y(e,2);{var h=a=>{var t=B();d(1,t,()=>r,()=>({duration:8e3})),d(2,t,()=>r,()=>({duration:8e3})),m(a,t)};O(b,a=>{c(s)&&a(h)})}z(o,()=>c(s),a=>x(s,a)),m(f,i),k()}export{I as component};
