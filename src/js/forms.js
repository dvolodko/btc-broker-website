// const form = document.querySelector(".form-survey");
// const inputs = form.querySelectorAll("[name]");
// const namesArray = [];
// inputs.forEach(node => {
// 	namesArray.push(node.name);
// });
// const filteredArrayNames = namesArray.filter(
// 	(element, index, array) => array.indexOf(element) === index,
// );
// console.log(filteredArrayNames);

// Прихований блок інпутів про Політично значущу особу

const PEPelement = document.querySelector('[aria-labelledby="isPEP"]');
const PEPTrueElement = document.getElementById("isPEPtrue");
const PEPHiddenInputWrapper = PEPelement.querySelector(
	".hidden-inputs-wrapper",
);
const PEPLevelRadioGroup = document.querySelector(
	'[data-expandable-area="PEPLevel"]',
);
const PEPNameAndCountryHiddenInputs = PEPelement.querySelector(
	'[data-expandable-area="PEPNameAndCountry"]',
);
const PEPPositionAndTermsHiddenInputs = PEPelement.querySelector(
	'[data-expandable-area="PEPPositionAndTerms"]',
);
const PEPFileHiddenInputs = PEPelement.querySelector(
	'[data-expandable-area="PEPFile"]',
);
const PEPRelationsWithHiddenInputs = PEPelement.querySelector(
	'[data-expandable-area="PEPRelationsWith"]',
);

if (PEPTrueElement.checked) {
	toExpand(PEPHiddenInputWrapper);
}

PEPelement.addEventListener("click", () => {
	if (PEPTrueElement.checked) {
		toExpand(PEPHiddenInputWrapper);
	} else {
		toCollapse(PEPHiddenInputWrapper);
		toCollapse(PEPNameAndCountryHiddenInputs);
		toCollapse(PEPPositionAndTermsHiddenInputs);
		toCollapse(PEPFileHiddenInputs);
		toCollapse(PEPRelationsWithHiddenInputs);
		const PEPLevelRadioChecked = PEPLevelRadioGroup.querySelector(
			".form-input-radio:checked",
		);
		if (!PEPLevelRadioChecked) {
			return;
		} else {
			PEPLevelRadioChecked.checked = false;
		}
	}
});

// Динамічні поля в залежності від рівня спорідненності PEP

const isPEPLevelPEPItIs = document.getElementById("isPEPItIs");
const isPEPLevelPEPFamily = document.getElementById("isPEPFamily");
const isPEPLevelRelatedToPEP = document.getElementById("isRelatedToPEP");

if (isPEPLevelPEPItIs.checked) {
	toExpand(PEPFileHiddenInputs);
	toExpand(PEPPositionAndTermsHiddenInputs);
}

if (isPEPLevelPEPFamily.checked) {
	toExpand(PEPNameAndCountryHiddenInputs);
	toExpand(PEPPositionAndTermsHiddenInputs);
}

if (isPEPLevelRelatedToPEP.checked) {
	toExpand(PEPNameAndCountryHiddenInputs);
	toExpand(PEPRelationsWithHiddenInputs);
	toExpand(PEPPositionAndTermsHiddenInputs);
}

PEPLevelRadioGroup.addEventListener("click", e => dynamicInputsForPEPLevel(e));

function dynamicInputsForPEPLevel(e) {
	{
		const checkedRadio = e.target.closest(".form-input-radio:checked");
		if (!checkedRadio) return;
		switch (checkedRadio.value) {
			case "I am PEP":
				toExpand(PEPFileHiddenInputs);
				toCollapse(PEPNameAndCountryHiddenInputs);
				toCollapse(PEPRelationsWithHiddenInputs);
				break;

			case "member of family of PEP":
				toExpand(PEPNameAndCountryHiddenInputs);
				toCollapse(PEPFileHiddenInputs);
				toCollapse(PEPRelationsWithHiddenInputs);
				break;

			case "other relation to PEP":
				toExpand(PEPNameAndCountryHiddenInputs);
				toExpand(PEPRelationsWithHiddenInputs);
				toCollapse(PEPFileHiddenInputs);
				break;

			default:
				return;
		}
		toExpand(PEPPositionAndTermsHiddenInputs);
	}
}

// Поведінка прихованих полів адреси фактичного місця проживання

const livingAddressElement = document.querySelector(
	'[aria-labelledby="livingAddress"]',
);
const liveAtAnotherAddressCheckbox = document.getElementById(
	"liveAtAnotherAddress",
);
const livingCountryInput = document.getElementById("livingCountry");
const livingPostalCodeInput = document.getElementById("livingPostalCode");
const livingRegionLabel = livingAddressElement.querySelector(
	'[for="livingRegion"]',
);
const livingRegionInput = document.getElementById("livingRegion");
const livingAreaInput = document.getElementById("livingArea");
const livingCityLabel =
	livingAddressElement.querySelector('[for="livingCity"]');
const livingCityInput = document.getElementById("livingCity");
const livingStreetLabel = livingAddressElement.querySelector(
	'[for="livingStreet"]',
);
const livingStreetInput = document.getElementById("livingStreet");
const livingBuildingLabel = livingAddressElement.querySelector(
	'[for="livingBuilding"]',
);
const livingBuildingInput = document.getElementById("livingBuilding");
const livingApartmentInput = document.getElementById("livingApartment");

livingAtAnotherAddressCheckboxHandler();

liveAtAnotherAddressCheckbox.addEventListener(
	"click",
	livingAtAnotherAddressCheckboxHandler,
);

function livingAtAnotherAddressCheckboxHandler() {
	if (liveAtAnotherAddressCheckbox.checked) {
		toExpand(livingAddressElement);
		toAddRequired(livingRegionLabel, livingRegionInput);
		toAddRequired(livingCityLabel, livingCityInput);
		toAddRequired(livingStreetLabel, livingStreetInput);
		toAddRequired(livingBuildingLabel, livingBuildingInput);
	} else {
		toCollapse(livingAddressElement);
		livingCountryInput.value = "UA";
		livingPostalCodeInput.value = "";
		toRemoveRequiredAndClean(livingRegionLabel, livingRegionInput);
		livingAreaInput.value = "";
		toRemoveRequiredAndClean(livingCityLabel, livingCityInput);
		toRemoveRequiredAndClean(livingStreetLabel, livingStreetInput);
		toRemoveRequiredAndClean(livingBuildingLabel, livingBuildingInput);
		livingApartmentInput.value = "";
	}
}

// Прихований інпут для завантаження файлу якщо клієнт ВПО

const VPOFileHiddenInputs = document.querySelector(
	'[data-expandable-area="VPOFile"]',
);
const isVPOCheckbox = document.getElementById("isVPO");
const VPOFileLabel = VPOFileHiddenInputs.querySelector('[for="VPOFile"]');
const VPOFileInput = document.getElementById("VPOFile");

isVPOHandler();

isVPOCheckbox.addEventListener("click", isVPOHandler);

function isVPOHandler() {
	if (isVPOCheckbox.checked) {
		toExpand(VPOFileHiddenInputs);
		toAddRequired(VPOFileLabel, VPOFileInput);
	} else {
		toCollapse(VPOFileHiddenInputs);
		toRemoveRequiredAndClean(VPOFileLabel, VPOFileInput);
	}
}

// Дізейбл полів про ІПН у разі позначки про відмову від ІПН

const IPNElement = document.querySelector(".taxID-disable");
const taxIDLabel = IPNElement.querySelector(".taxID-label");
const taxIDInput = IPNElement.querySelector(".taxID-input");
const IPNFileLabel = IPNElement.querySelector(".IPN-file-label");
const IPNFileInput = IPNElement.querySelector(".IPN-file-input");
const nonIPNCheckbox = document.getElementById("nonIPN");

nonIPNCheckbox.addEventListener("click", () => {
	if (nonIPNCheckbox.checked) {
		toRemoveRequiredAndClean(taxIDLabel, taxIDInput);
		toRemoveRequiredAndClean(IPNFileLabel, IPNFileInput);
		taxIDInput.setAttribute("disabled", true);
		IPNFileInput.setAttribute("disabled", true);
	} else {
		toAddRequired(taxIDLabel, taxIDInput);
		toAddRequired(IPNFileLabel, IPNFileInput);
		taxIDInput.removeAttribute("disabled");
		IPNFileInput.removeAttribute("disabled");
	}
});

// Приховані інпути про податкове резиденство Сполучених Штатів

const taxResidenceElement = document.querySelector(
	'[aria-labelledby="tax-residence"]',
);
const taxResidenceHiddenInputsWrapper = taxResidenceElement.querySelector(
	".hidden-inputs-wrapper",
);
const USTaxResidentInput = document.getElementById("isUSTaxResidence");
const nonUkraineTaxResidentInput = document.getElementById(
	"isNonUkraineTaxResidence",
);
const countryUkraine = taxResidenceElement.querySelector('[value="UA"]');
const countryUS = taxResidenceElement.querySelector('[value="US"]');
const countryDummy = taxResidenceElement.querySelector('[value="00"]');

USTaxResidentInput.addEventListener("click", () => {
	if (nonUkraineTaxResidentInput.checked) {
		return;
	} else if (USTaxResidentInput.checked) {
		toExpand(taxResidenceHiddenInputsWrapper);
		countryUkraine.removeAttribute("selected");
		countryUS.setAttribute("selected", true);
	} else {
		toCollapse(taxResidenceHiddenInputsWrapper);
		countryUkraine.setAttribute("selected", true);
		countryUS.removeAttribute("selected");
	}
});

nonUkraineTaxResidentInput.addEventListener("click", () => {
	if (USTaxResidentInput.checked) {
		return;
	} else if (nonUkraineTaxResidentInput.checked) {
		toExpand(taxResidenceHiddenInputsWrapper);
		countryUkraine.removeAttribute("selected");
		countryDummy.setAttribute("selected", true);
	} else {
		toCollapse(taxResidenceHiddenInputsWrapper);
		countryUkraine.setAttribute("selected", true);
		countryDummy.removeAttribute("selected");
	}
});

// Динамічні інпути в залежності від документу, що посвідчує особу

const citizenshipElement = document.querySelector(
	'[aria-labelledby="citizenship"]',
);
const citizenshipRadioGroup =
	citizenshipElement.querySelector(".form-group-radio");
const passportTypeIDCard = document.getElementById("is-passport-type-id-card");
const passportTypePassport = document.getElementById(
	"is-passport-type-passport",
);
const passportTypeForeignPassport = document.getElementById(
	"is-passport-type-foreign-passport",
);
const passportTypeOther = document.getElementById("is-passport-type-other");
const citizenshipHiddenInputsWrapper = citizenshipElement.querySelector(
	".hidden-inputs-wrapper",
);
const passportNameInput = citizenshipElement.querySelector(
	".passport-name-wrapper",
);
const passportCodeInputWrapper = citizenshipElement.querySelector(
	".passport-code-wrapper",
);
const passportDateExpiredInput = citizenshipElement.querySelector(
	".passport-date-expired-wrapper",
);
const passportIssuedInput = document.getElementById("passportIssued");
const passportNumberInput = document.getElementById("passportNumber");
const passportCodeInput = document.getElementById("passportCode");

if (passportTypeIDCard.checked) {
	toExpandIDCard();
	toExpand(citizenshipHiddenInputsWrapper);
}

if (passportTypePassport.checked) {
	toExpandPassport();
	toExpand(citizenshipHiddenInputsWrapper);
}

if (passportTypeForeignPassport.checked) {
	toExpandForeignPassport();
	toExpand(citizenshipHiddenInputsWrapper);
}

if (passportTypeOther.checked) {
	toExpandOther();
	toExpand(citizenshipHiddenInputsWrapper);
}

citizenshipRadioGroup.addEventListener("click", e =>
	dynamicInputsForPassportType(e),
);

function dynamicInputsForPassportType(e) {
	{
		const checkedRadio = e.target.closest(".form-input-radio:checked");
		if (!checkedRadio) return;
		switch (checkedRadio.value) {
			case "ID card":
				toExpandIDCard();
				break;

			case "passport":
				toExpandPassport();
				break;

			case "foreign passport":
				toExpandForeignPassport();
				break;

			case "other":
				toExpandOther();
				break;

			default:
				return;
		}
		toExpand(citizenshipHiddenInputsWrapper);
	}
}

function toExpandIDCard() {
	toShow(passportDateExpiredInput);
	toHide(passportNameInput);
	toHide(passportCodeInputWrapper);
	toChangeAttributes(passportNumberInput, "9", "9", "[0-9]{9}", "012345678");
	toChangeAttributes(passportIssuedInput, "4", "4", "[0-9]{4}", "0123");
}

function toExpandPassport() {
	toShow(passportCodeInputWrapper);
	toHide(passportNameInput);
	toHide(passportDateExpiredInput);
	toChangeAttributes(passportCodeInput, "2", "2", "", "АА");
	toChangeAttributes(passportNumberInput, "6", "6", "[0-9]{6}", "012345");
	toChangeAttributes(
		passportIssuedInput,
		"2",
		"50",
		"",
		"Голосіївським РУ ГМВС України в місті Києві",
	);
}

function toExpandForeignPassport() {
	toShow(passportCodeInputWrapper);
	toShow(passportDateExpiredInput);
	toHide(passportNameInput);
	toChangeAttributes(passportCodeInput, "2", "2", "", "АА");
	toChangeAttributes(passportNumberInput, "6", "6", "[0-9]{6}", "012345");
	toChangeAttributes(passportIssuedInput, "4", "4", "[0-9]{4}", "0123");
}

function toExpandOther() {
	toShow(passportCodeInputWrapper);
	toShow(passportDateExpiredInput);
	toShow(passportNameInput);
	toChangeAttributes(passportCodeInput, "2", "16", "", "AA");
	toChangeAttributes(passportNumberInput, "2", "16", "[0-9]{2,16}", "012345");
	toChangeAttributes(passportIssuedInput, "2", "50", "", "0123");
}

// Утилітки

function toShow(inputToShow) {
	inputToShow.classList.remove("hidden");
	toExpand(inputToShow);
}

function toHide(inputToHide) {
	inputToHide.classList.add("hidden");
	inputToHide.children[1].removeAttribute("required");
	toCollapse(inputToHide);
}

function toChangeAttributes(
	inputToChange,
	minLength,
	maxLength,
	pattern,
	placeholder,
) {
	inputToChange.setAttribute("minlength", minLength);
	inputToChange.setAttribute("maxlength", maxLength);
	if (!pattern) {
		inputToChange.removeAttribute("pattern");
	} else {
		inputToChange.setAttribute("pattern", pattern);
	}
	inputToChange.setAttribute("placeholder", placeholder);
}

function toExpand(area) {
	area.style.maxHeight = area.scrollHeight + "px";
}

function toCollapse(area) {
	area.style.maxHeight = null;
}

function toAddRequired(label, input) {
	label.classList.add("required");
	input.setAttribute("required", true);
}

function toRemoveRequiredAndClean(label, input) {
	label.classList.remove("required");
	input.removeAttribute("required");
	input.value = "";
}
