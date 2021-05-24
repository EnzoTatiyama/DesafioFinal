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

		return BaseController.extend("desafio.l4e.app.controller.LoginUsuario", {
			onInit: function () {
                
            },

            onEntrar: function () {
                var that = this;
                MessageBox.success("Login feito com sucesso!", {
                    onClose: function () {
                        that.getRouter().navTo("CadastroPlataformas");
                    }
                });
            }
            
		});
	});
