sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","desafio/l4e/app/model/models"],function(e,i,t){"use strict";return e.extend("desafio.l4e.app.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});