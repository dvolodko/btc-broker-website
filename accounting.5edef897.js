var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequiree9a2;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){s[e]=t},e.parcelRequiree9a2=i);var a=i.register;a("8FnLx",function(e,t){let s;let i=document.querySelector(".overlay"),a=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),n=c.querySelector(".mobile-menu-back-btn"),r=c.querySelector(".mobile-nav-menu"),o=c.querySelector(".mobile-nav-menu-list"),l=document.querySelector("body");function d(e,t){e.classList.toggle(t)}function u(e){e.currentTarget===e.target&&f()}function v(e){"Escape"===e.code&&f()}function m(e){(s=e.target.closest(".mobile-nav-menu-item"))&&(s.classList.add("active"),n.classList.add("active"))}function L(){s&&(s.classList.remove("active"),n.classList.remove("active"))}function f(){i.classList.remove("active"),c.classList.remove("active"),l.classList.remove("no-scroll"),d(a,"active"),a.setAttribute("data-state","closed"),a.setAttribute("aria-expanded","false"),i.removeEventListener("click",u),document.removeEventListener("keydown",v),L(),o.removeEventListener("click",m),n.removeEventListener("click",L)}a.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?f():(i.classList.add("active"),c.classList.add("active"),l.classList.add("no-scroll"),d(a,"active"),a.setAttribute("data-state","opened"),a.setAttribute("aria-expanded","true"),i.addEventListener("click",u),document.addEventListener("keydown",v),o.addEventListener("click",m),n.addEventListener("click",L),r.style.height=r.scrollHeight+"px")}(a)})}),a("g8iFC",function(e,t){document.querySelectorAll(".footer-menu").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}),a("h0Nss",function(e,t){let s=document.querySelector(".overlay"),i=document.querySelector(".header-nav-menu-item-services"),a=i.querySelector(".header-menu-container-services"),c=document.querySelector(".header-nav-menu-item-about-us"),n=c.querySelector(".header-menu-container-about-us");function r(e){s.classList.add("active"),e.classList.add("active")}function o(e){s.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),i.addEventListener("mouseenter",()=>{i.addEventListener("mouseleave",()=>{o(a)}),r(a)}),c.addEventListener("mouseenter",()=>{c.addEventListener("mouseleave",()=>{o(n)}),r(n)})}),a("igi9M",function(e,t){window.addEventListener("scroll",function(){this.scrollY>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")})}),a("cm4Gw",function(e,t){let s=document.querySelector(".tabs-list"),i=document.querySelectorAll(".tab-content");s.addEventListener("click",e=>{let t=e.target.closest(".tabs-button"),a=s.querySelector(".active");t&&(t.classList.contains("active")||function(e,t){let s=e.dataset.option;switch(t.classList.remove("active"),s){case"first":e.classList.add("active"),i[0].classList.add("visible"),i[1].classList.remove("visible"),i[2]&&i[2].classList.remove("visible");break;case"second":e.classList.add("active"),i[0].classList.remove("visible"),i[1].classList.add("visible"),i[2]&&i[2].classList.remove("visible");break;case"third":e.classList.add("active"),i[0].classList.remove("visible"),i[1].classList.remove("visible"),i[2].classList.add("visible");break;default:console.log("error -- default case")}}(t,a))})}),i("8FnLx"),i("g8iFC"),i("h0Nss"),i("igi9M"),i("cm4Gw");
//# sourceMappingURL=accounting.5edef897.js.map
