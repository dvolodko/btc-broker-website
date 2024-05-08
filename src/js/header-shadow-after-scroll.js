window.addEventListener("scroll", onScrollEvent);

function onScrollEvent() {
	const scroll = this.scrollY;
	if (scroll > 10) {
		document.querySelector(".header").classList.add("shadow");
	} else {
		document.querySelector(".header").classList.remove("shadow");
	}
}
