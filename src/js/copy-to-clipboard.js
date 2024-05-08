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

elementToCopy.addEventListener("click", e => {
	if (e.target.className === "banking-details-item-strong-text") {
		navigator.clipboard.writeText(e.target.innerText);
		Notify.success(
			`Скопійовано: ${e.target.parentElement.innerText}`,
			notiflixConfig,
		);
	}
});
