import { Loading } from "notiflix/build/notiflix-loading-aio";

const BONDS_URL = 0;
const EUROBONDS = 1;
const STOCKS = 2;
const CORPORATE = 3;
let noQuotesMessage = "На зараз котирувань немає";
let renderLanguage = "ua";

if (window.location.pathname.includes("/en")) {
	noQuotesMessage = "At the moment, there are no quotes available";
	renderLanguage = "en";
}

async function fetchData(assetType) {
	try {
		const response = await fetch(
			"https://trading.btc-broker.com/uk/api/getAssets",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: assetType,
			},
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
}

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
	const markup =
		renderLanguage === "ua"
			? markupCreator(bondsQuotes)
			: markupCreatorEn(bondsQuotes);
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
	const markup =
		renderLanguage === "ua"
			? markupCreatorEurobonds(bondsQuotes)
			: markupCreatorEurobondsEn(bondsQuotes);
	bondsQuotesContainer.innerHTML = markup;
}

async function renderStocksQuotesTable() {
	const bondsQuotesContainer = document.querySelector(".stocks-table");
	const bondsQuotesHeader = document.querySelector(".stocks-header");
	const bondsQuotes = await getBondsQuotes(STOCKS);
	if (!bondsQuotes) {
		const markupMessage = thereIsNoQuotesMessage();
		bondsQuotesContainer.innerHTML = markupMessage;
		return;
	}
	bondsQuotesHeader.classList.remove("hidden");
	const markup =
		renderLanguage === "ua"
			? markupCreatorStocks(bondsQuotes)
			: markupCreatorStocksEn(bondsQuotes);
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
	const markup =
		renderLanguage === "ua"
			? markupCreatorCorporates(bondsQuotes)
			: markupCreatorCorporatesEn(bondsQuotes);
	bondsQuotesContainer.innerHTML = markup;
}

// This function for BOND.UA

// async function getBondsQuotes(assetType) {
// 	try {
// 		Loading.dots({
// 			svgColor: "#3757be",
// 			backgroundColor: "#5978a399",
// 		});
// 		const response = await axiosInstant.get(`${assetType}`);
// 		Loading.remove();
// 		if (response.data.results.length === 0) {
// 			return false;
// 		}
// 		return response.data.results;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// This function for Cabinet

async function getBondsQuotes(assetType) {
	try {
		Loading.dots({
			svgColor: "#3757be",
			backgroundColor: "#5978a399",
		});
		const response = await fetchData(assetType);
		Loading.remove();
		if (response.results.length === 0) {
			return false;
		}
		return response.results;
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
					<span class="bonds-quote-element-header">Дохідність продажу</span>
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
        <div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дохідність купівлі</span>
					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
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
// 					<span class="bonds-quote-element-header">ISIN</span>
// 					<p class="bonds-quote-element-text">${quote.isin}</p>
// 				</div>
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Валюта емісії</span>
// 					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
// 				</div>
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Дата погашення</span>
// 					<p class="bonds-quote-element-text">${maturity_date}</p>
// 				</div>
// 				<div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Дохідність продажу</span>
// 					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
// 				</div>
//         <div class="bonds-quote-element">
// 					<span class="bonds-quote-element-header">Дохідність купівлі</span>
// 					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
// 				</div>
// 			</li>`;
// 		})
// 		.join("");
// 	return markup;
// }

function markupCreatorEn(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="bonds-quote-item">
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">ISIN</span>
					<p class="bonds-quote-element-text">${quote.isin}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Issue Currency</span>
					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Maturity Date</span>
					<p class="bonds-quote-element-text">${maturity_date}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Yield on Sell</span>
					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Sell Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.price}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Buy Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.sell_price}</p>
				</div>
        <div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Yield on Buy</span>
					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

function markupCreatorEurobonds(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="bonds-quote-item">
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
					<span class="bonds-quote-element-header">Дохідність продажу <span class="asterix">**</span></span>
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
        <div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дохідність купівлі <span class="asterix">**</span></span>
					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

function markupCreatorEurobondsEn(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="bonds-quote-item">
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">ISIN</span>
					<p class="bonds-quote-element-text">${quote.isin}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Issue Currency</span>
					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Maturity Date</span>
					<p class="bonds-quote-element-text">${maturity_date}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Yield on Sell <span class="asterix">**</span></span>
					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Sell Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.price}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Buy Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.sell_price}</p>
				</div>
        <div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Yield on Buy <span class="asterix">**</span></span>
					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

function markupCreatorStocks(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			return `<li class="stocks-quote-item">
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Компанія</span>
					<p class="bonds-quote-element-text">${quote.company}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Біржовий тікер</span>
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

function markupCreatorStocksEn(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			return `<li class="stocks-quote-item">
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Company</span>
					<p class="bonds-quote-element-text">${quote.company}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Symbol</span>
					<p class="bonds-quote-element-text">${quote.title}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">ISIN</span>
					<p class="bonds-quote-element-text">${quote.isin}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Issue Currency</span>
					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Sell Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.price}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Buy Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.sell_price}</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

function markupCreatorCorporates(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="corporates-quote-item">
      	<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Компанія</span>
					<p class="bonds-quote-element-text">${quote.company}</p>
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
					<span class="bonds-quote-element-header">Дохідність продажу</span>
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
        <div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Дохідність купівлі</span>
					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
				</div>
			</li>`;
		})
		.join("");
	return markup;
}

function markupCreatorCorporatesEn(quotesArray) {
	const markup = quotesArray
		.map(quote => {
			const maturity_date = formatDate(quote.maturity_date);
			return `<li class="corporates-quote-item">
      	<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Компанія</span>
					<p class="bonds-quote-element-text">${quote.company}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">ISIN</span>
					<p class="bonds-quote-element-text">${quote.isin}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Issue Currency</span>
					<p class="bonds-quote-element-text">${quote.currency_detail}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Maturity Date</span>
					<p class="bonds-quote-element-text">${maturity_date}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Yield on Sell</span>
					<p class="bonds-quote-element-text">${quote.annual_rate}%</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Sell Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.price}</p>
				</div>
				<div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Buy Price (UAH)</span>
					<p class="bonds-quote-element-text">${quote.sell_price}</p>
				</div>
        <div class="bonds-quote-element">
					<span class="bonds-quote-element-header">Yield on Buy</span>
					<p class="bonds-quote-element-text">${quote.sell_annual_rate}%</p>
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
renderStocksQuotesTable();
renderCorporateQuotesTable();
