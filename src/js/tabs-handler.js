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
			if (tabsContent[2]) {
				tabsContent[2].classList.remove("visible");
			}
			break;
		case "second":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.add("visible");
			if (tabsContent[2]) {
				tabsContent[2].classList.remove("visible");
			}
			break;
		case "third":
			tabToActivate.classList.add("active");
			tabsContent[0].classList.remove("visible");
			tabsContent[1].classList.remove("visible");
			tabsContent[2].classList.add("visible");
			break;
		default:
			console.log("error -- default case");
	}
}

function findActiveTab() {
	const activeTab = tabsList.querySelector(".active");
	return activeTab;
}
