const toggle_design_mode_id = "toggle_design_mode";

browser.menus.create({
	id: toggle_design_mode_id,
	type: "normal",
	title: browser.i18n.getMessage(
		"menuPageEdit",
		browser.i18n.getMessage("statusTurnOn"),
	),
	contexts: ["all"],
});

/**
 * Updates the PageEdit Menu item title
 *
 * @param status If page edit can be enabled
 */
async function updatePageEditMenu(status: boolean) {
	browser.menus.update(toggle_design_mode_id, {
		title: browser.i18n.getMessage(
			"menuPageEdit",
			browser.i18n.getMessage(status ? "statusTurnOn" : "statusTurnOff"),
		),
	});

	browser.menus.refresh();
}

browser.menus.onShown.addListener(async (info) => {
	for (let i = 0; i < info.menuIds.length; ++i) {
		if (info.menuIds[i] === toggle_design_mode_id) {
			const status = await browser.tabs.executeScript({
				code: "document.designMode",
			});

			await updatePageEditMenu(status[0] === "off");
			return;
		}
	}
});

browser.menus.onClicked.addListener((info) => {
	if (info.menuItemId !== toggle_design_mode_id) {
		return;
	}

	browser.tabs.executeScript({
		code: `
		if (document.designMode === "on") {
			document.designMode = "off";
		} else {
			document.designMode = "on";
		}
		`,
	});
});
