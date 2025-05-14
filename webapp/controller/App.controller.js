sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onShowButtonHello() {
        // show a native JavaScript alert
        alert("Hello, I'm a button!");
      },
      onShowButtonToast() {
        MessageToast.show("Hello, This is a NEW Button!");
      },
      onShowResource() {
        // read msg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel("main")
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show message
        MessageToast.show(sMsg);
      },
    });
  }
);
