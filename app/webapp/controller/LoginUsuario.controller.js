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
                this.getRouter().getRoute("LoginUsuario").attachPatternMatched(this.handleRouteMatched, this);
            },

            handleRouteMatched: function () {
                this.getView().setModel(new JSONModel(), "Usuario");
            },

            onEntrar: async function () {
                var oUsuario = this.getView().getModel("Usuario").getData();
                var that = this;
                
                this.getView().setBusy(true);
                await $.ajax("https://warm-beyond-86023.herokuapp.com/confirm", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "75e8efc1-3858-4778-bafb-1a744b1da3b7"
                    },
                    data: JSON.stringify(oUsuario),
                    success(data){
                        MessageBox.success("Login realizado com sucesso!", {
                            onClose: function () {
                                that.getRouter().navTo("CadastroPlataformas");
                            }
                        });
                    },
                    error(response){
                        MessageBox.error("deu ruim");
                        
                    }
                })
                this.getView().setBusy(false);
            }
		});
	});
