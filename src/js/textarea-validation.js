const invalid = { pattern: "a", value: "b" };
const textarea = Object.assign(document.createElement("textarea"), invalid);

if (textarea.checkValidity()) {
	const input = Object.assign(document.createElement("input"), invalid);

	document.body.addEventListener("input", e => {
		if (e.target.matches("textarea[pattern]")) {
			const pattern = new RegExp(`^(?:${e.target.getAttribute("pattern")})$`);

			e.target.setCustomValidity(
				pattern.test(e.target.value) ? "" : input.validationMessage,
			);
		}
	});
}

// submit button disabled status handler

const contactUsForm = document.querySelector(".form-contact-us");
const contactUsSubmitButton = contactUsForm.querySelector(
	".form-submit-button",
);

contactUsForm.addEventListener("input", onInputValidation);

function onInputValidation(e) {
	const currentTarget = e.currentTarget;
	setTimeout(() => {
		if (currentTarget.checkValidity()) {
			contactUsSubmitButton.removeAttribute("disabled");
			contactUsSubmitButton.removeAttribute("aria-disabled");
		} else {
			contactUsSubmitButton.setAttribute("disabled", true);
			contactUsSubmitButton.setAttribute("aria-disabled", true);
		}
	}, 0);
}
