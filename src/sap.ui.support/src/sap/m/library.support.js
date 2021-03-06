/*!
 * ${copyright}
 */
/**
 * Adds support rules of the sap.m library to the support infrastructure.
 */
sap.ui.define(["jquery.sap.global", "sap/ui/support/library",
			   "./Button.support",
			   "./Dialog.support",
			   "./Input.support",
			   "./Panel.support"],
	function(jQuery, SupportLib,
			 ButtonSupport,
			 DialogSupport,
			 InputSupport,
			 PanelSupport) {
	"use strict";

	return {
		name: "sap.m",
		niceName: "UI5 Main Library",
		ruleset: [
			ButtonSupport,
			DialogSupport,
			InputSupport,
			PanelSupport
		]
	};

}, true);
