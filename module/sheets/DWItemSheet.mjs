export default class DWItemSheet extends ItemSheet {
  get template() {
    return `systems/foundry-deathwatch/templates/sheets/${this.item.data.type}-sheet.hbs`;
  }
}
