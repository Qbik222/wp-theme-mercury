(()=>{var e={625:()=>{const e=document.querySelectorAll(".best__item-wrapper"),t=document.querySelector(".best__list");e.forEach((e=>{let s=e.querySelector(".best__item-reviews-btn"),o=e.querySelector(".best__item-reviews");s.addEventListener("click",(()=>{const e=document.querySelectorAll(".best__item-reviews-btn");o.classList.toggle("_show"),s.classList.contains("_openList")?t.classList.remove("_openItem"):t.classList.add("_openItem"),s.classList.toggle("_openList"),e.forEach((e=>{e.classList.contains("_openList")&&t.classList.add("_openItem")}))}))}))},390:()=>{const e=document.querySelector(".header__language-select"),t=document.querySelector(".header__language-en"),s=document.querySelector(".header__language-pt"),o=document.querySelector(".header__language-list"),i=document.querySelector(".header__language");t.addEventListener("click",(()=>{e.classList.remove("_pt"),e.classList.add("_en"),s.classList.remove("_active"),t.classList.add("_active")})),s.addEventListener("click",(()=>{e.classList.add("_pt"),e.classList.remove("_en"),s.classList.add("_active"),t.classList.remove("_active")})),window.innerWidth<=1024&&i.addEventListener("click",(()=>{o.classList.toggle("_open"),i.classList.toggle("_open")}))},824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},811:()=>{const e=document.querySelector(".casino-online__tabs-btn-one"),t=document.querySelector(".casino-online__tabs-btn-two"),s=document.querySelector(".casino-online__list-one"),o=document.querySelector(".casino-online__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),s.classList.remove("_hidden"),t.classList.remove("_active"),o.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),o.classList.remove("_hidden"),e.classList.remove("_active"),s.classList.add("_hidden")}))},523:()=>{if(null!=document.querySelector(".accordion")){class e{constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e,this._config=Object.assign({alwaysOpen:!0,duration:350},t),this.addEventListener()}addEventListener(){this._el.addEventListener("click",(e=>{const t=e.target.closest(".accordion__header");if(t){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item_show");e&&e!==t.parentElement&&this.toggle(e)}this.toggle(t.parentElement)}}))}show(e){const t=e.querySelector(".accordion__body");if(t.classList.contains("collapsing")||e.classList.contains("accordion__item_show"))return;t.style.display="block";const s=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.add("collapsing"),e.classList.add("accordion__item_slidedown"),t.offsetHeight,t.style.height=`${s}px`,window.setTimeout((()=>{t.classList.remove("collapsing"),e.classList.remove("accordion__item_slidedown"),t.classList.add("collapse"),e.classList.add("accordion__item_show"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration)}hide(e){const t=e.querySelector(".accordion__body");!t.classList.contains("collapsing")&&e.classList.contains("accordion__item_show")&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.remove("collapse"),e.classList.remove("accordion__item_show"),t.classList.add("collapsing"),window.setTimeout((()=>{t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration))}toggle(e){e.classList.contains("accordion__item_show")?this.hide(e):this.show(e)}}new e(document.querySelector(".accordion"),{alwaysOpen:!1})}},524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__menu"),s=document.querySelector("body");e.addEventListener("click",(function(o){e.classList.toggle("_active"),t.classList.toggle("_active"),s.classList.toggle("_lock")})),document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector(".sub-menu"),s=e.querySelector(".sub-menu-2"),o=e.querySelector(".sub-menu-3"),i=e.querySelector("a");e.addEventListener("mouseenter",(function(){window.innerWidth>1024&&t&&(t.style.display="block")})),e.addEventListener("mouseleave",(function(){window.innerWidth>1024&&t&&(t.style.display="none")})),i.addEventListener("click",(function(t){if(window.innerWidth<=1024){e.classList.toggle("mobile-active");let n=i.nextElementSibling;null!==n&&t.preventDefault(),null!==n&&n.classList.contains("sub-menu-2")&&s.classList.toggle("_open"),null!==n&&n.classList.contains("sub-menu-3")&&o.classList.toggle("_open")}}))}))}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(524),s(390),s(523),s(824),s(625),s(811)})()})();