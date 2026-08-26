/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST — CONFIGURATION
========================================================= */

window.MATERIAL_ESTIMATE_CONFIG = {

  /* =========================
     COMPANY
  ========================= */

  companyName: "SANDEEP ELECTROFIX",

  ownerName: "Sandeep Verma",

  tagline: "Powering Your Trust",

  location: "Lucknow, Uttar Pradesh",

  currency: "₹",


  /* =========================
     LANGUAGE
  ========================= */

  languageDefault: "hi",

  supportedLanguages: [
    "hi",
    "en"
  ],


  /* =========================
     SYSTEM SETTINGS
  ========================= */

  defaultUnit: "pcs",

  enableBrand: true,

  enableNonBrand: true,

  enableBrandSkip: true,

  enableType: true,

  enableSubType: true,

  enableSearch: true,

  enableColour: true,

  enableUnits: true,

  enableShowHide: true,


  /* =========================
     LOCAL STORAGE
  ========================= */

  storageKeys: {

    language: "sandeepMaterialLang",

    theme: "sandeepTheme",

    selectedItems: "sandeepSelectedItems",

    currentStage: "sandeepCurrentStage"

  },


  /* =========================
     COLOURS
  ========================= */

  colours: [

    {
      id: "red",
      en: "Red",
      hi: "लाल"
    },

    {
      id: "black",
      en: "Black",
      hi: "काला"
    },

    {
      id: "yellow",
      en: "Yellow",
      hi: "पीला"
    },

    {
      id: "blue",
      en: "Blue",
      hi: "नीला"
    },

    {
      id: "green",
      en: "Green",
      hi: "हरा"
    },

    {
      id: "white",
      en: "White",
      hi: "सफेद"
    },

    {
      id: "grey",
      en: "Grey",
      hi: "ग्रे"
    }

  ],


  /* =========================
     BRANDS
  ========================= */

  defaultBrands: [

    {
      id: "polycab",
      name: "Polycab"
    },

    {
      id: "havells",
      name: "Havells"
    },

    {
      id: "finolex",
      name: "Finolex"
    },

    {
      id: "rr-kabel",
      name: "RR Kabel"
    },

    {
      id: "anchor",
      name: "Anchor"
    },

    {
      id: "legrand",
      name: "Legrand"
    },

    {
      id: "schneider",
      name: "Schneider"
    },

    {
      id: "abb",
      name: "ABB"
    },

    {
      id: "other-brand",
      name: "Other Brand"
    },

    {
      id: "non-brand",
      name: "Non Brand / Local"
    },

    {
      id: "skip-brand",
      name: "Skip Brand"
    }

  ],


  /* =========================
     UNITS
  ========================= */

  units: [

    {
      id: "pcs",
      en: "Pcs",
      hi: "पीस"
    },

    {
      id: "meter",
      en: "Meter",
      hi: "मीटर"
    },

    {
      id: "roll",
      en: "Roll",
      hi: "रोल"
    },

    {
      id: "bundle",
      en: "Bundle",
      hi: "बंडल"
    },

    {
      id: "box",
      en: "Box",
      hi: "बॉक्स"
    },

    {
      id: "pair",
      en: "Pair",
      hi: "जोड़ी"
    },

    {
      id: "set",
      en: "Set",
      hi: "सेट"
    }

  ],


  /* =========================
     WIRE SIZES
  ========================= */

  wireSizes: [

    "0.75 Sqmm",
    "1 Sqmm",
    "1.5 Sqmm",
    "2.5 Sqmm",
    "4 Sqmm",
    "6 Sqmm",
    "10 Sqmm"

  ],


  /* =========================
     XLPE CABLE SIZES
  ========================= */

  xlpeCableSizes: [

    "1.5 Sqmm",
    "2.5 Sqmm",
    "4 Sqmm",
    "6 Sqmm",
    "10 Sqmm",
    "16 Sqmm",
    "25 Sqmm",
    "35 Sqmm",
    "50 Sqmm"

  ],


  /* =========================
     SWITCH / SOCKET RATINGS
  ========================= */

  ratings: [

    "6A",
    "10A",
    "16A",
    "20A",
    "25A"

  ],


  /* =========================
     WIRE TYPES
  ========================= */

  wireTypes: [

    {
      id: "hrfr",
      en: "HRFR",
      hi: "HRFR"
    },

    {
      id: "fr",
      en: "FR",
      hi: "FR"
    },

    {
      id: "frls",
      en: "FRLS",
      hi: "FRLS"
    },

    {
      id: "flexible",
      en: "Flexible Wire",
      hi: "फ्लेक्सिबल वायर"
    }

  ],


  /* =========================
     STAGE SETTINGS
  ========================= */

  stages: [

    {
      id: "stage1",
      number: 1,
      en: "Slab Conduit Installation",
      hi: "स्लैब कंड्यूट इंस्टॉलेशन"
    },

    {
      id: "stage2",
      number: 2,
      en: "Wall Conduit Installation",
      hi: "वॉल कंड्यूट इंस्टॉलेशन"
    },

    {
      id: "stage3",
      number: 3,
      en: "Wiring Installation",
      hi: "वायरिंग इंस्टॉलेशन"
    },

    {
      id: "stage4",
      number: 4,
      en: "Final Electrical Fittings",
      hi: "फाइनल इलेक्ट्रिकल फिटिंग"
    },

    {
      id: "stage5",
      number: 5,
      en: "False Ceiling Wiring Material",
      hi: "फॉल्स सीलिंग वायरिंग मटेरियल"
    }

  ],


  /* =========================
     UI
  ========================= */

  ui: {

    showLogo: true,

    showTagline: true,

    showOwnerName: true,

    showLocation: true,

    enableDarkMode: true,

    enableHindi: true,

    enableEnglish: true

  },


  /* =========================
     ESTIMATE
  ========================= */

  estimate: {

    defaultRate: 0,

    decimalPlaces: 2,

    showRate: true,

    showQuantity: true,

    showUnit: true,

    showBrand: true,

    showColour: true,

    showAmount: true,

    includeGST: false,

    gstPercent: 18

  },


  /* =========================
     PDF
  ========================= */

  pdf: {

    title: "Material Estimate",

    includeLogo: true,

    includeWatermark: true,

    includeCompanyDetails: true,

    includeDate: true,

    includeEstimateNumber: true

  }

};


/* =========================================================
   GLOBAL HELPERS
========================================================= */


/**
 * Get current language
 */
window.getCurrentLanguage = function () {

  const saved =
    localStorage.getItem(
      window.MATERIAL_ESTIMATE_CONFIG.storageKeys.language
    );

  return saved ||
    window.MATERIAL_ESTIMATE_CONFIG.languageDefault;

};


/**
 * Save language
 */
window.setCurrentLanguage = function (language) {

  if (
    !window.MATERIAL_ESTIMATE_CONFIG
      .supportedLanguages
      .includes(language)
  ) {
    return;
  }

  localStorage.setItem(
    window.MATERIAL_ESTIMATE_CONFIG.storageKeys.language,
    language
  );

};


/**
 * Get translated text
 */
window.translate = function (item) {

  const lang = getCurrentLanguage();

  if (!item) {
    return "";
  }

  if (typeof item === "string") {
    return item;
  }

  return item[lang] ||
         item.en ||
         item.hi ||
         "";

};


/**
 * Format currency
 */
window.formatCurrency = function (amount) {

  const config =
    window.MATERIAL_ESTIMATE_CONFIG;

  const decimals =
    config.estimate.decimalPlaces;

  const value =
    Number(amount) || 0;

  return (
    config.currency +
    value.toFixed(decimals)
  );

};


/**
 * Generate estimate number
 */
window.generateEstimateNumber = function () {

  const now = new Date();

  const year =
    now.getFullYear();

  const month =
    String(now.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(now.getDate())
      .padStart(2, "0");

  const random =
    Math.floor(
      1000 + Math.random() * 9000
    );

  return `SE-${year}${month}${day}-${random}`;

};


/**
 * Get today's date
 */
window.getTodayDate = function () {

  return new Date()
    .toLocaleDateString("en-IN");

};


/* =========================================================
   CONFIG LOADED
========================================================= */

console.log(
  "Sandeep ElectroFix Project List Config Loaded"
);
