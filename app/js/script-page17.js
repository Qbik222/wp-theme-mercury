(()=>{var e={769:()=>{const e=document.querySelector(".footer");window.addEventListener("load",(()=>{if("true"!==localStorage.getItem("cookieStatus")){const t=document.createElement("div");t.classList.add("footer__cookie"),e.append(t);let o="",n="";o="This site uses cookies to save data. By continuing to follow the site, you will be welcome to save cookies",n="Okey";const s='<div class="close-cookie"><span></span> </div>',i='<div class="footer__cookie-img"><img loading="lazy" src="img/general-block-image/footer/cookie.webp" width="40" height="40" alt="image-casino"></div>',c=`<p class="footer__cookie-text">${o}</p><button type="button" aria-label="button-close" class="footer__cookie-btn orange-btn">${n}</button>`;t.innerHTML=s+i+c;const l=t.querySelector(".close-cookie"),r=t.querySelector(".footer__cookie-btn");l.addEventListener("click",(()=>{t.classList.add("_hidden")})),r.addEventListener("click",(()=>{localStorage.setItem("cookieStatus","true"),console.log(localStorage.coockieStatus),t.classList.add("_hidden")}))}}))},824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__menu"),o=document.querySelector(".header__wrap"),n=document.querySelector("body");e.addEventListener("click",(function(s){e.classList.toggle("_active"),t.classList.toggle("_active"),o.classList.toggle("_active"),n.classList.toggle("_lock")})),document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector(".sub-menu"),o=e.querySelector(".sub-menu-2"),n=e.querySelector(".sub-menu-3"),s=e.querySelector("a");e.addEventListener("mouseenter",(function(){window.innerWidth>1024&&t&&(t.style.display="block")})),e.addEventListener("mouseleave",(function(){window.innerWidth>1024&&t&&(t.style.display="none")})),s.addEventListener("click",(function(t){if(window.innerWidth<=1024){e.classList.toggle("mobile-active");let i=s.nextElementSibling;null!==i&&t.preventDefault(),null!==i&&i.classList.contains("sub-menu-2")&&o.classList.toggle("_open"),null!==i&&i.classList.contains("sub-menu-3")&&n.classList.toggle("_open")}}))}))}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(524),o(769),o(824)})()})();