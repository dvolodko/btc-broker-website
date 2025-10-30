const tabsList = document.querySelector(".tabs-list");
const tabsContent = document.querySelectorAll(".tab-content");

tabsList.addEventListener("click", e => {
	const tabToActivate = e.target.closest(".tabs-button");
	const activeTab = findActiveTab();
	if (!tabToActivate) return;
	if (tabToActivate.classList.contains("active")) return;
	switchTab(tabToActivate, activeTab);
});

function switchTab(tabToActivate, activeTab) {
	const tab = tabToActivate.dataset.option;
	activeTab.classList.remove("active");
	switch (tab) {
		case "first":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.add("visible");
			tabsContent[1].classList.remove("visible");
			// На різних сторінках використовується різна кількість вкладок, тому потрібна перевірка
			if (tabsContent[2]) {
				tabsContent[2].classList.remove("visible");
			}
			if (tabsContent[3]) {
				tabsContent[3].classList.remove("visible");
			}
			if (tabsContent[4]) {
				tabsContent[4].classList.remove("visible");
			}
			if (tabsContent[5]) {
				tabsContent[5].classList.remove("visible");
			}
			if (tabsContent[6]) {
				tabsContent[6].classList.remove("visible");
			}
			break;
		case "second":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.add("visible");
			if (tabsContent[2]) {
				tabsContent[2].classList.remove("visible");
			}
			if (tabsContent[3]) {
				tabsContent[3].classList.remove("visible");
			}
			if (tabsContent[4]) {
				tabsContent[4].classList.remove("visible");
			}
			if (tabsContent[5]) {
				tabsContent[5].classList.remove("visible");
			}
			if (tabsContent[6]) {
				tabsContent[6].classList.remove("visible");
			}
			break;
		case "third":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.remove("visible");
			tabsContent[2].classList.add("visible");
			if (tabsContent[3]) {
				tabsContent[3].classList.remove("visible");
			}
			if (tabsContent[4]) {
				tabsContent[4].classList.remove("visible");
			}
			if (tabsContent[5]) {
				tabsContent[5].classList.remove("visible");
			}
			if (tabsContent[6]) {
				tabsContent[6].classList.remove("visible");
			}
			break;
		case "fourth":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.remove("visible");
			tabsContent[2].classList.remove("visible");
			tabsContent[3].classList.add("visible");
			if (tabsContent[4]) {
				tabsContent[4].classList.remove("visible");
			}
			if (tabsContent[5]) {
				tabsContent[5].classList.remove("visible");
			}
			if (tabsContent[6]) {
				tabsContent[6].classList.remove("visible");
			}
			break;
		case "fifth":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.remove("visible");
			tabsContent[2].classList.remove("visible");
			tabsContent[3].classList.remove("visible");
			tabsContent[4].classList.add("visible");
			if (tabsContent[5]) {
				tabsContent[5].classList.remove("visible");
			}
			if (tabsContent[6]) {
				tabsContent[6].classList.remove("visible");
			}
			break;
		case "sixth":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.remove("visible");
			tabsContent[2].classList.remove("visible");
			tabsContent[3].classList.remove("visible");
			tabsContent[4].classList.remove("visible");
			tabsContent[5].classList.add("visible");
			if (tabsContent[6]) {
				tabsContent[6].classList.remove("visible");
			}
			break;
		case "seventh":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.remove("visible");
			tabsContent[2].classList.remove("visible");
			tabsContent[3].classList.remove("visible");
			tabsContent[4].classList.remove("visible");
			tabsContent[5].classList.remove("visible");
			tabsContent[6].classList.add("visible");
			break;
		default:
			console.log("error -- default case");
	}
}

function findActiveTab() {
	const activeTab = tabsList.querySelector(".active");
	return activeTab;
}
