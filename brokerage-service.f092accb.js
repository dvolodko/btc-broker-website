var e,t,s,i,c;t={},s={},null==(i=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree9a2)&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var c={id:e,exports:{}};return t[e]=c,i.call(c.exports,c,c.exports),c.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequiree9a2=i),(c=i.register)("cs7FV",function(e,t){let s;let i=document.querySelector(".overlay"),c=document.querySelector(".button-hamburger"),a=document.querySelector(".mobile-menu-container"),n=a.querySelector(".mobile-menu-back-btn"),r=a.querySelector(".mobile-nav-menu"),o=a.querySelector(".mobile-nav-menu-list"),l=document.querySelector("body");function d(e,t){e.classList.toggle(t)}function u(e){e.currentTarget===e.target&&f()}function v(e){"Escape"===e.code&&f()}function m(e){(s=e.target.closest(".mobile-nav-menu-item"))&&(s.classList.add("active"),n.classList.add("active"))}function L(){s&&(s.classList.remove("active"),n.classList.remove("active"))}function f(){i.classList.remove("active"),a.classList.remove("active"),l.classList.remove("no-scroll"),d(c,"active"),c.setAttribute("data-state","closed"),c.setAttribute("aria-expanded","false"),i.removeEventListener("click",u),document.removeEventListener("keydown",v),L(),o.removeEventListener("click",m),n.removeEventListener("click",L)}c.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?f():(i.classList.add("active"),a.classList.add("active"),l.classList.add("no-scroll"),d(c,"active"),c.setAttribute("data-state","opened"),c.setAttribute("aria-expanded","true"),i.addEventListener("click",u),document.addEventListener("keydown",v),o.addEventListener("click",m),n.addEventListener("click",L),r.style.height=r.scrollHeight+"px")}(c)})}),c("1tHxY",function(e,t){document.querySelectorAll(".footer-menu").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}),c("eVdBp",function(e,t){let s=document.querySelector(".overlay"),i=document.querySelector(".header-nav-menu-item-services"),c=i.querySelector(".header-menu-container-services"),a=document.querySelector(".header-nav-menu-item-about-us"),n=a.querySelector(".header-menu-container-about-us");function r(e){s.classList.add("active"),e.classList.add("active")}function o(e){s.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),i.addEventListener("mouseenter",()=>{i.addEventListener("mouseleave",()=>{o(c)}),r(c)}),a.addEventListener("mouseenter",()=>{a.addEventListener("mouseleave",()=>{o(n)}),r(n)})}),c("8u5tz",function(e,t){window.addEventListener("scroll",function(){this.scrollY>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")})}),c("3UeJB",function(e,t){let s=document.querySelector(".tabs-list"),i=document.querySelectorAll(".tab-content");s.addEventListener("click",e=>{let t=e.target.closest(".tabs-button"),c=s.querySelector(".active");t&&(t.classList.contains("active")||function(e,t){let s=e.dataset.option;switch(t.classList.remove("active"),s){case"first":e.classList.add("active"),i[0].classList.add("visible"),i[1].classList.remove("visible"),i[2]&&i[2].classList.remove("visible");break;case"second":e.classList.add("active"),i[0].classList.remove("visible"),i[1].classList.add("visible"),i[2]&&i[2].classList.remove("visible");break;case"third":e.classList.add("active"),i[0].classList.remove("visible"),i[1].classList.remove("visible"),i[2].classList.add("visible");break;default:console.log("error -- default case")}}(t,c))})}),i("cs7FV"),i("1tHxY"),i("eVdBp"),i("8u5tz"),i("3UeJB");
//# sourceMappingURL=brokerage-service.f092accb.js.map
