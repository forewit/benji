import{s as w,c as b,u as E,g as S,d as j,o as q}from"../chunks/scheduler.e108d1fd.js";import{S as M,i as O,g as p,s as T,x as k,h as f,f as u,c as D,j as v,k as _,l as d,y,a as g,d as I,t as L}from"../chunks/index.51022a98.js";const V=!0,P=Object.freeze(Object.defineProperty({__proto__:null,prerender:V},Symbol.toStringTag,{value:"Module"}));function $(l){let o,i,t,r,a;const c=l[4].default,s=b(c,l,l[3],null);return{c(){o=p("meta"),i=T(),t=p("div"),r=p("div"),s&&s.c(),this.h()},l(e){const n=k("svelte-1xk05yi",document.head);o=f(n,"META",{name:!0,content:!0}),n.forEach(u),i=D(e),t=f(e,"DIV",{id:!0,style:!0,class:!0});var h=v(t);r=f(h,"DIV",{id:!0,class:!0});var m=v(r);s&&s.l(m),m.forEach(u),h.forEach(u),this.h()},h(){_(o,"name","viewport"),_(o,"content","width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"),_(r,"id","content"),_(r,"class","svelte-pqretw"),_(t,"id","container"),d(t,"--notch-left",l[0]),d(t,"--notch-right",l[1]),d(t,"--notch-top",l[2]),_(t,"class","svelte-pqretw")},m(e,n){y(document.head,o),g(e,i,n),g(e,t,n),y(t,r),s&&s.m(r,null),a=!0},p(e,[n]){s&&s.p&&(!a||n&8)&&E(s,c,e,e[3],a?j(c,e[3],n,null):S(e[3]),null),(!a||n&1)&&d(t,"--notch-left",e[0]),(!a||n&2)&&d(t,"--notch-right",e[1]),(!a||n&4)&&d(t,"--notch-top",e[2])},i(e){a||(I(s,e),a=!0)},o(e){L(s,e),a=!1},d(e){e&&(u(i),u(t)),u(o),s&&s.d(e)}}}function z(l,o,i){let{$$slots:t={},$$scope:r}=o,a=0,c=0,s=0;function e(){i(0,a=screen.orientation.type=="landscape-primary"?1:0),i(1,c=screen.orientation.type=="landscape-secondary"?1:0),i(2,s=screen.orientation.type=="portrait-primary"?1:0)}return q(()=>{screen.orientation.onchange=e,e()}),l.$$set=n=>{"$$scope"in n&&i(3,r=n.$$scope)},[a,c,s,r,t]}class R extends M{constructor(o){super(),O(this,o,z,$,w,{})}}export{R as component,P as universal};
