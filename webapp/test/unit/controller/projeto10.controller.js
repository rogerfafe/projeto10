/*global QUnit*/

sap.ui.define([
	"brcomprojeto10/projeto10/controller/projeto10.controller"
], function (Controller) {
	"use strict";

	QUnit.module("projeto10 Controller");

	QUnit.test("I should test the projeto10 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
