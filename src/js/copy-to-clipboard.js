import { Notify } from "notiflix/build/notiflix-notify-aio";

const notiflixConfig = {
	position: "center-top",
	fontSize: "14px",
	distance: "98px",
	borderRadius: "12px",
	clickToClose: true,
	cssAnimationStyle: "from-top",
};
const elementToCopy = document.querySelector(".banking-details-list");

let notiflixMessage = "Скопійовано";

if (window.location.pathname.includes("/en")) {
	notiflixMessage = "Copied";
}

elementToCopy.addEventListener("click", e => {
	if (e.target.className === "banking-details-item-strong-text") {
		navigator.clipboard.writeText(e.target.innerText);
		Notify.success(
			`${notiflixMessage}: ${e.target.parentElement.innerText}`,
			notiflixConfig,
		);
	}
});
