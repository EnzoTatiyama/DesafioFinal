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

		return BaseController.extend("desafio.l4e.app.controller.CadastroPlataformas", {
			onInit: function () {
                this.getRouter().getRoute("CadastroPlataformas").attachPatternMatched(this.handleRouteMatched, this);

                this.getRouter().getRoute("EditarPlataformas").attachPatternMatched(this.handleRouteMatchedEditarPlataformas, this);
            },
            
            handleRouteMatched: function () {
                this.getView().setModel(new JSONModel({
                    "status": "A"
                }), "Plataformas");
            },

            handleRouteMatchedEditarPlataformas: async function () {
                var that = this;
                var id = this.getRouter().getHashChanger().getHash().split("/")[1];
                this.getView().setBusy(true);

                await
                $.ajax({
                    "url": `/api/plataformas/${id}`,
                    "method": "GET",
                    success(data){
                        that.getView().setModel(new JSONModel(data), "Plataformas");
                    },
                    error(){
                        MessageBox.error("Não foi possível buscar a plataforma.");
                    }
                });
                this.getView().setBusy(false);
            },

            onChangeSwitch: function (oEvent) {
                this.getView().getModel("Plataformas").setProperty("/status", oEvent.getSource().getState() === true ? "A" : "I");
            },

            onConfirmar: async function () {
                var oPlataforma = this.getView().getModel("Plataformas").getData();
                var that = this;

                if (this.getRouter().getHashChanger().getHash().search("EditarPlataformas") === 0){
                    await $.ajax(`/api/plataformas/${oPlataforma.id}`,{
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify({
                            "nome": oPlataforma.nome,
                            "status": oPlataforma.status
                        }),
                        success(){
                            MessageBox.success("Editado com sucesso!", {
                                onClose: function () {
                                    that.getRouter().navTo("ConsultaPlataformas");
                                }
                            })
                        },
                        error(){
                            MessageBox.error("Não foi possível editar a plataforma.");
                        }
                    });
                } else{
                    this.getView().setBusy(true);
                    await $.ajax("/api/plataformas", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify(oPlataforma),
                        success(){
                            MessageBox.success("Salvo com sucesso!");
                        },
                        error(){
                            MessageBox.error("Não foi possível salvar a plataforma.");
                        }
                    })
                    this.getView().setBusy(false);
                } 
            },

            onCancelar: function () {
                if (this.getRouter().getHashChanger().getHash().search("EditarPlataformas") === 0){
                    this.getRouter().navTo("ConsultaPlataformas");
                } else{
                    this.getView().setModel(new JSONModel({"status": "A"}), "Plataformas");
                }
            }
		});
	});
