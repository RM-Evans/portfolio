import{o,c as r,p as g,a as k,b as a,d as l,F as d,r as E,e as f,f as y,t as u,g as x,u as h,I as m,h as $,i as b,j as D,k as S}from"./vendor.0a8d706b.js";const I=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}};I();var _=(e,n)=>{const c=e.__vccOpts||e;for(const[i,t]of n)c[i]=t;return c};const N={},w=e=>(g("data-v-1f63a33d"),e=e(),k(),e),A={class:"nav-bar"},B=w(()=>a("h2",{id:"header-icon"},"Michael Evans",-1)),F=[B];function H(e,n){return o(),r("header",A,F)}var L=_(N,[["render",H],["__scopeId","data-v-1f63a33d"]]);const R={setup(e){return(n,c)=>{const i=E("router-view");return o(),r(d,null,[l(L),l(i)],64)}}};const M={class:"resume-items"},O={class:"resume-date"},J={setup(e){const n=f([{resumeEntryDate:"Jan 2021 - July 2021",resumeEntryDetails:"Attended University of Utah Full Stack Web Development Bootcamp."},{resumeEntryDate:"Jan 2021 - Nov 2021",resumeEntryDetails:"Participated in a private mentorship."},{resumeEntryDate:"July 2021 - Nov 2021",resumeEntryDetails:"Developed React Native mobile application prototype for client, with mentorship guidance."},{resumeEntryDate:"Sept 2021 - Mar 2022",resumeEntryDetails:"Frontend Developer and UI Designer at Everra."}]);return(c,i)=>(o(!0),r(d,null,y(n.value,t=>(o(),r("li",M,[a("span",O,u(t.resumeEntryDate)+": ",1),x(" "+u(t.resumeEntryDetails),1)]))),256))}};var P=_(J,[["__scopeId","data-v-d8a844a0"]]);const V=e=>(g("data-v-7949dc67"),e=e(),k(),e),T={id:"experience-block"},U=V(()=>a("h2",null,"Experience",-1)),j={setup(e){return(n,c)=>(o(),r("div",T,[U,l(P)]))}};var C=_(j,[["__scopeId","data-v-7949dc67"]]);const p=e=>(g("data-v-4f3145c7"),e=e(),k(),e),W={id:"skills-block"},q=p(()=>a("h2",null,"Skills and Proficiencies",-1)),G={class:"skill-list"},K=p(()=>a("h3",null,"Core",-1)),z=p(()=>a("span",{class:"list-style"},null,-1)),Q={class:"skill-list"},X=p(()=>a("h3",null,"Frameworks",-1)),Y={setup(e){const n=f([{skill:"Javascript"},{skill:"HTML"},{skill:"CSS"}]),c=f([{skill:"Vue"},{skill:"Nuxt"},{skill:"React"},{skill:"React Native"},{skill:"Node.js"},{skill:"Tailwind"}]);return(i,t)=>(o(),r("div",W,[q,a("ul",G,[K,(o(!0),r(d,null,y(n.value,s=>(o(),r("li",null,[z,x(u(s.skill),1)]))),256))]),a("ul",Q,[X,(o(!0),r(d,null,y(c.value,s=>(o(),r("li",null,u(s.skill),1))),256))])]))}};var Z=_(Y,[["__scopeId","data-v-4f3145c7"]]);const ee={class:"landing"},te={id:"landing-intro"},se=$('<h2 id="landing-greeting" data-v-3ee75acc>Hello!</h2><h2 id="landing-name" data-v-3ee75acc>I&#39;m Michael Evans</h2><h2 class="landing-skill" data-v-3ee75acc>I am a <span class="semibold-text" data-v-3ee75acc>Front End Developer</span> and <span class="semibold-text" data-v-3ee75acc>Designer</span></h2>',3),ae={id:"social-icon-container"},ne={class:"social-icon",href:"https://linkedin.com/in/richard-michael-evans"},oe={class:"social-icon",href:"https://github.com/RM-Evans"},re={class:"social-icon",href:"https://www.instagram.com/michaelucky13/"},ce={setup(e){return(n,c)=>(o(),r(d,null,[a("div",ee,[a("div",te,[se,a("div",ae,[a("a",ne,[l(h(m),{icon:"jam:linkedin-square"})]),a("a",oe,[l(h(m),{icon:"foundation:social-github"})]),a("a",re,[l(h(m),{icon:"akar-icons:instagram-fill"})])])])]),l(Z),l(C)],64))}};var ie=_(ce,[["__scopeId","data-v-3ee75acc"]]);const le={};function _e(e,n){return o(),r("p",null,"ABOUT PAGE")}var de=_(le,[["render",_e]]);const ue=b({history:D(),routes:[{path:"/",name:"Home",component:ie},{path:"/about",name:"About",component:de}]});S(R).use(ue).mount("#app");
