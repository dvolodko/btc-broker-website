!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiree9a2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequiree9a2=r);var o=r.register;o("cs7FV",function(e,t){let n;let r=document.querySelector(".overlay"),o=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),a=c.querySelector(".mobile-menu-back-btn"),i=c.querySelector(".mobile-nav-menu"),s=c.querySelector(".mobile-nav-menu-list"),l=document.querySelector("body");function d(e,t){e.classList.toggle(t)}function u(e){e.currentTarget===e.target&&p()}function m(e){"Escape"===e.code&&p()}function v(e){(n=e.target.closest(".mobile-nav-menu-item"))&&(n.classList.add("active"),a.classList.add("active"))}function f(){n&&(n.classList.remove("active"),a.classList.remove("active"))}function p(){r.classList.remove("active"),c.classList.remove("active"),l.classList.remove("no-scroll"),d(o,"active"),o.setAttribute("data-state","closed"),o.setAttribute("aria-expanded","false"),r.removeEventListener("click",u),document.removeEventListener("keydown",m),f(),s.removeEventListener("click",v),a.removeEventListener("click",f)}o.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?p():(r.classList.add("active"),c.classList.add("active"),l.classList.add("no-scroll"),d(o,"active"),o.setAttribute("data-state","opened"),o.setAttribute("aria-expanded","true"),r.addEventListener("click",u),document.addEventListener("keydown",m),s.addEventListener("click",v),a.addEventListener("click",f),i.style.height=i.scrollHeight+"px")}(o)})}),o("1tHxY",function(e,t){document.querySelectorAll(".footer-menu").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}),o("eVdBp",function(e,t){let n=document.querySelector(".overlay"),r=document.querySelector(".header-nav-menu-item-services"),o=r.querySelector(".header-menu-container-services"),c=document.querySelector(".header-nav-menu-item-about-us"),a=c.querySelector(".header-menu-container-about-us");function i(e){n.classList.add("active"),e.classList.add("active")}function s(e){n.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),r.addEventListener("mouseenter",()=>{r.addEventListener("mouseleave",()=>{s(o)}),i(o)}),c.addEventListener("mouseenter",()=>{c.addEventListener("mouseleave",()=>{s(a)}),i(a)})}),o("8u5tz",function(e,t){window.addEventListener("scroll",function(){this.scrollY>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")})}),o("9irX0",function(e,t){document.querySelectorAll("[data-btn='language']").forEach(e=>{if("/"===window.location.pathname)e.attributes.href.value="/en/index";else if(window.location.pathname.includes("/en")){let t=window.location.pathname.replace("/en","");e.attributes.href.value=t}else{let t=`/en${window.location.pathname}`;e.attributes.href.value=t}})}),r("cs7FV"),r("1tHxY"),r("eVdBp"),r("8u5tz");let c=document.getElementById("pricing-date"),a=document.getElementById("pdf-main"),i=document.getElementById("pdf-main-mobile"),s=document.getElementById("pdf-fallback");a.setAttribute("data","https://btc-broker.com/upload/documents/pricing/pricing-2024-06-10.pdf"),c.addEventListener("change",e=>{a.setAttribute("data",`https://btc-broker.com/upload/documents/pricing/${e.currentTarget.value}.pdf`),i.setAttribute("src",`https://btc-broker.com/web/viewer.html?file=https%3A%2F%2Fbtc-broker.com%2Fupload%2Fdocuments%2Fpricing%2F${e.currentTarget.value}.pdf`),s.setAttribute("src",`https://btc-broker.com/upload/documents/pricing/${e.currentTarget.value}.pdf`)}),r("9irX0")}();
//# sourceMappingURL=pricing.817e99f6.js.map
