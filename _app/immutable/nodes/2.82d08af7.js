import{s as x,n as S,e as E,o as M,b as N}from"../chunks/scheduler.e108d1fd.js";import{S as C,i as W,g as O,h as P,j as z,f as _,l as U,k as G,a as q,s as J,r as K,x as Q,c as V,u as X,v as Y,d as Z,t as tt,w as et}from"../chunks/index.38392eeb.js";import{p as B}from"../chunks/stores.0e4cf39e.js";function st(r){let e;return{c(){e=O("main"),this.h()},l(n){e=P(n,"MAIN",{style:!0,class:!0}),z(e).forEach(_),this.h()},h(){U(e,"height","calc(100% - "+r[0]+"px)"),G(e,"class","svelte-gipc32")},m(n,a){q(n,e,a),r[3](e)},p(n,[a]){a&1&&U(e,"height","calc(100% - "+n[0]+"px)")},i:S,o:S,d(n){n&&_(e),r[3](null)}}}async function nt(r){return await(await fetch(r)).text()}function at(r,e,n){let a;E(r,B,o=>n(4,a=o));let l=a.url,{markdownURL:t}=e,{offsetTop:i=0}=e,c;function H(o){var d;return(((d=o.match(/<style>[\s\S]*?<\/style>/g))==null?void 0:d.join(""))||"")+o.replace(/\n<style>[\s\S]*?<\/style>/g,"").split(`
`).map(s=>{var y,L,I,T,A,R;s=s.trim();const $=((y=s.match(/\{([^{}]+)\}/g))==null?void 0:y.map(m=>m.replace(/(\{|\})/g,"")))||[];let f="",u=[],p=[];for(let m=0;m<$.length;m++){const h=$[m],w=(L=h.match(/!([^ ]+)/))==null?void 0:L[1],j=(I=h.match(/#([^ ]+)/))==null?void 0:I[1],b=((T=h.match(/(^\.| \.)([^ ]+)/g))==null?void 0:T.map(v=>v.replace(/(^\.| \.)/,"")))||[],k=((A=h.match(/@([^ ]+)/g))==null?void 0:A.map(v=>v.replace(/@/,"")))||[];w?s=s.replace(`{${h}}`,`<img src="${l}${w}" alt="${w}"${j?` id="${j}"`:""}${b.length?` class="${b.join(" ")}"`:""}${k.length?` state="${k.join(" ")}"`:""}/>`):(f=j,u=b,p=k,s=s.replace(`{${h}}`,"").trim())}if(s.startsWith("#")){const m=((R=s.match(/^(#+)/))==null?void 0:R[0].length)||1,h=s.replace(/^(#+\s*)/,"").trim();return`<h${m}${f?` id="${f}"`:""}${u.length>0?` class="${u.join(" ")}"`:""}${p.length>0?` state="${p.join(" ")}"`:""}>${h}</h${m}>`}else if(s.startsWith("{")){const m=s.replace(/^{/,"").replace(/}$/,"").trim();return`<div${f?` id="${f}"`:""}${u.length>0?` class="${u.join(" ")}"`:""}${p.length>0?` state="${p.join(" ")}"`:""}>${m}${s.endsWith("}")?"</div>":""}`}else return s.startsWith("}")?"</div>":s.match(/^<img[^>]+>$/)?s:s===""&&$.length===0?"<br>":`<p${f?` id="${f}"`:""}${u.length>0?` class="${u.join(" ")}"`:""}${p.length>0?` state="${p.join(" ")}"`:""}>${s}</p>`}).join("")}function D(o){c&&o.forEach(g=>{var s;(((s=g.target.getAttribute("state"))==null?void 0:s.split(" "))||[]).forEach($=>{c.classList.toggle($,g.isIntersecting)})})}M(()=>{nt(t).then(o=>{const g=H(o);n(1,c.innerHTML=g,c);const d=new IntersectionObserver(D,{root:c,rootMargin:"0px",threshold:.5});c.querySelectorAll("[state]").forEach(s=>d.observe(s))})});function F(o){N[o?"unshift":"push"](()=>{c=o,n(1,c)})}return r.$$set=o=>{"markdownURL"in o&&n(2,t=o.markdownURL),"offsetTop"in o&&n(0,i=o.offsetTop)},[i,c,t,F]}class rt extends C{constructor(e){super(),W(this,e,at,st,x,{markdownURL:2,offsetTop:0})}}function ot(r){let e,n,a,l;return document.title=e="Benji is "+r[2][r[0]],a=new rt({props:{markdownURL:r[1].url.pathname+"/markdown/letter.md"}}),{c(){n=J(),K(a.$$.fragment)},l(t){Q("svelte-13vrgae",document.head).forEach(_),n=V(t),X(a.$$.fragment,t)},m(t,i){q(t,n,i),Y(a,t,i),l=!0},p(t,[i]){(!l||i&5)&&e!==(e="Benji is "+t[2][t[0]])&&(document.title=e);const c={};i&2&&(c.markdownURL=t[1].url.pathname+"/markdown/letter.md"),a.$set(c)},i(t){l||(Z(a.$$.fragment,t),l=!0)},o(t){tt(a.$$.fragment,t),l=!1},d(t){t&&_(n),et(a,t)}}}function ct(r,e,n){let a;E(r,B,i=>n(1,a=i));const l=["awesome","cool","sweet","fun","🎉"];let t=0;return M(()=>{setInterval(()=>{n(0,t=(t+1)%l.length)},500)}),[t,a,l]}class ht extends C{constructor(e){super(),W(this,e,ct,ot,x,{})}}export{ht as component};
