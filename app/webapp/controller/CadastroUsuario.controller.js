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

		return BaseController.extend("desafio.l4e.app.controller.CadastroUsuario", {
			onInit: function () {
                this.getRouter().getRoute("CadastroUsuario").attachPatternMatched(this.handleRouteMatched, this);
            },
            
            handleRouteMatched: function () {
                this.getView().setModel(new JSONModel(), "Usuario");
            },

            onCadastrar: async function () {
                var oUsuario = this.getView().getModel("Usuario").getData();
                var that = this;
                console.log(oUsuario);
                
                this.getView().setBusy(true);
                await $.ajax("/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(oUsuario),
                    success(){
                        MessageBox.success("Cadastrado com sucesso!");
                        console.log(oUsuario);
                    },
                    error(){
                        MessageBox.error("Não foi possível cadastrar.");
                    }
                })
                this.getView().setBusy(false);
            },
		});
	});
