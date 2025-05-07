const axios = require("axios").default;
import { Loading } from "notiflix/build/notiflix-loading-aio";

const BONDS_URL = "?asset_type=0";
const EUROBONDS = "?asset_type=2";
const CORPORATE = "?asset_type=3";
let acceptLanguage = "uk";
let noQuotesMessage = "На даний момент котирувань немає";

if (window.location.pathname.includes("/en")) {
	acceptLanguage = "en";
	noQuotesMessage = "At the moment, there are no quotes available";
}

const axiosInstant = axios.create({
	baseURL: "https://bond.ua/landing/asset/",
	timeout: 5000,
	headers: {
		"Accept-Language": acceptLanguage,
	},
});

async function renderBondsQuotesTable() {
	const bondsQuotesContainer = document.querySelector(".bonds-table");
	const bondsQuotesHeader = document.querySelector(".bonds-header");
	const bondsQuotes = await getBondsQuotes(BONDS_URL);
	if (!bondsQuotes) {
		const markupMessage = thereIsNoQuotesMessage();
		bondsQuotesContainer.innerHTML = markupMessage;
		return;
	}
	bondsQuotesHeader.classList.remove("hidden");
	const markup = markupCreator(bondsQuotes);
	bondsQuotesContainer.innerHTML = markup;
}

async function renderEurobondsQuotesTable() {
	const bondsQuotesContainer = document.querySelector(".eurobonds-table");
	const bondsQuotesHeader = document.querySelector(".eurobonds-header");
	const bondsQuotes = await getBondsQuotes(EUROBONDS);
	if (!bondsQuotes) {
		const markupMessage = thereIsNoQuotesMessage();
		bondsQuotesContainer.innerHTML = markupMessage;
		return;
	}
	bondsQuotesHeader.classList.remove("hidden");
	const markup = markupCreatorEurobonds(bondsQuotes);
	bondsQuotesContainer.innerHTML = markup;
}

async function renderCorporateQuotesTable() {
	const bondsQuotesContainer = document.querySelector(".corporate-table");
	const bondsQuotesHeader = document.querySelector(".corporate-header");
	const bondsQuotes = await getBondsQuotes(CORPORATE);
	if (!bondsQuotes) {
		const markupMessage = thereIsNoQuotesMessage();
		bondsQuotesContainer.innerHTML = markupMessage;
		return;
	}
	bondsQuotesHeader.classList.remove("hidden");
	const markup = markupCreator(bondsQuotes);
	bondsQuotesContainer.innerHTML = markup;
}

async function getBondsQuotes(assetType) {
	try {
		Loading.dots({
			svgColor: "#3757be",
			backgroundColor: "#5978a399",
		});
		const response = await axiosInstant.get(`${assetType}`);
		Loading.remove();
		if (response.data.results.length === 0) {
			return false;
		}
		return response.data.results;
	} catch (error) {
		console.log(error);
	}
}

function formatDate(dateString) {
	const parsedDate = Date.parse(dateString);
	const dateObj = new Date(parsedDate);
	let date = dateObj.getDate();
	let month = dateObj.getMonth() + 1;
	const year = dateObj.getFullYear();
	date = date.toString().padStart(2, "0");
	month = month.toString().padStart(2, "0");
	return `${date}.${month}.${year}`;
}

function markupCreator(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="bonds-quote-item">
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Назва</span>
					<p class="bonds-quote-element-text">${quote.title}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">ISIN</span>
					<p class="bonds-quote-element-text">${quote.isin}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Валюта емісії</span>
					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дата погашення</span>
					<p class="bonds-quote-element-text">${maturity_date}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дохідність</span>
					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Продаж (UAH)</span>
					<p class="bonds-quote-element-text">${quote.price}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Купівля (UAH)</span>
					<p class="bonds-quote-element-text">${quote.sell_price}</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

// Нижче закоментована частина для ємейлів
// function markupCreator(quotesArray) {
// 	const markup = quotesArray
// 		.map(quote => {
// 			const maturity_date = formatDate(quote.maturity_date);
// 			return `<li class="bonds-quote-item">
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Назва</span>
// 					<p class="bonds-quote-element-text">${quote.title}</p>
// 				</div>
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">ISIN</span>
// 					<p class="bonds-quote-element-text">${quote.isin}</p>
// 				</div>
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Дата погашення</span>
// 					<p class="bonds-quote-element-text">${maturity_date}</p>
// 				</div>
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Дохідність</span>
// 					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
// 				</div>
// 			</li>`;
// 		})
// 		.join("");
// 	return markup;
// }

function markupCreatorEurobonds(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="bonds-quote-item">
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Назва</span>
					<p class="bonds-quote-element-text">${quote.title}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">ISIN</span>
					<p class="bonds-quote-element-text">${quote.isin}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Валюта емісії</span>
					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дата погашення</span>
					<p class="bonds-quote-element-text">${maturity_date}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дохідність <span class="asterix">**</span></span>
					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Продаж (UAH)</span>
					<p class="bonds-quote-element-text">${quote.price}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Купівля (UAH)</span>
					<p class="bonds-quote-element-text">${quote.sell_price}</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

function thereIsNoQuotesMessage() {
	const markup = `<li class="no-quotes-message">
				<h4 class="bonds-quote-group-title">${noQuotesMessage}</h4>
			</li>`;
	return markup;
}

renderBondsQuotesTable();
renderEurobondsQuotesTable();
renderCorporateQuotesTable();
