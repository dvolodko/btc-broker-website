var e,t,n,r,a;t={},n={},null==(r=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree9a2)&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequiree9a2=r),(a=r.register)("cs7FV",function(e,t){let n;let r=document.querySelector(".overlay"),a=document.querySelector(".button-hamburger"),o=document.querySelector(".mobile-menu-container"),i=o.querySelector(".mobile-menu-back-btn"),c=o.querySelector(".mobile-nav-menu"),s=o.querySelector(".mobile-nav-menu-list"),l=document.querySelector("body");function u(e,t){e.classList.toggle(t)}function d(e){e.currentTarget===e.target&&L()}function m(e){"Escape"===e.code&&L()}function v(e){(n=e.target.closest(".mobile-nav-menu-item"))&&(n.classList.add("active"),i.classList.add("active"))}function f(){n&&(n.classList.remove("active"),i.classList.remove("active"))}function L(){r.classList.remove("active"),o.classList.remove("active"),l.classList.remove("no-scroll"),u(a,"active"),a.setAttribute("data-state","closed"),a.setAttribute("aria-expanded","false"),r.removeEventListener("click",d),document.removeEventListener("keydown",m),f(),s.removeEventListener("click",v),i.removeEventListener("click",f)}a.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?L():(r.classList.add("active"),o.classList.add("active"),l.classList.add("no-scroll"),u(a,"active"),a.setAttribute("data-state","opened"),a.setAttribute("aria-expanded","true"),r.addEventListener("click",d),document.addEventListener("keydown",m),s.addEventListener("click",v),i.addEventListener("click",f),c.style.height=c.scrollHeight+"px")}(a)})}),a("1tHxY",function(e,t){document.querySelectorAll(".footer-menu").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}),a("eVdBp",function(e,t){let n=document.querySelector(".overlay"),r=document.querySelector(".header-nav-menu-item-services"),a=r.querySelector(".header-menu-container-services"),o=document.querySelector(".header-nav-menu-item-about-us"),i=o.querySelector(".header-menu-container-about-us");function c(e){n.classList.add("active"),e.classList.add("active")}function s(e){n.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),r.addEventListener("mouseenter",()=>{r.addEventListener("mouseleave",()=>{s(a)}),c(a)}),o.addEventListener("mouseenter",()=>{o.addEventListener("mouseleave",()=>{s(i)}),c(i)})}),a("8u5tz",function(e,t){window.addEventListener("scroll",function(){this.scrollY>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")})}),a("9irX0",function(e,t){document.querySelectorAll("[data-btn='language']").forEach(e=>{if("/"===window.location.pathname)e.attributes.href.value="/en/index";else if(window.location.pathname.includes("/en")){let t=window.location.pathname.replace("/en","");e.attributes.href.value=t}else{let t=`/en${window.location.pathname}`;e.attributes.href.value=t}})}),r("cs7FV"),r("1tHxY"),r("eVdBp"),r("8u5tz"),r("9irX0");
//# sourceMappingURL=mentions-in-media.728dcaa1.js.map
