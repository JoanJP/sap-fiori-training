sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.App", {
    onShowButtonHello() {
      // show a native JavaScript alert
      alert("Hello, I'm a button!");
    },
  });
});
