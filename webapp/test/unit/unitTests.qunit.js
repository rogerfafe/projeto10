/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"brcomprojeto10/projeto10/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
