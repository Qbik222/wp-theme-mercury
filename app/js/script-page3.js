(()=>{var e={208:()=>{"use strict";function e(e){this.type=e}e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],s=t.dataset.da.trim().split(","),o={};o.element=t,o.parent=t.parentNode,o.destination=document.querySelector(s[0].trim()),o.breakpoint=s[1]?s[1].trim():"767",o.place=s[2]?s[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,s){return Array.prototype.indexOf.call(s,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const s=this.mediaQueries[t],o=String.prototype.split.call(s,","),n=window.matchMedia(o[0]),i=o[1],c=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===i}));n.addListener((function(){e.mediaHandler(n,c)})),this.mediaHandler(n,c)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const s=t[e];s.index=this.indexInParent(s.parent,s.element),this.moveTo(s.place,s.element,s.destination)}else for(let e=0;e<t.length;e++){const s=t[e];s.element.classList.contains(this.daClassname)&&this.moveBack(s.parent,s.element,s.index)}},e.prototype.moveTo=function(e,t,s){t.classList.add(this.daClassname),"last"===e||e>=s.children.length?s.insertAdjacentElement("beforeend",t):"first"!==e?s.children[e].insertAdjacentElement("beforebegin",t):s.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,s){t.classList.remove(this.daClassname),void 0!==e.children[s]?e.children[s].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const s=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(s,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init()},602:()=>{const e=document.querySelector(".header__search-btn"),t=document.querySelector(".header__search-input"),s=document.querySelector(".header__search-image"),o=document.querySelector(".search-dd__filled");window.innerWidth>1024&&e.addEventListener("click",(n=>{t.classList.toggle("_active"),e.classList.toggle("_active"),s.classList.toggle("_active"),o.classList.toggle("_active")}))},307:()=>{const e=document.querySelector("body"),t=document.querySelector(".feedback__form"),s=document.querySelector(".js-check"),o=document.querySelector(".slider"),n=document.querySelector(".js-email"),i=document.querySelectorAll(".js-input"),c=document.querySelectorAll(".feedback__form-select");t.addEventListener("submit",(l=>{l.preventDefault(),emptyInputs=Array.from(i).filter((e=>""===e.value)),emptySelects=Array.from(c).filter((e=>0===e.selectedIndex));let r=t.querySelectorAll(".js-input, .feedback__form-select, .js-email");if(window.innerWidth<=1024)for(let e=0;e<r.length;e++){const t=r[e];if(!t.value){d(t);break}}for(let e=0;e<r.length;e++){const t=r[e];t.value||t.classList.add("_error"),t.value&&t.classList.remove("_error")}s.checked?o.classList.remove("_error"):o.classList.add("_error");let a=n.value;if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase()))return n.classList.add("_error"),!1;function d(e){const t=e.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop)-40;window.scrollTo({top:t,behavior:"smooth"})}if(n.classList.remove("error"),0!==emptyInputs.length||!s.checked||0!==emptySelects.length)return console.log("inputs not filled"),!1;{console.log("go");const t=document.querySelector(".popup-message__info-btn-close"),s=document.querySelector(".popup-message__info-link"),o=document.querySelector(".popup-message");e.classList.add("_lock"),o.classList.remove("_hidden"),o.classList.add("_show"),o.addEventListener("click",(n=>{n.target!==o&&n.target!==s&&n.target!==t||(e.classList.remove("_lock"),o.classList.add("_hidden"))}))}}))},824:()=>{({el:document.querySelector(".footer__btn-top"),show(){this.el.classList.remove("_hidden")},hide(){this.el.classList.add("_hidden")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".footer__btn-top").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()},744:()=>{const e=document.querySelectorAll(".casino-best__item-wrapper"),t=document.querySelector(".casino-best__list");e.forEach((e=>{let s=e.querySelector(".casino-best__item-reviews-btn"),o=e.querySelector(".casino-best__item-reviews");s.addEventListener("click",(()=>{const e=document.querySelectorAll(".casino-best__item-reviews-btn");o.classList.toggle("_show"),s.classList.contains("_openList")?t.classList.remove("_openItem"):t.classList.add("_openItem"),s.classList.toggle("_openList"),e.forEach((e=>{e.classList.contains("_openList")&&t.classList.add("_openItem")}))}))}))},101:()=>{document.querySelectorAll(".casino-slot__item").forEach((e=>{let t=e.querySelector(".casino-slot__item-info"),s=e.querySelector(".casino-slot__item-info-text");t.addEventListener("click",(()=>{s.classList.toggle("_show")}))}))},989:()=>{const e=document.querySelectorAll(".casino-bonus__item-wrapper"),t=document.querySelector(".casino-bonus__list");e.forEach((e=>{let s=e.querySelector(".casino-bonus__item-reviews-btn"),o=e.querySelector(".casino-bonus__item-reviews");s.addEventListener("click",(()=>{const e=document.querySelectorAll(".casino-bonus__item-reviews-btn");o.classList.toggle("_show"),s.classList.contains("_openList")?t.classList.remove("_openItem"):t.classList.add("_openItem"),s.classList.toggle("_openList"),e.forEach((e=>{e.classList.contains("_openList")&&t.classList.add("_openItem")}))}))}))},811:()=>{const e=document.querySelector(".casino-online__tabs-btn-one"),t=document.querySelector(".casino-online__tabs-btn-two"),s=document.querySelector(".casino-online__list-one"),o=document.querySelector(".casino-online__list-two");e.addEventListener("click",(()=>{e.classList.add("_active"),s.classList.remove("_hidden"),t.classList.remove("_active"),o.classList.add("_hidden")})),t.addEventListener("click",(()=>{t.classList.add("_active"),o.classList.remove("_hidden"),e.classList.remove("_active"),s.classList.add("_hidden")}))},523:()=>{if(null!=document.querySelector(".accordion")){class e{constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e,this._config=Object.assign({alwaysOpen:!0,duration:350},t),this.addEventListener()}addEventListener(){this._el.addEventListener("click",(e=>{const t=e.target.closest(".accordion__header");if(t){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item_show");e&&e!==t.parentElement&&this.toggle(e)}this.toggle(t.parentElement)}}))}show(e){const t=e.querySelector(".accordion__body");if(t.classList.contains("collapsing")||e.classList.contains("accordion__item_show"))return;t.style.display="block";const s=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.add("collapsing"),e.classList.add("accordion__item_slidedown"),t.offsetHeight,t.style.height=`${s}px`,window.setTimeout((()=>{t.classList.remove("collapsing"),e.classList.remove("accordion__item_slidedown"),t.classList.add("collapse"),e.classList.add("accordion__item_show"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration)}hide(e){const t=e.querySelector(".accordion__body");!t.classList.contains("collapsing")&&e.classList.contains("accordion__item_show")&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.remove("collapse"),e.classList.remove("accordion__item_show"),t.classList.add("collapsing"),window.setTimeout((()=>{t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration))}toggle(e){e.classList.contains("accordion__item_show")?this.hide(e):this.show(e)}}new e(document.querySelector(".accordion"),{alwaysOpen:!1})}},524:()=>{const e=document.querySelector(".menu__icon"),t=document.querySelector(".header__menu"),s=document.querySelector("body");e.addEventListener("click",(function(o){e.classList.toggle("_active"),t.classList.toggle("_active"),s.classList.toggle("_lock")})),document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector(".sub-menu"),s=e.querySelector(".sub-menu-2"),o=e.querySelector(".sub-menu-3"),n=e.querySelector("a");e.addEventListener("mouseenter",(function(){window.innerWidth>1024&&t&&(t.style.display="block")})),e.addEventListener("mouseleave",(function(){window.innerWidth>1024&&t&&(t.style.display="none")})),n.addEventListener("click",(function(t){if(window.innerWidth<=1024){e.classList.toggle("mobile-active");let i=n.nextElementSibling;null!==i&&t.preventDefault(),null!==i&&i.classList.contains("sub-menu-2")&&s.classList.toggle("_open"),null!==i&&i.classList.contains("sub-menu-3")&&o.classList.toggle("_open")}}))}))},485:()=>{const e=document.querySelectorAll('a[href*="#"]');for(const t of e)t.addEventListener("click",(function(e){e.preventDefault();const s=t.getAttribute("href");document.querySelector(s).scrollIntoView({behavior:"smooth",block:"start"})}))}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(524),s(602),s(824),s(523),s(307),s(485),s(208),s(811),s(744),s(101),s(989)})()})();