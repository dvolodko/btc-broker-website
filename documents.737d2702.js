var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiree9a2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequiree9a2=r);var i=r.register;i("8FnLx",function(e,t){let n;let r=document.querySelector(".overlay"),i=document.querySelector(".button-hamburger"),o=document.querySelector(".mobile-menu-container"),s=o.querySelector(".mobile-menu-back-btn"),c=o.querySelector(".mobile-nav-menu"),a=o.querySelector(".mobile-nav-menu-list"),l=document.querySelector("body");function u(e,t){e.classList.toggle(t)}function d(e){e.currentTarget===e.target&&f()}function v(e){"Escape"===e.code&&f()}function m(e){(n=e.target.closest(".mobile-nav-menu-item"))&&(n.classList.add("active"),s.classList.add("active"))}function L(){n&&(n.classList.remove("active"),s.classList.remove("active"))}function f(){r.classList.remove("active"),o.classList.remove("active"),l.classList.remove("no-scroll"),u(i,"active"),i.setAttribute("data-state","closed"),i.setAttribute("aria-expanded","false"),r.removeEventListener("click",d),document.removeEventListener("keydown",v),L(),a.removeEventListener("click",m),s.removeEventListener("click",L)}i.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?f():(r.classList.add("active"),o.classList.add("active"),l.classList.add("no-scroll"),u(i,"active"),i.setAttribute("data-state","opened"),i.setAttribute("aria-expanded","true"),r.addEventListener("click",d),document.addEventListener("keydown",v),a.addEventListener("click",m),s.addEventListener("click",L),c.style.height=c.scrollHeight+"px")}(i)})}),i("g8iFC",function(e,t){document.querySelectorAll(".footer-menu").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}),i("h0Nss",function(e,t){let n=document.querySelector(".overlay"),r=document.querySelector(".header-nav-menu-item-services"),i=r.querySelector(".header-menu-container-services"),o=document.querySelector(".header-nav-menu-item-about-us"),s=o.querySelector(".header-menu-container-about-us");function c(e){n.classList.add("active"),e.classList.add("active")}function a(e){n.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),r.addEventListener("mouseenter",()=>{r.addEventListener("mouseleave",()=>{a(i)}),c(i)}),o.addEventListener("mouseenter",()=>{o.addEventListener("mouseleave",()=>{a(s)}),c(s)})}),i("igi9M",function(e,t){window.addEventListener("scroll",function(){this.scrollY>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")})}),r("8FnLx"),r("g8iFC"),r("h0Nss"),r("igi9M");
//# sourceMappingURL=documents.737d2702.js.map
