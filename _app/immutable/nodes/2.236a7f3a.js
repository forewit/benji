import{s as z,n as w,o as O,r as S,b as U}from"../chunks/scheduler.e108d1fd.js";import{S as A,i as I,g,m as D,h as p,j as q,n as C,f as _,l as v,a as d,y as k,o as T,r as E,s as B,u as F,c as j,z as M,v as R,A as P,d as G,t as H,w as J}from"../chunks/index.dcbf515e.js";function K(r){let e,n,t;return{c(){e=g("p"),n=D(r[1]),t=D(r[0]),this.h()},l(a){e=p(a,"P",{style:!0});var i=q(e);n=C(i,r[1]),t=C(i,r[0]),i.forEach(_),this.h()},h(){v(e,"white-space","pre-wrap")},m(a,i){d(a,e,i),k(e,n),k(e,t)},p(a,[i]){i&2&&T(n,a[1]),i&1&&T(t,a[0])},i:w,o:w,d(a){a&&_(e)}}}function L(r,e){return Math.floor(Math.random()*(e-r+1))+r}function Q(r,e,n){let t=!0,a=" ",i,l="",{text:c=""}=e,{minDelay:u=30}=e,{maxDelay:m=200}=e,{blinkDelay:y=500}=e,{disableCursor:h=!1}=e;const s=async()=>{f(),t=!1;let o;for(let b=0;b<c.length;b++)o=L(u,m),c[b]==" "&&(o*=3),await new Promise(N=>i=setTimeout(N,o)),n(1,l+=c[b]);return t=!0,Promise.resolve()},f=()=>{clearTimeout(i),n(1,l=""),t=!0};function x(){h?n(0,a=" "):t?n(0,a=a==" "?"| ":" "):n(0,a="| ")}return O(()=>{setInterval(x,y)}),r.$$set=o=>{"text"in o&&n(2,c=o.text),"minDelay"in o&&n(3,u=o.minDelay),"maxDelay"in o&&n(4,m=o.maxDelay),"blinkDelay"in o&&n(5,y=o.blinkDelay),"disableCursor"in o&&n(6,h=o.disableCursor)},[a,l,c,u,m,y,h,s,f]}class V extends A{constructor(e){super(),I(this,e,Q,K,z,{text:2,minDelay:3,maxDelay:4,blinkDelay:5,disableCursor:6,start:7,reset:8})}get start(){return this.$$.ctx[7]}get reset(){return this.$$.ctx[8]}}function W(r){let e,n,t,a="Begin",i,l,c="Reset",u,m,y,h={text:r[1]};return e=new V({props:h}),r[4](e),{c(){E(e.$$.fragment),n=B(),t=g("button"),t.textContent=a,i=B(),l=g("button"),l.textContent=c},l(s){F(e.$$.fragment,s),n=j(s),t=p(s,"BUTTON",{"data-svelte-h":!0}),M(t)!=="svelte-1hjcdh0"&&(t.textContent=a),i=j(s),l=p(s,"BUTTON",{"data-svelte-h":!0}),M(l)!=="svelte-jn3jzs"&&(l.textContent=c)},m(s,f){R(e,s,f),d(s,n,f),d(s,t,f),d(s,i,f),d(s,l,f),u=!0,m||(y=[P(t,"click",r[2]),P(l,"click",r[3])],m=!0)},p(s,[f]){const x={};e.$set(x)},i(s){u||(G(e.$$.fragment,s),u=!0)},o(s){H(e.$$.fragment,s),u=!1},d(s){s&&(_(n),_(t),_(i),_(l)),r[4](null),J(e,s),m=!1,S(y)}}}function X(r,e,n){let t,a=`Dear Benji (or whoever is reading 😊),

if you are seeing this, please shoot me (Marc) a text!

Talk to ya soon :)`;async function i(){await t.start(),console.log("finished")}function l(){t.reset()}function c(u){U[u?"unshift":"push"](()=>{t=u,n(0,t)})}return[t,a,i,l,c]}class $ extends A{constructor(e){super(),I(this,e,X,W,z,{})}}export{$ as component};
