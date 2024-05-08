const productsButtonsList = document.querySelector(".products-buttons-list");
const productsDescriptionList = document.querySelectorAll(
	".products-description-container",
);

productsButtonsList.addEventListener("click", e => {
	const buttonToActivate = e.target.closest(".products-button");
	const activeButton = findActiveButton();
	if (!buttonToActivate) return;
	if (buttonToActivate.classList.contains("active")) return;
	switchButton(buttonToActivate, activeButton);
});

function switchButton(buttonToActivate, activeButton) {
	const button = buttonToActivate.dataset.option;
	activeButton.classList.remove("active");
	switch (button) {
		case "shares":
			buttonToActivate.classList.add("active");
			productsDescriptionList[0].classList.add("visible");
			productsDescriptionList[1].classList.remove("visible");
			productsDescriptionList[2].classList.remove("visible");
			productsDescriptionList[3].classList.remove("visible");
			scrollIntoViewHelper(productsDescriptionList[0]);
			break;
		case "bonds":
			buttonToActivate.classList.add("active");
			productsDescriptionList[0].classList.remove("visible");
			productsDescriptionList[1].classList.add("visible");
			productsDescriptionList[2].classList.remove("visible");
			productsDescriptionList[3].classList.remove("visible");
			scrollIntoViewHelper(productsDescriptionList[1]);
			break;
		case "depositary":
			buttonToActivate.classList.add("active");
			productsDescriptionList[0].classList.remove("visible");
			productsDescriptionList[1].classList.remove("visible");
			productsDescriptionList[2].classList.add("visible");
			productsDescriptionList[3].classList.remove("visible");
			scrollIntoViewHelper(productsDescriptionList[2]);
			break;
		case "repo":
			buttonToActivate.classList.add("active");
			productsDescriptionList[0].classList.remove("visible");
			productsDescriptionList[1].classList.remove("visible");
			productsDescriptionList[2].classList.remove("visible");
			productsDescriptionList[3].classList.add("visible");
			scrollIntoViewHelper(productsDescriptionList[3]);
			break;
		default:
			console.log("error -- default case");
	}
}

function findActiveButton() {
	const activeButton = productsButtonsList.querySelector(".active");
	return activeButton;
}

function scrollIntoViewHelper(element) {
	const scrollOption = {
		behavior: "smooth",
		block: "end",
	};
	if (!isInViewport(element)) {
		element.scrollIntoView(scrollOption);
	}
}

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return rect.top <= 692;
}

// function isInViewport(element) {
// 	const rect = element.getBoundingClientRect();
// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <=
// 			(window.innerHeight || document.documentElement.clientHeight) &&
// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	);
// }
