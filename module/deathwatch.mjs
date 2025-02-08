import { WeaponSheet } from "./sheet/weapon.mjs";

Hooks.once("init", function () {
  console.log("foundry-deathwatch | initialising Deathwatch System...");

  // System config
  CONFIG.DEATHWATCH = {
    weaponClass: {
      basic: "WEAPON_CLASS.BASIC",
      pistol: "WEAPON_CLASS.PISTOL",
      heavy: "WEAPON_CLASS.HEAVY",
      mounted: "WEAPON_CLASS.MOUNTED",
      na: "WEAPON_CLASS.NA",
      thrown: "WEAPON_CLASS.THROWN",
      none: "WEAPON_CLASS.NONE",
      melee: "WEAPON_CLASS.MELEE",
    },
    weaponType: {
      ranged: "WEAPON_TYPE.RANGED",
      grenagemissile: "WEAPON_TYPE.GRENADEMISSILE",
      exotic: "WEAPON_TYPE.EXOTIC",
      melee: "WEAPON_TYPE.MELEE",
    },
    weaponSubType: {
      bolt: "WEAPON_SUBTYPE.BOLT",
      plasma: "WEAPON_SUBTYPE.PLASMA",
      melta: "WEAPON_SUBTYPE.MELTA",
      flame: "WEAPON_SUBTYPE.FLAME",
      solidprojectile: "WEAPON_SUBTYPE.SOLIDPROJECTILE",
      las: "WEAPON_SUBTYPE.LAS",
      launcher: "WEAPON_SUBTYPE.LAUNCHER",
      chain: "WEAPON_SUBTYPE.CHAIN",
      power: "WEAPON_SUBTYPE.POWER",
      traditional: "WEAPON_SUBTYPE.TRADITIONAL",
      force: "WEAPON_SUBTYPE.FORCE",
      othermelee: "WEAPON_SUBTYPE.OTHERMELEE",
      none: "WEAPON_SUBTYPE.NONE",
    },
    weaponDamageType: {
      energy: "WEAPON_DAMAGETYPE.ENERGY",
      explosive: "WEAPON_DAMAGETYPE.EXPLOSIVE",
      rending: "WEAPON_DAMAGETYPE.RENDING",
      impact: "WEAPON_DAMAGETYPE.IMPACT",
    },
    weaponRenownNeed: {
      none: "WEAPON_RENOWNNEED.NONE",
      initiated: "WEAPON_RENOWNNEED.INITIATED",
      respected: "WEAPON_RENOWNNEED.RESPECTED",
      distinguished: "WEAPON_RENOWNNEED.DISTINGUISHED",
      famed: "WEAPON_RENOWNNEED.FAMED",
      hero: "WEAPON_RENOWNNEED.HERO",
    },
    weaponSpecial: {
      accurate: "WEAPON_SPECIAL.ACCURATE",
      balanced: "WEAPON_SPECIAL.BALANCED",
      blast: "WEAPON_SPECIAL.BLAST",
      concussive: "WEAPON_SPECIAL.CONCUSSIVE",
      defensive: "WEAPON_SPECIAL.DEFENSIVE",
      devastating: "WEAPON_SPECIAL.DEVASTATING",
      felling: "WEAPON_SPECIAL.FELLING",
      flame: "WEAPON_SPECIAL.FLAME",
      gyrostabilised: "WEAPON_SPECIAL.GYROSTABILISED",
      haywire: "WEAPON_SPECIAL.HAYWIRE",
      overheats: "WEAPON_SPECIAL.OVERHEATS",
      powerfield: "WEAPON_SPECIAL.POWERFIELD",
      primitive: "WEAPON_SPECIAL.PRIMITIVE",
      razorsharp: "WEAPON_SPECIAL.RAZORSHARP",
      recharge: "WEAPON_SPECIAL.RECHARGE",
      reliable: "WEAPON_SPECIAL.RELIABLE",
      sanctified: "WEAPON_SPECIAL.SANCTIFIED",
      scatter: "WEAPON_SPECIAL.SCATTER",
      shocking: "WEAPON_SPECIAL.SHOCKING",
      smoke: "WEAPON_SPECIAL.SMOKE",
      snare: "WEAPON_SPECIAL.SNARE",
      storm: "WEAPON_SPECIAL.STORM",
      tearing: "WEAPON_SPECIAL.TEARING",
      toxic: "WEAPON_SPECIAL.TOXIC",
      twinlinked: "WEAPON_SPECIAL.TWINLINKED",
      unbalanced: "WEAPON_SPECIAL.UNBALANCED",
      unwieldy: "WEAPON_SPECIAL.UNWIELDY",
      volatile: "WEAPON_SPECIAL.VOLATILE",
    },
  };

  // Helper Handlebars
  Handlebars.registerHelper("config", function (key) {
    return CONFIG.DEATHWATCH[key];
  });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("foundry-deathwatch", WeaponSheet, {
    types: ["weapon"],
    makeDefault: true,
  });
});
