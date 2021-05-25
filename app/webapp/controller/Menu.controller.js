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

            onCollapseExpandPress: function () {
                var oNavigationList = this.byId("navigationList");
                var bExpanded = oNavigationList.getExpanded();

                oNavigationList.setExpanded(!bExpanded);
            },

            onSideNavButtonPress: function () {
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            onNavConsultaPlataformas: function() {
                this.getRouter().navTo("ConsultaPlataformas");
            },

            onNavCadastroUsuario: function() {
                this.getRouter().navTo("CadastroUsuario");
            },

            onNavCadastroServicos: function() {
                this.getRouter().navTo("LoginUsuario");
            },

            onNavDetalheServico: function() {
                this.getRouter().navTo("DetalheServico");
            },
           
		});
	});
