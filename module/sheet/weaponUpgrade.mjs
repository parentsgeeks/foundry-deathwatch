import { DeathwatchItemSheet } from "./item.mjs";

export class WeaponUpgradeSheet extends DeathwatchItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["deathwatch", "sheet", "default"],
      template: "systems/foundry-deathwatch/template/sheet/weaponUpgrade.hbs",
      width: 670,
      height: 350,
      resizable: false,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "data",
        },
      ],
    });
  }

  _getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    buttons = [].concat(buttons);
    return buttons;
  }

  activateListeners(html) {
    super.activateListeners(html);

    console.log("🔍 Activation des onglets et vérification de l'éditeur...");

    let tabs = new Tabs({
      navSelector: ".sheet-tabs",
      contentSelector: ".sheet-body",
      initial: "data",
    });
    tabs.bind(html.get(0));

    // ✅ Gérer les onglets manuellement
    html.find(".sheet-tabs .item").on("click", function () {
      let tab = $(this).attr("data-tab");
      console.log("🖱️ Clic détecté sur l'onglet :", tab);

      html.find(".tab").hide();
      html.find(`.tab[data-tab='${tab}']`).show();

      // 🔍 Vérifier si l'éditeur est bien détecté dans l'onglet NOTES
      if (tab === "notes") {
        console.log("📝 Vérification et création de l'éditeur...");
        html.find(".editor").each((i, el) => {
          let target = $(el).attr("data-edit");
          if (target) {
            console.log(`🔧 Création de l'éditeur pour ${target}`);
            this._activateEditor(target, el);
          }
        });
      }
    });
  }

  getData() {
    const data = super.getData();
    console.log("🔍 Données récupérées depuis Foundry :", data);
    return data;
  }
}
