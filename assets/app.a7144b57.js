import{u,a3 as c,w as d,K as r,a4 as l,a5 as f,a6 as m,a7 as h,a8 as w,a9 as g,aa as v,ab as y,ac as A,ad as P,H as b,d as C,h as E,l as L,ae as R,af as x,ag as _}from"./chunks/framework.058c99df.js";import{t as s}from"./chunks/theme.418faae0.js";typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));let n;const S={extends:s,Layout:()=>{var a;const e={},{frontmatter:t}=u();return(a=t.value)!=null&&a.layoutClass&&(e.class=t.value.layoutClass),c(s.Layout,e,{})},enhanceApp({app:e,router:t}){typeof window<"u"&&d(()=>t.route.data.relativePath,()=>T(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function T(e){if(e){if(n)return;n=document.createElement("style"),n.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(n)}else{if(!n)return;n.remove(),n=void 0}}function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=p(S),D=C({name:"VitePressApp",setup(){const{site:e}=u();return E(()=>{L(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),x(),_(),o.setup&&o.setup(),()=>c(o.Layout)}});async function H(){const e=j(),t=O();t.provide(f,e);const a=m(e.route);return t.provide(h,a),t.component("Content",w),t.component("ClientOnly",g),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:v}),{app:t,router:e,data:a}}function O(){return y(D)}function j(){let e=r,t;return A(a=>{let i=P(a);return e&&(t=i),(e||t===i)&&(i=i.replace(/\.js$/,".lean.js")),r&&(e=!1),b(()=>import(i),[])},o.NotFound)}r&&H().then(({app:e,router:t,data:a})=>{t.go().then(()=>{l(t.route,a.site),e.mount("#app")})});export{H as createApp};
