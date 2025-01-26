import DWItemSheet from "./module/sheets/DWItemSheet.mjs";

Hooks.once("init", function () {
  console.log("Deathwatch | Initializing Deathwatch System...");

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("foundry-deathwatch", DWItemSheet, { makeDefault: true });
});
