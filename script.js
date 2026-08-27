/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST
   MAIN JAVASCRIPT ENGINE
   VERSION 1.0
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLang =
  localStorage.getItem("sandeepMaterialLang") || "hi";

let currentStage = null;
let currentMaterial = null;

let selectedOptions = {};

let selectedItems =
  JSON.parse(
    localStorage.getItem("sandeepEstimateItems") || "[]"
  );

let navigationStack = [];


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = id => document.getElementById(id);

const stageList = $("stageList");
const materialList = $("materialList");
const optionList = $("optionList");
const detailsView = $("detailsView");
const estimateView = $("estimateView");

const sectionTitle = $("sectionTitle");
const pageTitle = $("pageTitle");
const materialCount = $("materialCount");

const searchInput = $("searchInput");
const clearSearch = $("clearSearch");

const backBtn = $("backBtn");

const languageBtn = $("languageBtn");
const estimateBtn = $("estimateBtn");

const selectedMaterialName =
  $("selectedMaterialName");

const dynamicForm =
  $("dynamicForm");

const quantityInput =
  $("quantityInput");

const unitSelect =
  $("unitSelect");

const brandGroup =
  $("brandGroup");

const brandSelect =
  $("brandSelect");

const rateInput =
  $("rateInput");

const amountPreview =
  $("amountPreview");

const addEstimateBtn =
  $("addEstimateBtn");

const selectedItemsList =
  $("selectedItemsList");

const emptyEstimate =
  $("emptyEstimate");

const totalCard =
  $("totalCard");

const grandTotal =
  $("grandTotal");

const estimateActions =
  $("estimateActions");

const clearEstimateBtn =
  $("clearEstimateBtn");

const finalEstimateBtn =
  $("finalEstimateBtn");

const popupOverlay =
  $("popupOverlay");

const popupTitle =
  $("popupTitle");

const popupContent =
  $("popupContent");

const popupClose =
  $("popupClose");


/* =========================================================
   TRANSLATIONS
========================================================= */

const TEXT = {

  hi: {
    projectList: "प्रोजेक्ट लिस्ट",
    electricalWork: "इलेक्ट्रिकल वर्क",
    materials: "मटेरियल",
    stages: "प्रोजेक्ट स्टेज",
    search: "मटेरियल खोजें...",
    quantity: "मात्रा",
    unit: "यूनिट",
    brand: "ब्रांड",
    rate: "रेट (₹)",
    amount: "राशि",
    addEstimate: "एस्टिमेट में जोड़ें",
    estimate: "एस्टिमेट",
    emptyEstimate: "एस्टिमेट खाली है",
    emptyText:
      "मटेरियल add करने के बाद आपका estimate यहाँ दिखाई देगा।",
    grandTotal: "ग्रैंड टोटल",
    totalEstimate: "कुल एस्टिमेट राशि",
    clear: "क्लियर",
    finalEstimate: "फाइनल एस्टिमेट",
    select: "चुनें",
    back: "वापस",
    materialsCount: "मटेरियल",
    edit: "एडिट",
    delete: "डिलीट",
    confirmClear:
      "क्या आप पूरा estimate clear करना चाहते हैं?",
    confirmDelete:
      "क्या आप यह item delete करना चाहते हैं?",
    saved: "Estimate save हो गया।",
    noMaterials: "कोई material नहीं मिला।",
    selectBrand: "ब्रांड चुनें",
    nonBrand: "Non Brand / Local",
    skipBrand: "Skip Brand",
    finalTitle: "Final Estimate",
    total: "Total"
  },

  en: {
    projectList: "Project List",
    electricalWork: "ELECTRICAL WORK",
    materials: "MATERIALS",
    stages: "Project Stages",
    search: "Search material...",
    quantity: "Quantity",
    unit: "Unit",
    brand: "Brand",
    rate: "Rate (₹)",
    amount: "Amount",
    addEstimate: "Add to Estimate",
    estimate: "Estimate",
    emptyEstimate: "Estimate Empty",
    emptyText:
      "Your estimate will appear here after adding materials.",
    grandTotal: "Grand Total",
    totalEstimate: "Total Estimate Amount",
    clear: "Clear",
    finalEstimate: "Final Estimate",
    select: "Select",
    back: "Back",
    materialsCount: "Materials",
    edit: "Edit",
    delete: "Delete",
    confirmClear:
      "Do you want to clear the complete estimate?",
    confirmDelete:
      "Do you want to delete this item?",
    saved: "Estimate saved.",
    noMaterials: "No material found.",
    selectBrand: "Select Brand",
    nonBrand: "Non Brand / Local",
    skipBrand: "Skip Brand",
    finalTitle: "Final Estimate",
    total: "Total"
  }

};


function t(key) {
  return TEXT[currentLang]?.[key] || key;
}


/* =========================================================
   LABEL FORMATTER
========================================================= */

function formatLabel(key) {

  const labels = {

    type: {
      en: "Type",
      hi: "टाइप"
    },

    subType: {
      en: "Sub Type",
      hi: "सब टाइप"
    },

    size: {
      en: "Size",
      hi: "साइज"
    },

    shape: {
      en: "Shape",
      hi: "शेप"
    },

    material: {
      en: "Material",
      hi: "मटेरियल"
    },

    module: {
      en: "Module",
      hi: "मॉड्यूल"
    },

    ways: {
      en: "Ways",
      hi: "वे"
    },

    depth: {
      en: "Depth",
      hi: "डेप्थ"
    },

    hookRod: {
      en: "Hook Rod",
      hi: "हुक रॉड"
    },

    conduitSize: {
      en: "Conduit Size",
      hi: "कंड्यूट साइज"
    },

    phase: {
      en: "Phase",
      hi: "फेज"
    },

    door: {
      en: "Door",
      hi: "डोर"
    },

    amp: {
      en: "Ampere",
      hi: "एम्पियर"
    },

    voltage: {
      en: "Voltage",
      hi: "वोल्टेज"
    },

    sensitivity: {
      en: "Sensitivity",
      hi: "सेंसिटिविटी"
    },

    colour: {
      en: "Colour",
      hi: "कलर"
    },

    base: {
      en: "Base",
      hi: "बेस"
    },

    wattage: {
      en: "Wattage",
      hi: "वॉटेज"
    },

    length: {
      en: "Length",
      hi: "लेंथ"
    },

    mounting: {
      en: "Mounting",
      hi: "माउंटिंग"
    },

    structure: {
      en: "Structure",
      hi: "स्ट्रक्चर"
    },

    ledDensity: {
      en: "LED Density",
      hi: "LED Density"
    },

    supply: {
      en: "Supply",
      hi: "सप्लाई"
    },

    ipRating: {
      en: "IP Rating",
      hi: "IP Rating"
    },

    sizeCutout: {
      en: "Size / Cutout",
      hi: "साइज / कटआउट"
    },

    diameter: {
      en: "Diameter",
      hi: "डायमीटर"
    },

    cableSize: {
      en: "Cable Size",
      hi: "केबल साइज"
    },

    studSize: {
      en: "Stud Size",
      hi: "स्टड साइज"
    },

    quantity: {
      en: "Quantity",
      hi: "मात्रा"
    },

    unit: {
      en: "Unit",
      hi: "यूनिट"
    },

    brand: {
      en: "Brand",
      hi: "ब्रांड"
    }

  };

  return labels[key]?.[currentLang] || key;
}


/* =========================================================
   INITIALIZATION
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

  updateLanguageUI();

  updateMaterialCount();

  bindEvents();

  showHome();

  updateEstimateView();

});


/* =========================================================
   LOADING SCREEN
========================================================= */

window.addEventListener("load", () => {

  const loadingScreen =
    $("loading-screen");

  const app =
    $("app");

  setTimeout(() => {

    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
    }

    if (app) {
      app.classList.remove("hidden");
    }

  }, 700);

});


/* =========================================================
   EVENTS
========================================================= */

function bindEvents() {

  if (languageBtn) {

    languageBtn.addEventListener(
      "click",
      toggleLanguage
    );

  }


  if (estimateBtn) {

    estimateBtn.addEventListener(
      "click",
      () => showEstimate()
    );

  }


  if (backBtn) {

    backBtn.addEventListener(
      "click",
      goBack
    );

  }


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      handleSearch
    );

  }


  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      () => {

        searchInput.value = "";

        handleSearch();

      }
    );

  }


  if (quantityInput) {

    quantityInput.addEventListener(
      "input",
      updateAmount
    );

  }


  if (rateInput) {

    rateInput.addEventListener(
      "input",
      updateAmount
    );

  }


  if (unitSelect) {

    unitSelect.addEventListener(
      "change",
      handleUnitChange
    );

  }


  if (brandSelect) {

    brandSelect.addEventListener(
      "change",
      handleBrandChange
    );

  }


  if (addEstimateBtn) {

    addEstimateBtn.addEventListener(
      "click",
      addCurrentToEstimate
    );

  }


  if (clearEstimateBtn) {

    clearEstimateBtn.addEventListener(
      "click",
      clearEstimate
    );

  }


  if (finalEstimateBtn) {

    finalEstimateBtn.addEventListener(
      "click",
      showFinalEstimate
    );

  }


  if (popupClose) {

    popupClose.addEventListener(
      "click",
      closePopup
    );

  }


  if (popupOverlay) {

    popupOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target === popupOverlay
        ) {
          closePopup();
        }

      }
    );

  }


  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const nav =
            button.dataset.nav;

          handleNavigation(nav);

        }
      );

    });

}


/* =========================================================
   LANGUAGE
========================================================= */

function toggleLanguage() {

  currentLang =
    currentLang === "hi"
      ? "en"
      : "hi";

  localStorage.setItem(
    "sandeepMaterialLang",
    currentLang
  );

  updateLanguageUI();

  if (currentMaterial) {
    renderDetails();
  } else if (currentStage) {
    renderMaterials(currentStage);
  } else {
    showHome();
  }

}


function updateLanguageUI() {

  if (languageBtn) {

    languageBtn.textContent =
      currentLang === "hi"
        ? "EN"
        : "HI";

  }

  if (searchInput) {

    searchInput.placeholder =
      t("search");

  }

  if (pageTitle) {

    pageTitle.textContent =
      t("projectList");

  }

  if (sectionTitle && !currentStage) {

    sectionTitle.textContent =
      "⚡ " + t("stages");

  }

}


/* =========================================================
   MATERIAL COUNT
========================================================= */

function updateMaterialCount() {

  if (!materialCount) return;

  const count =
    typeof getMaterialCount === "function"
      ? getMaterialCount()
      : window.ESTIMATE_LIST.length;

  materialCount.textContent =
    count;

}


/* =========================================================
   HOME
========================================================= */

function showHome() {

  currentStage = null;
  currentMaterial = null;
  selectedOptions = {};

  hideAllViews();

  if (stageList) {

    stageList.classList.remove("hidden");

    renderStages();

  }

  if (sectionTitle) {

    sectionTitle.textContent =
      "⚡ " + t("stages");

  }

  if (backBtn) {

    backBtn.classList.add("hidden");

  }

  setActiveNav("home");

}


function hideAllViews() {

  if (stageList)
    stageList.classList.add("hidden");

  if (materialList)
    materialList.classList.add("hidden");

  if (optionList)
    optionList.classList.add("hidden");

  if (detailsView)
    detailsView.classList.add("hidden");

  if (estimateView)
    estimateView.classList.add("hidden");

}


/* =========================================================
   STAGES
========================================================= */

function renderStages() {

  if (!stageList) return;

  stageList.innerHTML = "";

  const stages = [

    {
      id: "stage1",
      en: "Stage 1 — Slab Conduit Installation",
      hi: "स्टेज 1 — स्लैब कंड्यूट इंस्टॉलेशन"
    },

    {
      id: "stage2",
      en: "Stage 2 — Wall Conduit Installation",
      hi: "स्टेज 2 — वॉल कंड्यूट इंस्टॉलेशन"
    },

    {
      id: "stage3",
      en: "Stage 3 — Wiring Installation",
      hi: "स्टेज 3 — वायरिंग इंस्टॉलेशन"
    },

    {
      id: "stage4",
      en: "Stage 4 — Final Electrical Fittings",
      hi: "स्टेज 4 — फाइनल इलेक्ट्रिकल फिटिंग्स"
    },

    {
      id: "stage5",
      en: "Stage 5 — False Ceiling Wiring",
      hi: "स्टेज 5 — फॉल्स सीलिंग वायरिंग"
    }

  ];


  stages.forEach(stage => {

    const materials =
      getMaterialsByStage(stage.id);

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "stage-card";

    card.innerHTML = `

      <div class="stage-icon">
        ⚡
      </div>

      <h4>
        ${stage[currentLang]}
      </h4>

      <span>
        ${materials.length}
        ${t("materialsCount")}
      </span>

      <strong>
        ›
      </strong>

    `;

    card.addEventListener(
      "click",
      () => openStage(stage.id)
    );

    stageList.appendChild(card);

  });

}


/* =========================================================
   OPEN STAGE
========================================================= */

function openStage(stageId) {

  navigationStack.push({
    view: "home"
  });

  currentStage = stageId;
  currentMaterial = null;

  selectedOptions = {};

  hideAllViews();

  materialList.classList.remove("hidden");

  renderMaterials(stageId);

  const stageName =
    getStageName(stageId);

  sectionTitle.textContent =
    "⚡ " + stageName;

  backBtn.classList.remove("hidden");

  setActiveNav("stages");

}


/* =========================================================
   STAGE NAME
========================================================= */

function getStageName(stageId) {

  const map = {

    stage1: {
      en: "Stage 1 — Slab Conduit Installation",
      hi: "स्टेज 1 — स्लैब कंड्यूट इंस्टॉलेशन"
    },

    stage2: {
      en: "Stage 2 — Wall Conduit Installation",
      hi: "स्टेज 2 — वॉल कंड्यूट इंस्टॉलेशन"
    },

    stage3: {
      en: "Stage 3 — Wiring Installation",
      hi: "स्टेज 3 — वायरिंग इंस्टॉलेशन"
    },

    stage4: {
      en: "Stage 4 — Final Electrical Fittings",
      hi: "स्टेज 4 — फाइनल इलेक्ट्रिकल फिटिंग्स"
    },

    stage5: {
      en: "Stage 5 — False Ceiling Wiring",
      hi: "स्टेज 5 — फॉल्स सीलिंग वायरिंग"
    }

  };

  return map[stageId]?.[currentLang]
    || stageId;

}


/* =========================================================
   MATERIAL LIST
========================================================= */

function renderMaterials(stageId, filter = "") {

  if (!materialList) return;

  materialList.innerHTML = "";

  let materials =
    getMaterialsByStage(stageId);

  if (filter) {

    const q =
      filter
        .trim()
        .toLowerCase();

    materials =
      materials.filter(material => {

        const en =
          material.name?.en
            ?.toLowerCase() || "";

        const hi =
          material.name?.hi
            ?.toLowerCase() || "";

        return (
          en.includes(q) ||
          hi.includes(q)
        );

      });

  }


  if (!materials.length) {

    materialList.innerHTML = `

      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h4>${t("noMaterials")}</h4>
      </div>

    `;

    return;

  }


  materials.forEach(material => {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "material-card";

    const name =
      material.name?.[currentLang]
      || material.name?.en
      || "Material";

    card.innerHTML = `

      <div class="material-card-icon">
        ⚡
      </div>

      <div class="material-card-content">

        <strong>
          ${escapeHTML(name)}
        </strong>

      </div>

      <span class="material-arrow">
        ›
      </span>

    `;

    card.addEventListener(
      "click",
      () => openMaterial(material)
    );

    materialList.appendChild(card);

  });

}


/* =========================================================
   MATERIAL OPEN
========================================================= */

function openMaterial(material) {

  navigationStack.push({
    view: "stage",
    stage: currentStage
  });

  currentMaterial = material;

  selectedOptions = {};

  hideAllViews();

  optionList.classList.remove("hidden");

  renderOptionView();

  const name =
    material.name?.[currentLang]
    || material.name?.en;

  sectionTitle.textContent =
    name;

  backBtn.classList.remove("hidden");

}


/* =========================================================
   OPTION VIEW
========================================================= */

function renderOptionView() {

  if (!optionList || !currentMaterial)
    return;

  optionList.innerHTML = "";

  const material =
    currentMaterial;

  const flow =
    Array.isArray(material.flow)
      ? material.flow
      : [];


  const optionFields =
    flow.filter(field => {

      return (
        field !== "quantity" &&
        field !== "unit" &&
        field !== "brand"
      );

    });


  if (!optionFields.length) {

    openDetails();

    return;

  }


  optionFields.forEach(field => {

    renderOptionField(
      field,
      material
    );

  });


  const continueButton =
    document.createElement("button");

  continueButton.type = "button";

  continueButton.className =
    "primary-btn";

  continueButton.textContent =
    currentLang === "hi"
      ? "आगे बढ़ें"
      : "Continue";

  continueButton.addEventListener(
    "click",
    validateOptionsAndContinue
  );

  optionList.appendChild(
    continueButton
  );

}


/* =========================================================
   OPTION FIELD
========================================================= */

function renderOptionField(
  field,
  material
) {

  const wrapper =
    document.createElement("div");

  wrapper.className =
    "form-group";

  const label =
    document.createElement("label");

  label.textContent =
    formatLabel(field);

  wrapper.appendChild(label);


  /* -----------------------------------------
     USER INPUT
  ----------------------------------------- */

  if (
    material[field + "UserInput"] === true
  ) {

    const input =
      document.createElement("input");

    input.type = "text";

    input.className =
      "dynamic-input";

    input.placeholder =
      formatLabel(field);

    input.dataset.field =
      field;

    input.value =
      selectedOptions[field] || "";

    input.addEventListener(
      "input",
      () => {

        selectedOptions[field] =
          input.value.trim();

      }
    );

    wrapper.appendChild(input);

    optionList.appendChild(wrapper);

    return;

  }


  /* -----------------------------------------
     PENDING FIELD
  ----------------------------------------- */

  if (
    material[field + "Pending"] === true
  ) {

    const input =
      document.createElement("input");

    input.type = "text";

    input.className =
      "dynamic-input";

    input.placeholder =
      currentLang === "hi"
        ? `${formatLabel(field)} दर्ज करें`
        : `Enter ${formatLabel(field)}`;

    input.dataset.field =
      field;

    input.value =
      selectedOptions[field] || "";

    input.addEventListener(
      "input",
      () => {

        selectedOptions[field] =
          input.value.trim();

      }
    );

    wrapper.appendChild(input);

    optionList.appendChild(wrapper);

    return;

  }


  /* -----------------------------------------
     MODEL DEPENDENT
  ----------------------------------------- */

  if (
    material[field + "ModelDependent"] === true
  ) {

    const input =
      document.createElement("input");

    input.type = "text";

    input.className =
      "dynamic-input";

    input.placeholder =
      currentLang === "hi"
        ? `${formatLabel(field)} दर्ज करें`
        : `Enter ${formatLabel(field)}`;

    input.dataset.field =
      field;

    input.value =
      selectedOptions[field] || "";

    input.addEventListener(
      "input",
      () => {

        selectedOptions[field] =
          input.value.trim();

      }
    );

    wrapper.appendChild(input);

    optionList.appendChild(wrapper);

    return;

  }


  /* -----------------------------------------
     SPECIAL SCREW SIZE
  ----------------------------------------- */

  if (
    field === "sizeDisplay" &&
    material.sizeDisplayFormat
  ) {

    const input =
      document.createElement("input");

    input.type = "text";

    input.className =
      "dynamic-input";

    input.readOnly = true;

    input.placeholder =
      material.sizeDisplayFormat;

    input.value =
      buildSizeDisplay(material);

    wrapper.appendChild(input);

    optionList.appendChild(wrapper);

    return;

  }


  /* -----------------------------------------
     NORMAL ARRAY
  ----------------------------------------- */

  const values =
    Array.isArray(material[field])
      ? material[field]
      : [];


  if (!values.length) {

    optionList.appendChild(wrapper);

    return;

  }


  const select =
    document.createElement("select");

  select.dataset.field =
    field;

  const first =
    document.createElement("option");

  first.value = "";

  first.textContent =
    t("select") +
    " " +
    formatLabel(field);

  select.appendChild(first);


  values.forEach(value => {

    const option =
      document.createElement("option");

    option.value =
      value;

    option.textContent =
      value;

    select.appendChild(option);

  });


  select.value =
    selectedOptions[field] || "";


  select.addEventListener(
    "change",
    () => {

      selectedOptions[field] =
        select.value;

      updateDependentDisplay();

    }
  );


  wrapper.appendChild(select);

  optionList.appendChild(wrapper);

}


/* =========================================================
   SIZE DISPLAY
========================================================= */

function buildSizeDisplay(material) {

  if (!material)
    return "";

  if (
    material.id === "s4-screw"
  ) {

    const diameter =
      selectedOptions.diameter || "";

    const length =
      selectedOptions.length || "";

    if (!diameter || !length)
      return "";

    return `${diameter} × ${length}`;

  }


  if (
    material.id === "s4-lug"
  ) {

    const cable =
      selectedOptions.cableSize || "";

    const stud =
      selectedOptions.studSize || "";

    if (!cable || !stud)
      return "";

    return `${cable} × ${stud}`;

  }


  return "";

}


/* =========================================================
   DEPENDENT DISPLAY
========================================================= */

function updateDependentDisplay() {

  if (!currentMaterial)
    return;

  const sizeDisplay =
    optionList.querySelector(
      'input[placeholder="Diameter × Length"]'
    );

  if (sizeDisplay) {

    sizeDisplay.value =
      buildSizeDisplay(currentMaterial);

  }

}


/* =========================================================
   VALIDATE OPTIONS
========================================================= */

function validateOptionsAndContinue() {

  if (!currentMaterial)
    return;


  const flow =
    currentMaterial.flow || [];


  const fields =
    flow.filter(field => {

      return (
        field !== "quantity" &&
        field !== "unit" &&
        field !== "brand" &&
        field !== "sizeDisplay"
      );

    });


  for (const field of fields) {

    const isPending =
      currentMaterial[field + "Pending"];

    const isUserInput =
      currentMaterial[field + "UserInput"];

    const isModelDependent =
      currentMaterial[field + "ModelDependent"];


    if (
      currentMaterial.sizeHidden === true &&
      field === "size"
    ) {
      continue;
    }


    if (
      currentMaterial.sizeModelDependent === true &&
      field === "size"
    ) {
      continue;
    }


    if (
      isPending ||
      isUserInput ||
      isModelDependent
    ) {

      if (
        !selectedOptions[field]
      ) {

        alert(
          currentLang === "hi"
            ? `${formatLabel(field)} दर्ज करें।`
            : `Please enter ${formatLabel(field)}.`
        );

        return;

      }

      continue;

    }


    if (
      Array.isArray(
        currentMaterial[field]
      ) &&
      currentMaterial[field].length
    ) {

      if (
        !selectedOptions[field]
      ) {

        alert(
          currentLang === "hi"
            ? `${formatLabel(field)} चुनें।`
            : `Please select ${formatLabel(field)}.`
        );

        return;

      }

    }

  }


  openDetails();

}


/* =========================================================
   DETAILS
========================================================= */

function openDetails() {

  navigationStack.push({
    view: "options"
  });

  hideAllViews();

  detailsView.classList.remove("hidden");

  renderDetails();

  backBtn.classList.remove("hidden");

}


/* =========================================================
   RENDER DETAILS
========================================================= */

function renderDetails() {

  if (!currentMaterial)
    return;


  const name =
    currentMaterial.name?.[currentLang]
    || currentMaterial.name?.en
    || "Material";


  selectedMaterialName.textContent =
    name;


  renderDynamicSummary();

  populateUnits();

  renderBrands();

  quantityInput.value = "";

  rateInput.value = "";

  amountPreview.textContent =
    "₹0.00";

}


/* =========================================================
   DYNAMIC SUMMARY
========================================================= */

function renderDynamicSummary() {

  if (!dynamicForm)
    return;

  dynamicForm.innerHTML = "";


  Object.keys(selectedOptions)
    .forEach(field => {

      if (!selectedOptions[field])
        return;

      if (
        field === "sizeDisplay"
      )
        return;


      const row =
        document.createElement("div");

      row.className =
        "selected-option-row";


      const label =
        document.createElement("span");

      label.textContent =
        formatLabel(field);


      const value =
        document.createElement("strong");

      value.textContent =
        selectedOptions[field];


      row.appendChild(label);

      row.appendChild(value);

      dynamicForm.appendChild(row);

    });


  const displaySize =
    buildSizeDisplay(
      currentMaterial
    );


  if (displaySize) {

    const row =
      document.createElement("div");

    row.className =
      "selected-option-row";

    row.innerHTML = `

      <span>
        Size
      </span>

      <strong>
        ${escapeHTML(displaySize)}
      </strong>

    `;

    dynamicForm.appendChild(row);

  }

}


/* =========================================================
   UNITS
========================================================= */

function populateUnits() {

  if (!unitSelect)
    return;

  unitSelect.innerHTML = "";

  const first =
    document.createElement("option");

  first.value = "";

  first.textContent =
    t("select") + " " + t("unit");

  unitSelect.appendChild(first);


  const units =
    currentMaterial?.units || [];


  units.forEach(unit => {

    const option =
      document.createElement("option");

    option.value =
      unit;

    option.textContent =
      unit;

    unitSelect.appendChild(option);

  });

}


/* =========================================================
   BRAND
   IMPORTANT:
   BRAND COMES AFTER QUANTITY + UNIT
========================================================= */

function handleUnitChange() {

  if (
    quantityInput.value &&
    unitSelect.value
  ) {

    showBrandGroup();

  } else {

    brandGroup.classList.add("hidden");

  }

}


function showBrandGroup() {

  if (!currentMaterial)
    return;

  if (
    !currentMaterial.flow?.includes("brand")
  ) {

    brandGroup.classList.add("hidden");

    return;

  }

  brandGroup.classList.remove("hidden");

}


function renderBrands() {

  if (!brandSelect)
    return;


  brandSelect.innerHTML = "";


  const first =
    document.createElement("option");

  first.value = "";

  first.textContent =
    t("selectBrand");

  brandSelect.appendChild(first);


  let brands =
    currentMaterial?.brands;


  if (
    !Array.isArray(brands) ||
    !brands.length
  ) {

    brands = [

      "Polycab",
      "Havells",
      "Finolex",
      "RR Kabel",
      "Anchor",
      "Legrand",
      "Schneider",
      "ABB",
      "Other Brand",
      "Non Brand / Local",
      "Skip Brand"

    ];

  }


  brands.forEach(brand => {

    const option =
      document.createElement("option");

    option.value =
      brand;

    option.textContent =
      brand;

    brandSelect.appendChild(option);

  });


  if (
    currentMaterial?.brandMaster
  ) {

    brandGroup.classList.remove(
      "hidden"
    );

  } else {

    brandGroup.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   BRAND CHANGE
========================================================= */

function handleBrandChange() {

  /* Brand is final option before Rate */

}


/* =========================================================
   AMOUNT
========================================================= */

function updateAmount() {

  const quantity =
    parseFloat(
      quantityInput.value
    ) || 0;

  const rate =
    parseFloat(
      rateInput.value
    ) || 0;

  const amount =
    quantity * rate;

  amountPreview.textContent =
    `₹${amount.toFixed(2)}`;


  /* Brand appears only after quantity + unit */

  if (
    quantity > 0 &&
    unitSelect.value
  ) {

    showBrandGroup();

  }

}


/* =========================================================
   ADD TO ESTIMATE
========================================================= */

function addCurrentToEstimate() {

  if (!currentMaterial)
    return;


  const quantity =
    parseFloat(
      quantityInput.value
    );


  const unit =
    unitSelect.value;


  const rate =
    parseFloat(
      rateInput.value
    ) || 0;


  if (
    !quantity ||
    quantity <= 0
  ) {

    alert(
      currentLang === "hi"
        ? "कृपया Quantity दर्ज करें।"
        : "Please enter quantity."
    );

    return;

  }


  if (!unit) {

    alert(
      currentLang === "hi"
        ? "कृपया Unit चुनें।"
        : "Please select unit."
    );

    return;

  }


  if (
    currentMaterial.flow?.includes("brand")
  ) {

    if (
      !brandSelect.value
    ) {

      alert(
        currentLang === "hi"
          ? "कृपया Brand चुनें।"
          : "Please select brand."
      );

      return;

    }

  }


  const brand =
    currentMaterial.flow?.includes("brand")
      ? brandSelect.value
      : "";


  const amount =
    quantity * rate;


  const item = {

    id:
      Date.now().toString(),

    materialId:
      currentMaterial.id,

    stage:
      currentMaterial.stage,

    materialName:
      currentMaterial.name?.en || "",

    materialNameHi:
      currentMaterial.name?.hi || "",

    options:
      { ...selectedOptions },

    quantity,

    unit,

    brand,

    rate,

    amount

  };


  selectedItems.push(item);

  saveEstimate();

  alert(t("saved"));

  showEstimate();

}


/* =========================================================
   SAVE ESTIMATE
========================================================= */

function saveEstimate() {

  localStorage.setItem(
    "sandeepEstimateItems",
    JSON.stringify(
      selectedItems
    )
  );

}


/* =========================================================
   ESTIMATE VIEW
========================================================= */

function showEstimate() {

  currentStage = null;
  currentMaterial = null;

  selectedOptions = {};

  navigationStack = [];

  hideAllViews();

  estimateView.classList.remove(
    "hidden"
  );

  sectionTitle.textContent =
    "📋 " + t("estimate");

  backBtn.classList.add("hidden");

  setActiveNav("estimate");

  updateEstimateView();

}


/* =========================================================
   UPDATE ESTIMATE
========================================================= */

function updateEstimateView() {

  if (!selectedItemsList)
    return;


  selectedItemsList.innerHTML = "";


  if (!selectedItems.length) {

    emptyEstimate.classList.remove(
      "hidden"
    );

    totalCard.classList.add(
      "hidden"
    );

    estimateActions.classList.add(
      "hidden"
    );

    return;

  }


  emptyEstimate.classList.add(
    "hidden"
  );

  totalCard.classList.remove(
    "hidden"
  );

  estimateActions.classList.remove(
    "hidden"
  );


  let total = 0;


  selectedItems.forEach(
    (item, index) => {

      total +=
        Number(item.amount) || 0;


      const card =
        document.createElement("div");

      card.className =
        "estimate-item";


      const name =
        currentLang === "hi"
          ? item.materialNameHi
          : item.materialName;


      let optionsHTML = "";


      Object.entries(
        item.options || {}
      )
      .forEach(
        ([key, value]) => {

          if (!value)
            return;

          optionsHTML += `

            <span>
              ${escapeHTML(
                formatLabel(key)
              )}: 
              ${escapeHTML(
                String(value)
              )}
            </span>

          `;

        }
      );


      card.innerHTML = `

        <div class="estimate-item-header">

          <strong>
            ${escapeHTML(name)}
          </strong>

          <span>
            #${index + 1}
          </span>

        </div>

        <div class="estimate-item-options">
          ${optionsHTML}
        </div>

        <div class="estimate-item-bottom">

          <span>
            ${t("quantity")}:
            ${item.quantity}
            ${escapeHTML(item.unit)}
          </span>

          <span>
            ₹${Number(item.rate).toFixed(2)}
          </span>

          <strong>
            ₹${Number(item.amount).toFixed(2)}
          </strong>

        </div>

        <div class="estimate-item-actions">

          <button
            type="button"
            data-edit="${item.id}"
          >
            ✏️ ${t("edit")}
          </button>

          <button
            type="button"
            data-delete="${item.id}"
          >
            🗑️ ${t("delete")}
          </button>

        </div>

      `;


      const editButton =
        card.querySelector(
          `[data-edit="${item.id}"]`
        );


      const deleteButton =
        card.querySelector(
          `[data-delete="${item.id}"]`
        );


      editButton?.addEventListener(
        "click",
        () => editEstimateItem(item.id)
      );


      deleteButton?.addEventListener(
        "click",
        () => deleteEstimateItem(item.id)
      );


      selectedItemsList.appendChild(
        card
      );

    }
  );


  grandTotal.textContent =
    `₹${total.toFixed(2)}`;

}


/* =========================================================
   EDIT ESTIMATE ITEM
========================================================= */

function editEstimateItem(id) {

  const item =
    selectedItems.find(
      x => x.id === id
    );


  if (!item)
    return;


  const material =
    getMaterialById(
      item.materialId
    );


  if (!material)
    return;


  selectedItems =
    selectedItems.filter(
      x => x.id !== id
    );


  saveEstimate();


  currentStage =
    material.stage;

  currentMaterial =
    material;

  selectedOptions =
    { ...(item.options || {}) };


  hideAllViews();

  detailsView.classList.remove(
    "hidden"
  );


  selectedMaterialName.textContent =
    currentLang === "hi"
      ? material.name.hi
      : material.name.en;


  renderDynamicSummary();

  populateUnits();

  renderBrands();


  quantityInput.value =
    item.quantity;


  unitSelect.value =
    item.unit;


  rateInput.value =
    item.rate;


  if (
    brandSelect &&
    item.brand
  ) {

    brandSelect.value =
      item.brand;

    brandGroup.classList.remove(
      "hidden"
    );

  }


  updateAmount();

  backBtn.classList.remove(
    "hidden"
  );


  sectionTitle.textContent =
    currentLang === "hi"
      ? material.name.hi
      : material.name.en;

}


/* =========================================================
   DELETE
========================================================= */

function deleteEstimateItem(id) {

  if (
    !confirm(t("confirmDelete"))
  ) {

    return;

  }


  selectedItems =
    selectedItems.filter(
      item => item.id !== id
    );


  saveEstimate();

  updateEstimateView();

}


/* =========================================================
   CLEAR ESTIMATE
========================================================= */

function clearEstimate() {

  if (
    !selectedItems.length
  ) {

    return;

  }


  if (
    !confirm(
      t("confirmClear")
    )
  ) {

    return;

  }


  selectedItems = [];

  saveEstimate();

  updateEstimateView();

}


/* =========================================================
   FINAL ESTIMATE
========================================================= */

function showFinalEstimate() {

  if (!selectedItems.length) {

    alert(
      currentLang === "hi"
        ? "Estimate खाली है।"
        : "Estimate is empty."
    );

    return;

  }


  let total = 0;


  let html = `

    <div class="final-estimate">

      <h2>
        ${t("finalTitle")}
      </h2>

      <div class="final-company">
        Sandeep ElectroFix
      </div>

      <hr>

  `;


  selectedItems.forEach(
    (item, index) => {

      total +=
        Number(item.amount) || 0;


      const name =
        currentLang === "hi"
          ? item.materialNameHi
          : item.materialName;


      html += `

        <div class="final-item">

          <strong>
            ${index + 1}.
            ${escapeHTML(name)}
          </strong>

          <div>
            ${item.quantity}
            ${escapeHTML(item.unit)}
            ×
            ₹${Number(item.rate).toFixed(2)}
          </div>

          <div>
            ₹${Number(item.amount).toFixed(2)}
          </div>

        </div>

      `;

    }
  );


  html += `

      <hr>

      <div class="final-total">

        <strong>
          ${t("total")}
        </strong>

        <strong>
          ₹${total.toFixed(2)}
        </strong>

      </div>

    </div>

  `;


  openPopup(
    t("finalTitle"),
    html
  );

}


/* =========================================================
   SEARCH
========================================================= */

function handleSearch() {

  const query =
    searchInput?.value || "";


  if (!query.trim()) {

    if (currentStage) {

      renderMaterials(
        currentStage
      );

    } else {

      showHome();

    }

    return;

  }


  hideAllViews();

  materialList.classList.remove(
    "hidden"
  );


  let materials;


  if (
    typeof searchMaterials ===
    "function"
  ) {

    materials =
      searchMaterials(query);

  } else {

    materials =
      window.ESTIMATE_LIST.filter(
        material => {

          const en =
            material.name?.en
              ?.toLowerCase() || "";

          const hi =
            material.name?.hi
              ?.toLowerCase() || "";

          const q =
            query
              .toLowerCase()
              .trim();

          return (
            en.includes(q) ||
            hi.includes(q)
          );

        }
      );

  }


  renderSearchResults(
    materials
  );

}


function renderSearchResults(
  materials
) {

  materialList.innerHTML = "";


  if (!materials.length) {

    materialList.innerHTML = `

      <div class="empty-state">

        <div class="empty-icon">
          🔍
        </div>

        <h4>
          ${t("noMaterials")}
        </h4>

      </div>

    `;

    return;

  }


  materials.forEach(material => {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "material-card";


    const name =
      material.name?.[currentLang]
      || material.name?.en;


    card.innerHTML = `

      <div class="material-card-icon">
        ⚡
      </div>

      <div class="material-card-content">

        <strong>
          ${escapeHTML(name)}
        </strong>

        <small>
          ${escapeHTML(
            getStageName(
              material.stage
            )
          )}
        </small>

      </div>

      <span>
        ›
      </span>

    `;


    card.addEventListener(
      "click",
      () => openMaterial(
        material
      )
    );


    materialList.appendChild(
      card
    );

  });

}


/* =========================================================
   BACK NAVIGATION
========================================================= */

function goBack() {

  if (
    currentMaterial &&
    detailsView &&
    !detailsView.classList.contains(
      "hidden"
    )
  ) {

    hideAllViews();

    optionList.classList.remove(
      "hidden"
    );

    renderOptionView();

    sectionTitle.textContent =
      currentMaterial.name?.[currentLang]
      || currentMaterial.name?.en;

    return;

  }


  if (
    currentMaterial &&
    optionList &&
    !optionList.classList.contains(
      "hidden"
    )
  ) {

    currentMaterial = null;

    selectedOptions = {};

    hideAllViews();

    materialList.classList.remove(
      "hidden"
    );

    renderMaterials(
      currentStage
    );

    sectionTitle.textContent =
      getStageName(
        currentStage
      );

    return;

  }


  if (currentStage) {

    currentStage = null;

    currentMaterial = null;

    selectedOptions = {};

    showHome();

    return;

  }


  showHome();

}


/* =========================================================
   ANDROID / BROWSER BACK
========================================================= */

window.addEventListener(
  "popstate",
  () => {

    goBack();

  }
);


/* =========================================================
   NAVIGATION
========================================================= */

function handleNavigation(nav) {

  switch (nav) {

    case "home":
      showHome();
      break;

    case "stages":

      if (currentStage) {

        openStage(
          currentStage
        );

      } else {

        showHome();

      }

      break;

    case "estimate":
      showEstimate();
      break;

    case "settings":
      showSettings();
      break;

  }

}


function setActiveNav(nav) {

  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.nav === nav
      );

    });

}


/* =========================================================
   SETTINGS
========================================================= */

function showSettings() {

  hideAllViews();

  sectionTitle.textContent =
    "⚙️ Settings";

  backBtn.classList.add(
    "hidden"
  );

  setActiveNav("settings");


  if (stageList) {

    stageList.classList.remove(
      "hidden"
    );


    stageList.innerHTML = `

      <div class="details-card">

        <h3>
          ⚙️ Settings
        </h3>

        <div class="form-group">

          <label>
            Language
          </label>

          <button
            type="button"
            class="secondary-btn"
            id="settingsLanguageBtn"
          >
            ${
              currentLang === "hi"
                ? "Hindi"
                : "English"
            }
          </button>

        </div>

        <div class="form-group">

          <label>
            Estimate Items
          </label>

          <strong>
            ${selectedItems.length}
          </strong>

        </div>

      </div>

    `;


    document
      .getElementById(
        "settingsLanguageBtn"
      )
      ?.addEventListener(
        "click",
        toggleLanguage
      );

  }

}


/* =========================================================
   POPUP
========================================================= */

function openPopup(
  title,
  content
) {

  if (!popupOverlay)
    return;


  popupTitle.textContent =
    title;


  popupContent.innerHTML =
    content;


  popupOverlay.classList.remove(
    "hidden"
  );

}


function closePopup() {

  if (!popupOverlay)
    return;

  popupOverlay.classList.add(
    "hidden"
  );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   GLOBAL DEBUG HELPERS
========================================================= */

window.ProjectList = {

  getItems() {

    return selectedItems;

  },

  clear() {

    selectedItems = [];

    saveEstimate();

    updateEstimateView();

  },

  refresh() {

    updateMaterialCount();

    showHome();

  }

};


/* =========================================================
   DATABASE STATUS
========================================================= */

console.log(
  "Sandeep ElectroFix — Project List Engine Loaded"
);

console.log(
  "Language:",
  currentLang
);

console.log(
  "Materials:",
  window.ESTIMATE_LIST?.length || 0
);

console.log(
  "Estimate Items:",
  selectedItems.length
);
