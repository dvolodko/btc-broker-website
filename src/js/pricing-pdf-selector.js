const documentDateSelector = document.getElementById("pricing-date");
const pdfViewerMain = document.getElementById("pdf-main");
const pdfViewerMobile = document.getElementById("pdf-main-mobile");
const pdfViewerFallback = document.getElementById("pdf-fallback");

pdfViewerMain.setAttribute(
	"data",
	"https://btc-broker.com/upload/documents/pricing/pricing-2024-12-12.pdf",
);

const dateSelectorHandler = event => {
	pdfViewerMain.setAttribute(
		"data",
		`https://btc-broker.com/upload/documents/pricing/${event.currentTarget.value}.pdf`,
	);
	pdfViewerMobile.setAttribute(
		"src",
		`https://btc-broker.com/web/viewer.html?file=https%3A%2F%2Fbtc-broker.com%2Fupload%2Fdocuments%2Fpricing%2F${event.currentTarget.value}.pdf`,
	);
	pdfViewerFallback.setAttribute(
		"src",
		`https://btc-broker.com/upload/documents/pricing/${event.currentTarget.value}.pdf`,
	);
};

documentDateSelector.addEventListener("change", dateSelectorHandler);
