import"../chunks/CWj6FrbW.js";import{p as _,f as v,a as g,h as c,b as d,c as k,d as $,i as x,a8 as M,ab as q,r as y,s as O}from"../chunks/B4qFZDOD.js";import{i as j}from"../chunks/De2_rY1n.js";import{r as w}from"../chunks/h2GdkxDv.js";import{b as z,t as m,e as A}from"../chunks/Bo4uqUCZ.js";var B=v('<div class="centered svelte-8aqkg4"><span class="svelte-8aqkg4">transitions!</span></div>'),C=v('<label><input type="checkbox"/> visible</label> <!>',1);function I(f,u){_(u,!0);let s=M(!0);function r(a,{duration:t}){return{duration:t,css:(n,l)=>{const p=A(n);return`
					transform: scale(${p}) rotate(${p*3*1080}deg);
					color: hsl(
						${Math.trunc(n*360)},
						${Math.min(100,1e3*l)}%,
						${Math.min(50,500*l)}%
					);`}}}var i=C(),e=g(i),o=$(e);w(o),q(),y(e);var b=O(e,2);{var h=a=>{var t=B();m(1,t,()=>r,()=>({duration:8e3})),m(2,t,()=>r,()=>({duration:8e3})),d(a,t)};j(b,a=>{c(s)&&a(h)})}z(o,()=>c(s),a=>x(s,a)),d(f,i),k()}export{I as component};
