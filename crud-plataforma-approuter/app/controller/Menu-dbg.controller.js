sap.ui.define([
		"./BaseController"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController) {
		"use strict";

		return BaseController.extend("desafio.l4e.app.controller.Menu", {
			onInit: function () {
                
            },

            onNavConsultaPlataformas: function() {
                this.getRouter().navTo("ConsultaPlataformas");
            },

            onNavCadastroPlataformas: function() {
                this.getRouter().navTo("CadastroPlataformas");
            },

            onItemSelect : function(oEvent) {
                var item = oEvent.getParameter('item');
                console.log(item);
                console.log(this.byId("menu").getParameter().sId());
		    },

            onMenuButtonPress: function () {
                var toolPage = this.byId("toolPage");
                toolPage.setSideExpanded(!toolPage.getSideExpanded());
            }
		});
	});
