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
        MessageToast.show(
          "Hello, This is a NEW Button!"
          // Below is the customization
          // {
          //   my: "center top",
          //   at: "center top",
          // }
        );
      },
    });
  }
);
