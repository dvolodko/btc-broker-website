import { throttle } from "lodash";
import { save, load, remove } from "./storage";

const STORAGE_KEY = "survey-form-state";

const refs = {
	form: document.querySelector(".form-survey"),
};

const formData = {};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

populateForm();

initialState();

function initialState() {
	const savedFormData = load(STORAGE_KEY);
	if (savedFormData) {
		const keys = Object.keys(savedFormData);
		for (const key of keys) {
			formData[key] = savedFormData[key];
		}
	}
}

function onFormInput(e) {
	formData[e.target.name] = e.target.value;
	save(STORAGE_KEY, formData);
}

function onFormSubmit(e) {
	e.preventDefault();
	for (const inputData of e.target) {
		if (inputData.value) {
			formData[inputData.name] = inputData.value;
		}
	}
	for (const inputDataToLog in formData) {
		console.log(inputDataToLog, ": ", formData[inputDataToLog]);
	}
	e.currentTarget.reset();
	remove(STORAGE_KEY);
	for (const key in formData) {
		delete formData[key];
	}
}

function populateForm() {
	const savedFormData = load(STORAGE_KEY);

	if (savedFormData) {
		const keys = Object.keys(savedFormData);
		for (const key of keys) {
			refs.form[key].value = savedFormData[key];
		}
	}
}
