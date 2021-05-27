sap.ui.define([
        "./BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController, JSONModel, MessageBox) {
		"use strict";

		return BaseController.extend("desafio.l4e.app.controller.AvaliacaoServico", {
			onInit: function () {
                this.getRouter().getRoute("LoginUsuario").attachPatternMatched(this.handleRouteMatched, this);
            },
            

		});
	});
