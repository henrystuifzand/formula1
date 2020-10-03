sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"xyz/stuifzand/f1formula1/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("xyz.stuifzand.f1formula1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			var formulaURL = "/destinations/formula1/f1/seasons.json?limit=71";
			var oModel = new JSONModel(formulaURL);
			console.log(oModel);
			this.setModel(oModel, "seasons");

			
			
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});