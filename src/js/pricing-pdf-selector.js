const documentDateSelector = document.getElementById("pricing-date");
const pdfViewerMain = document.getElementById("pdf-main");
const pdfViewerMobile = document.getElementById("pdf-main-mobile");
const pdfViewerFallback = document.getElementById("pdf-fallback");

pdfViewerMain.setAttribute(
	"data",
	"https://btc-broker.com/upload/documents/pricing/2023/pricing-2023-09-01.pdf",
);

const dateSelectorHandler = event => {
	pdfViewerMain.setAttribute(
		"data",
		`https://btc-broker.com/upload/documents/pricing/2023/${event.currentTarget.value}.pdf`,
	);
	pdfViewerMobile.setAttribute(
		"src",
		`https://btc-broker.com/web/viewer.html?file=https%3A%2F%2Fbtc-broker.com%2Fupload%2Fdocuments%2Fpricing%2F2023%2F${event.currentTarget.value}.pdf`,
	);
	pdfViewerFallback.setAttribute(
		"src",
		`https://btc-broker.com/upload/documents/pricing/2023/${event.currentTarget.value}.pdf`,
	);
};

documentDateSelector.addEventListener("change", dateSelectorHandler);
