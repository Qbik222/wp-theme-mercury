(()=>{var e={769:()=>{const e=document.querySelector(".footer");window.addEventListener("load",(()=>{if("true"!==localStorage.getItem("cookieStatus")){const t=document.createElement("div");t.classList.add("footer__cookie"),e.append(t);let o="",s="";o="This site uses cookies to save data. By continuing to follow the site, you will be welcome to save cookies",s="Okey";const c='<div class="close-cookie"><span></span> </div>',n='<div class="footer__cookie-img"><img loading="lazy" src="img/general-block-image/footer/cookie.webp" width="40" height="40" alt="image-casino"></div>',i=`<p class="footer__cookie-text">${o}</p><button type="button" aria-label="button-close" class="footer__cookie-btn orange-btn">${s}</button>`;t.innerHTML=c+n+i;const l=t.querySelector(".close-cookie"),a=t.querySelector(".footer__cookie-btn");l.addEventListener("click",(()=>{t.classList.add("_hidden")})),a.addEventListener("click",(()=>{localStorage.setItem("cookieStatus","true"),console.log(localStorage.coockieStatus),t.classList.add("_hidden")}))}}))},390:()=>{const e=document.querySelector(".header__language-select"),t=document.querySelector(".header__language-en"),o=document.querySelector(".header__language-pt"),s=document.querySelector(".header__language-list"),c=document.querySelector(".header__language");t.addEventListener("click",(()=>{e.classList.remove("_pt"),e.classList.add("_en"),o.classList.remove("_active"),t.classList.add("_active")})),o.addEventListener("click",(()=>{e.classList.add("_pt"),e.classList.remove("_en"),o.classList.add("_active"),t.classList.remove("_active")})),window.innerWidth<=1024&&c.addEventListener("click",(()=>{s.classList.toggle("_open"),c.classList.toggle("_open")}))},824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},593:()=>{const e=document.querySelector(".blog__tabs-btn-one"),t=document.querySelector(".blog__tabs-btn-two"),o=document.querySelector(".blog__list-one"),s=document.querySelector(".blog__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),o.classList.remove("_hidden"),t.classList.remove("_active"),s.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),s.classList.remove("_hidden"),e.classList.remove("_active"),o.classList.add("_hidden")}))},811:()=>{const e=document.querySelector(".casino-online__tabs-btn-one"),t=document.querySelector(".casino-online__tabs-btn-two"),o=document.querySelector(".casino-online__list-one"),s=document.querySelector(".casino-online__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),o.classList.remove("_hidden"),t.classList.remove("_active"),s.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),s.classList.remove("_hidden"),e.classList.remove("_active"),o.classList.add("_hidden")}))},524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__menu"),o=document.querySelector(".header__wrap"),s=document.querySelector("body");e.addEventListener("click",(function(c){e.classList.toggle("_active"),t.classList.toggle("_active"),o.classList.toggle("_active"),s.classList.toggle("_lock")})),document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector(".sub-menu"),o=e.querySelector(".sub-menu-2"),s=e.querySelector(".sub-menu-3"),c=e.querySelector("a");e.addEventListener("mouseenter",(function(){window.innerWidth>1024&&t&&(t.style.display="block")})),e.addEventListener("mouseleave",(function(){window.innerWidth>1024&&t&&(t.style.display="none")})),c.addEventListener("click",(function(t){if(window.innerWidth<=1024){e.classList.toggle("mobile-active");let n=c.nextElementSibling;null!==n&&t.preventDefault(),null!==n&&n.classList.contains("sub-menu-2")&&o.classList.toggle("_open"),null!==n&&n.classList.contains("sub-menu-3")&&s.classList.toggle("_open")}}))}))}},t={};function o(s){var c=t[s];if(void 0!==c)return c.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(524),o(390),o(769),o(824),o(811),o(593)})()})();