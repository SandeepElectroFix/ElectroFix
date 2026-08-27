/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST
   MAIN JAVASCRIPT
   APP ENGINE
========================================================= */

(function () {

  "use strict";

  /* =======================================================
     GLOBAL STATE
  ======================================================= */

  let currentLang =
    localStorage.getItem("sandeepMaterialLang") || "hi";

  let selectedItems =
    JSON.parse(
      localStorage.getItem("sandeepEstimateItems") || "[]"
    );

  let currentStage = null;
  let currentMaterial = null;
  let currentValues = {};

  let navigationStack = [];


  /* =======================================================
     DOM HELPERS
  ======================================================= */

  const $ = (id) =>
    document.getElementById(id);


  const loadingScreen =
    $("loading-screen");

  const app =
    $("app");

  const stageList =
    $("stageList");

  const materialList =
    $("materialList");

  const optionList =
    $("optionList");

  const detailsView =
    $("detailsView");

  const estimateView =
    $("estimateView");

  const sectionTitle =
    $("sectionTitle");

  const backBtn =
    $("backBtn");

  const materialCount =
    $("materialCount");

  const searchInput =
    $("searchInput");

  const clearSearch =
    $("clearSearch");

  const languageBtn =
    $("languageBtn");

  const estimateBtn =
    $("estimateBtn");

  const pageTitle =
    $("pageTitle");


  /* =======================================================
     LANGUAGE
  ======================================================= */

  function getName(material) {

    if (!material || !material.name) {
      return "";
    }

    return (
      material.name[currentLang] ||
      material.name.en ||
      material.name.hi ||
      ""
    );

  }


  function getLabel(value) {

    const labels = {

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
      },

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

      colour: {
        en: "Colour",
        hi: "रंग"
      },

      color: {
        en: "Colour",
        hi: "रंग"
      },

      material: {
        en: "Material",
        hi: "मटेरियल"
      },

      module: {
        en: "Module",
        hi: "मॉड्यूल"
      },

      amp: {
        en: "Ampere",
        hi: "एम्पियर"
      },

      voltage: {
        en: "Voltage",
        hi: "वोल्टेज"
      },

      wattage: {
        en: "Wattage",
        hi: "वॉटेज"
      },

      length: {
        en: "Length",
        hi: "लंबाई"
      },

      shape: {
        en: "Shape",
        hi: "शेप"
      },

      door: {
        en: "Door",
        hi: "डोर"
      },

      phase: {
        en: "Phase",
        hi: "फेज"
      },

      sensitivity: {
        en: "Sensitivity",
        hi: "सेंसिटिविटी"
      },

      base: {
        en: "Base",
        hi: "बेस"
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
        en: "Cutout Size",
        hi: "कटआउट साइज"
      },

      diameter: {
        en: "Diameter",
        hi: "डायमीटर"
      },

      depth: {
        en: "Depth",
        hi: "डेप्थ"
      },

      ways: {
        en: "Ways",
        hi: "वे"
      },

      hookRod: {
        en: "Hook Rod",
        hi: "हुक रॉड"
      },

      conduitSize: {
        en: "Conduit Size",
        hi: "कंड्यूट साइज"
      },

      cableSize: {
        en: "Cable Size",
        hi: "केबल साइज"
      },

      studSize: {
        en: "Stud Size",
        hi: "स्टड साइज"
      },

      sizeDisplay: {
        en: "Size",
        hi: "साइज"
      },

      rate: {
        en: "Rate",
        hi: "रेट"
      }

    };

    return (
      labels[value]?.[currentLang] ||
      labels[value]?.en ||
      value
    );

  }


  /* =======================================================
     STAGE NAMES
  ======================================================= */

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
      en: "Stage 5 — False Ceiling Wiring Material",
      hi: "स्टेज 5 — फॉल्स सीलिंग वायरिंग मटेरियल"
    }

  ];


  /* =======================================================
     LOADING SCREEN
  ======================================================= */

  function startLoading() {

    setTimeout(function () {

      if (loadingScreen) {
        loadingScreen.classList.add("hidden");
      }

      if (app) {
        app.classList.remove("hidden");
      }

      initializeApp();

    }, 700);

  }


  /* =======================================================
     INITIALIZE
  ======================================================= */

  function initializeApp() {

    if (
      window.getMaterialCount &&
      materialCount
    ) {

      materialCount.textContent =
        window.getMaterialCount();

    }

    if (languageBtn) {

      languageBtn.textContent =
        currentLang === "hi"
          ? "EN"
          : "HI";

    }

    renderStages();

    updateEstimateView();

  }


  /* =======================================================
     HIDE ALL MAIN VIEWS
  ======================================================= */

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


  /* =======================================================
     RENDER STAGES
  ======================================================= */

  function renderStages() {

    hideAllViews();

    if (!stageList) return;

    stageList.classList.remove("hidden");

    currentStage = null;
    currentMaterial = null;

    if (backBtn) {
      backBtn.classList.add("hidden");
    }

    if (sectionTitle) {

      sectionTitle.textContent =
        currentLang === "hi"
          ? "⚡ प्रोजेक्ट स्टेज"
          : "⚡ Project Stages";

    }

    stageList.innerHTML = "";

    stages.forEach(function (stage) {

      const materials =
        window.getMaterialsByStage
          ? window.getMaterialsByStage(stage.id)
          : [];

      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "stage-card";

      card.innerHTML = `
        <div class="stage-card-icon">⚡</div>

        <div class="stage-card-content">

          <strong>
            ${stage[currentLang] || stage.en}
          </strong>

          <small>
            ${materials.length}
            ${currentLang === "hi" ? "मटेरियल" : "Materials"}
          </small>

        </div>

        <span class="stage-arrow">›</span>
      `;

      card.addEventListener(
        "click",
        function () {

          navigationStack = ["stages"];

          renderMaterials(stage.id);

        }
      );

      stageList.appendChild(card);

    });

  }


  /* =======================================================
     RENDER MATERIALS
  ======================================================= */

  function renderMaterials(stageId) {

    currentStage = stageId;

    hideAllViews();

    if (!materialList) return;

    materialList.classList.remove("hidden");

    if (backBtn) {
      backBtn.classList.remove("hidden");
    }

    const stage =
      stages.find(
        item => item.id === stageId
      );

    if (sectionTitle) {

      sectionTitle.textContent =
        stage
          ? stage[currentLang] || stage.en
          : "Materials";

    }

    materialList.innerHTML = "";

    const materials =
      window.getMaterialsByStage
        ? window.getMaterialsByStage(stageId)
        : [];

    if (!materials.length) {

      materialList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📦</div>
          <h4>
            ${
              currentLang === "hi"
                ? "इस स्टेज में कोई मटेरियल नहीं है"
                : "No materials found"
            }
          </h4>
        </div>
      `;

      return;

    }


    materials.forEach(function (material) {

      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "material-card";

      card.innerHTML = `
        <div class="material-icon">🔌</div>

        <div class="material-content">

          <strong>
            ${getName(material)}
          </strong>

          <small>
            ${
              material.flow
                ? material.flow
                    .filter(
                      x =>
                        x !== "quantity" &&
                        x !== "unit" &&
                        x !== "brand"
                    )
                    .map(getLabel)
                    .join(" • ")
                : ""
            }
          </small>

        </div>

        <span class="material-arrow">›</span>
      `;

      card.addEventListener(
        "click",
        function () {

          openMaterial(material);

        }
      );

      materialList.appendChild(card);

    });

  }


  /* =======================================================
     OPEN MATERIAL
  ======================================================= */

  function openMaterial(material) {

    currentMaterial = material;

    currentValues = {};

    navigationStack.push(
      "material:" + material.id
    );

    if (material.flow) {

      const firstStep =
        material.flow.find(
          step =>
            step !== "quantity" &&
            step !== "unit" &&
            step !== "brand"
        );

      if (firstStep) {

        renderOptionStep(firstStep);

        return;

      }

    }

    renderDetails();

  }


  /* =======================================================
     RENDER OPTION STEP
  ======================================================= */

  function renderOptionStep(step) {

    hideAllViews();

    if (!optionList || !currentMaterial)
      return;

    optionList.classList.remove("hidden");

    if (backBtn) {
      backBtn.classList.remove("hidden");
    }

    if (sectionTitle) {

      sectionTitle.textContent =
        getName(currentMaterial) +
        " — " +
        getLabel(step);

    }

    optionList.innerHTML = "";

    let values =
      currentMaterial[step];

    const pendingKey =
      step + "Pending";

    const userInputKey =
      step + "UserInput";

    /* -----------------------------------------------------
       User input
    ----------------------------------------------------- */

    if (
      currentMaterial[userInputKey] === true
    ) {

      const wrapper =
        document.createElement("div");

      wrapper.className =
        "option-input-wrapper";

      wrapper.innerHTML = `
        <div class="form-group">

          <label>
            ${getLabel(step)}
          </label>

          <input
            id="customOptionInput"
            type="text"
            placeholder="${
              currentLang === "hi"
                ? "यहाँ दर्ज करें"
                : "Enter here"
            }"
          >

        </div>

        <button
          id="customOptionBtn"
          class="primary-btn"
          type="button"
        >
          ${
            currentLang === "hi"
              ? "आगे बढ़ें"
              : "Continue"
          }
        </button>
      `;

      optionList.appendChild(wrapper);

      $("customOptionBtn")
        ?.addEventListener(
          "click",
          function () {

            const input =
              $("customOptionInput");

            if (!input || !input.value.trim()) {

              alert(
                currentLang === "hi"
                  ? "कृपया जानकारी दर्ज करें"
                  : "Please enter a value"
              );

              return;

            }

            currentValues[step] =
              input.value.trim();

            goNextStep(step);

          }
        );

      return;

    }


    /* -----------------------------------------------------
       Pending data
    ----------------------------------------------------- */

    if (
      currentMaterial[pendingKey] === true
    ) {

      const wrapper =
        document.createElement("div");

      wrapper.className =
        "option-input-wrapper";

      wrapper.innerHTML = `
        <div class="form-group">

          <label>
            ${getLabel(step)}
          </label>

          <input
            id="pendingOptionInput"
            type="text"
            placeholder="${
              currentLang === "hi"
                ? "दर्ज करें"
                : "Enter value"
            }"
          >

        </div>

        <button
          id="pendingOptionBtn"
          class="primary-btn"
          type="button"
        >
          ${
            currentLang === "hi"
              ? "आगे बढ़ें"
              : "Continue"
          }
        </button>
      `;

      optionList.appendChild(wrapper);

      $("pendingOptionBtn")
        ?.addEventListener(
          "click",
          function () {

            const input =
              $("pendingOptionInput");

            if (!input || !input.value.trim()) {

              alert(
                currentLang === "hi"
                  ? "कृपया जानकारी दर्ज करें"
                  : "Please enter a value"
              );

              return;

            }

            currentValues[step] =
              input.value.trim();

            goNextStep(step);

          }
        );

      return;

    }


    /* -----------------------------------------------------
       Normal options
    ----------------------------------------------------- */

    if (!Array.isArray(values)) {
      values = [];
    }

    if (!values.length) {

      goNextStep(step);

      return;

    }


    values.forEach(function (value) {

      const button =
        document.createElement("button");

      button.type = "button";
      button.className = "option-card";

      button.innerHTML = `
        <span>${value}</span>
        <b>›</b>
      `;

      button.addEventListener(
        "click",
        function () {

          currentValues[step] =
            value;

          goNextStep(step);

        }
      );

      optionList.appendChild(button);

    });

  }


  /* =======================================================
     NEXT STEP
  ======================================================= */

  function goNextStep(currentStep) {

    if (!currentMaterial)
      return;

    const flow =
      currentMaterial.flow || [];

    const index =
      flow.indexOf(currentStep);

    let nextStep = null;

    for (
      let i = index + 1;
      i < flow.length;
      i++
    ) {

      const step =
        flow[i];

      if (
        step === "quantity" ||
        step === "unit" ||
        step === "brand"
      ) {

        continue;

      }

      nextStep = step;
      break;

    }

    if (nextStep) {

      renderOptionStep(nextStep);

    } else {

      renderDetails();

    }

  }


  /* =======================================================
     RENDER DETAILS
  ======================================================= */

  function renderDetails() {

    hideAllViews();

    if (!detailsView || !currentMaterial)
      return;

    detailsView.classList.remove("hidden");

    if (backBtn) {
      backBtn.classList.remove("hidden");
    }

    if (sectionTitle) {

      sectionTitle.textContent =
        currentLang === "hi"
          ? "मटेरियल डिटेल्स"
          : "Material Details";

    }

    const selectedName =
      $("selectedMaterialName");

    if (selectedName) {

      selectedName.textContent =
        getName(currentMaterial);

    }

    renderDynamicForm();

    renderUnits();

    renderBrands();

    resetQuantityRate();

  }


  /* =======================================================
     DYNAMIC FORM SUMMARY
  ======================================================= */

  function renderDynamicForm() {

    const dynamicForm =
      $("dynamicForm");

    if (!dynamicForm || !currentMaterial)
      return;

    dynamicForm.innerHTML = "";

    const flow =
      currentMaterial.flow || [];

    const fields =
      flow.filter(
        step =>
          step !== "quantity" &&
          step !== "unit" &&
          step !== "brand"
      );

    fields.forEach(function (field) {

      const value =
        currentValues[field];

      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        return;
      }

      const row =
        document.createElement("div");

      row.className =
        "selection-summary";

      row.innerHTML = `
        <span>
          ${getLabel(field)}
        </span>

        <strong>
          ${value}
        </strong>
      `;

      dynamicForm.appendChild(row);

    });

  }


  /* =======================================================
     UNITS
  ======================================================= */

  function renderUnits() {

    const select =
      $("unitSelect");

    if (!select || !currentMaterial)
      return;

    select.innerHTML = `
      <option value="">
        ${
          currentLang === "hi"
            ? "यूनिट चुनें"
            : "Select Unit"
        }
      </option>
    `;

    const units =
      currentMaterial.units || [];

    units.forEach(function (unit) {

      const option =
        document.createElement("option");

      option.value = unit;
      option.textContent = unit;

      select.appendChild(option);

    });

  }


  /* =======================================================
     BRANDS
  ======================================================= */

  function renderBrands() {

    const group =
      $("brandGroup");

    const select =
      $("brandSelect");

    if (!group || !select || !currentMaterial)
      return;

    const hasBrand =
      currentMaterial.flow?.includes("brand");

    if (!hasBrand) {

      group.classList.add("hidden");

      return;

    }

    group.classList.remove("hidden");

    select.innerHTML = `
      <option value="">
        ${
          currentLang === "hi"
            ? "ब्रांड चुनें"
            : "Select Brand"
        }
      </option>
    `;

    const brands =
      currentMaterial.brands ||
      [
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

    brands.forEach(function (brand) {

      const option =
        document.createElement("option");

      option.value = brand;
      option.textContent = brand;

      select.appendChild(option);

    });

  }


  /* =======================================================
     QUANTITY + RATE
  ======================================================= */

  function resetQuantityRate() {

    const quantity =
      $("quantityInput");

    const rate =
      $("rateInput");

    const unit =
      $("unitSelect");

    const brand =
      $("brandSelect");

    if (quantity)
      quantity.value = "";

    if (rate)
      rate.value = "";

    if (unit)
      unit.value = "";

    if (brand)
      brand.value = "";

    updateAmount();

  }


  function updateAmount() {

    const quantity =
      parseFloat(
        $("quantityInput")?.value
      ) || 0;

    const rate =
      parseFloat(
        $("rateInput")?.value
      ) || 0;

    const amount =
      quantity * rate;

    const preview =
      $("amountPreview");

    if (preview) {

      preview.textContent =
        "₹" +
        amount.toFixed(2);

    }

  }


  /* =======================================================
     ADD TO ESTIMATE
  ======================================================= */

  function addToEstimate() {

    if (!currentMaterial)
      return;

    const quantity =
      parseFloat(
        $("quantityInput")?.value
      );

    const unit =
      $("unitSelect")?.value;

    const rate =
      parseFloat(
        $("rateInput")?.value
      );

    const brand =
      $("brandSelect")?.value || "";

    if (
      !quantity ||
      quantity <= 0
    ) {

      alert(
        currentLang === "hi"
          ? "कृपया मात्रा दर्ज करें"
          : "Please enter quantity"
      );

      return;

    }

    if (!unit) {

      alert(
        currentLang === "hi"
          ? "कृपया यूनिट चुनें"
          : "Please select unit"
      );

      return;

    }

    if (
      Number.isNaN(rate) ||
      rate < 0
    ) {

      alert(
        currentLang === "hi"
          ? "कृपया सही रेट दर्ज करें"
          : "Please enter a valid rate"
      );

      return;

    }

    const item = {

      id:
        Date.now().toString(),

      materialId:
        currentMaterial.id,

      materialName:
        getName(currentMaterial),

      values:
        { ...currentValues },

      quantity,
      unit,
      brand,
      rate,

      amount:
        quantity * rate

    };

    selectedItems.push(item);

    saveEstimate();

    alert(
      currentLang === "hi"
        ? "मटेरियल Estimate में जोड़ दिया गया"
        : "Material added to estimate"
    );

    showEstimate();

  }


  /* =======================================================
     SAVE ESTIMATE
  ======================================================= */

  function saveEstimate() {

    localStorage.setItem(
      "sandeepEstimateItems",
      JSON.stringify(selectedItems)
    );

  }


  /* =======================================================
     ESTIMATE VIEW
  ======================================================= */

  function showEstimate() {

    hideAllViews();

    if (!estimateView)
      return;

    estimateView.classList.remove("hidden");

    if (backBtn) {
      backBtn.classList.remove("hidden");
    }

    if (sectionTitle) {

      sectionTitle.textContent =
        currentLang === "hi"
          ? "📋 Estimate"
          : "📋 Estimate";

    }

    updateEstimateView();

  }


  function updateEstimateView() {

    const list =
      $("selectedItemsList");

    const empty =
      $("emptyEstimate");

    const totalCard =
      $("totalCard");

    const actions =
      $("estimateActions");

    const grandTotal =
      $("grandTotal");

    if (!list)
      return;

    list.innerHTML = "";

    if (!selectedItems.length) {

      if (empty)
        empty.classList.remove("hidden");

      if (totalCard)
        totalCard.classList.add("hidden");

      if (actions)
        actions.classList.add("hidden");

      return;

    }

    if (empty)
      empty.classList.add("hidden");

    let total = 0;

    selectedItems.forEach(
      function (item, index) {

        total +=
          Number(item.amount) || 0;

        const card =
          document.createElement("div");

        card.className =
          "estimate-item";

        const options =
          Object.entries(
            item.values || {}
          )
          .map(
            ([key, value]) =>
              `<small>${getLabel(key)}: ${value}</small>`
          )
          .join("");

        card.innerHTML = `
          <div class="estimate-item-main">

            <strong>
              ${index + 1}. ${item.materialName}
            </strong>

            <div class="estimate-options">
              ${options}
            </div>

            <small>
              ${item.quantity}
              ${item.unit}
              ${
                item.brand
                  ? " • " + item.brand
                  : ""
              }
            </small>

          </div>

          <div class="estimate-item-right">

            <strong>
              ₹${Number(item.amount).toFixed(2)}
            </strong>

            <button
              type="button"
              class="delete-estimate-item"
              data-id="${item.id}"
            >
              ×
            </button>

          </div>
        `;

        list.appendChild(card);

      }
    );


    if (totalCard)
      totalCard.classList.remove("hidden");

    if (actions)
      actions.classList.remove("hidden");

    if (grandTotal) {

      grandTotal.textContent =
        "₹" + total.toFixed(2);

    }

    document
      .querySelectorAll(
        ".delete-estimate-item"
      )
      .forEach(
        function (button) {

          button.addEventListener(
            "click",
            function () {

              const id =
                button.dataset.id;

              selectedItems =
                selectedItems.filter(
                  item =>
                    item.id !== id
                );

              saveEstimate();

              updateEstimateView();

            }
          );

        }
      );

  }


  /* =======================================================
     CLEAR ESTIMATE
  ======================================================= */

  function clearEstimate() {

    if (!selectedItems.length)
      return;

    const confirmed =
      confirm(
        currentLang === "hi"
          ? "क्या आप पूरा estimate साफ करना चाहते हैं?"
          : "Clear the complete estimate?"
      );

    if (!confirmed)
      return;

    selectedItems = [];

    saveEstimate();

    updateEstimateView();

  }


  /* =======================================================
     SEARCH
  ======================================================= */

  function performSearch() {

    const query =
      searchInput?.value.trim() || "";

    if (!query) {

      renderStages();

      return;

    }

    hideAllViews();

    if (!materialList)
      return;

    materialList.classList.remove("hidden");

    if (backBtn)
      backBtn.classList.remove("hidden");

    if (sectionTitle) {

      sectionTitle.textContent =
        currentLang === "hi"
          ? "🔍 खोज परिणाम"
          : "🔍 Search Results";

    }

    const materials =
      window.searchMaterials
        ? window.searchMaterials(query)
        : [];

    materialList.innerHTML = "";

    if (!materials.length) {

      materialList.innerHTML = `
        <div class="empty-state">

          <div class="empty-icon">
            🔍
          </div>

          <h4>
            ${
              currentLang === "hi"
                ? "कोई मटेरियल नहीं मिला"
                : "No material found"
            }
          </h4>

        </div>
      `;

      return;

    }

    materials.forEach(function (material) {

      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "material-card";

      card.innerHTML = `
        <div class="material-icon">🔌</div>

        <div class="material-content">

          <strong>
            ${getName(material)}
          </strong>

          <small>
            ${
              material.stage
                .replace("stage", "Stage ")
            }
          </small>

        </div>

        <span class="material-arrow">›</span>
      `;

      card.addEventListener(
        "click",
        function () {

          openMaterial(material);

        }
      );

      materialList.appendChild(card);

    });

  }


  /* =======================================================
     BACK BUTTON
  ======================================================= */

  function goBack() {

    if (
      currentMaterial &&
      optionList &&
      !optionList.classList.contains("hidden")
    ) {

      const flow =
        currentMaterial.flow || [];

      const currentStep =
        navigationStack
          .filter(
            item =>
              item.startsWith("step:")
          )
          .pop();

      if (currentStep) {

        navigationStack.pop();

        const previous =
          navigationStack
            .filter(
              item =>
                item.startsWith("step:")
            )
            .pop();

        if (previous) {

          renderOptionStep(
            previous.replace(
              "step:",
              ""
            )
          );

          return;

        }

      }

      renderMaterials(
        currentStage
      );

      return;

    }


    if (
      currentMaterial &&
      detailsView &&
      !detailsView.classList.contains("hidden")
    ) {

      currentMaterial = null;

      renderMaterials(
        currentStage
      );

      return;

    }


    if (
      currentStage &&
      materialList &&
      !materialList.classList.contains("hidden")
    ) {

      currentStage = null;

      renderStages();

      return;

    }


    renderStages();

  }


  /* =======================================================
     LANGUAGE TOGGLE
  ======================================================= */

  function toggleLanguage() {

    currentLang =
      currentLang === "hi"
        ? "en"
        : "hi";

    localStorage.setItem(
      "sandeepMaterialLang",
      currentLang
    );

    if (languageBtn) {

      languageBtn.textContent =
        currentLang === "hi"
          ? "EN"
          : "HI";

    }

    if (pageTitle) {

      pageTitle.textContent =
        currentLang === "hi"
          ? "Project List"
          : "Project List";

    }

    renderStages();

  }


  /* =======================================================
     FINAL ESTIMATE
  ======================================================= */

  function finalEstimate() {

    if (!selectedItems.length) {

      alert(
        currentLang === "hi"
          ? "पहले material estimate में जोड़ें"
          : "Add materials to the estimate first"
      );

      return;

    }

    let text =
      "SANDEEP ELECTROFIX\n";

    text +=
      "PROJECT ESTIMATE\n\n";

    selectedItems.forEach(
      function (item, index) {

        text +=
          `${index + 1}. ${item.materialName}\n`;

        Object.entries(
          item.values || {}
        )
        .forEach(
          ([key, value]) => {

            text +=
              `${getLabel(key)}: ${value}\n`;

          }
        );

        text +=
          `Qty: ${item.quantity} ${item.unit}\n`;

        if (item.brand) {

          text +=
            `Brand: ${item.brand}\n`;

        }

        text +=
          `Rate: ₹${Number(item.rate).toFixed(2)}\n`;

        text +=
          `Amount: ₹${Number(item.amount).toFixed(2)}\n\n`;

      }
    );

    const total =
      selectedItems.reduce(
        (sum, item) =>
          sum + (Number(item.amount) || 0),
        0
      );

    text +=
      `GRAND TOTAL: ₹${total.toFixed(2)}`;

    alert(text);

  }


  /* =======================================================
     EVENT LISTENERS
  ======================================================= */

  if (languageBtn) {

    languageBtn.addEventListener(
      "click",
      toggleLanguage
    );

  }


  if (estimateBtn) {

    estimateBtn.addEventListener(
      "click",
      showEstimate
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
      performSearch
    );

  }


  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      function () {

        if (searchInput)
          searchInput.value = "";

        renderStages();

      }
    );

  }


  const addEstimateBtn =
    $("addEstimateBtn");

  if (addEstimateBtn) {

    addEstimateBtn.addEventListener(
      "click",
      addToEstimate
    );

  }


  const quantityInput =
    $("quantityInput");

  const rateInput =
    $("rateInput");

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


  const clearEstimateBtn =
    $("clearEstimateBtn");

  if (clearEstimateBtn) {

    clearEstimateBtn.addEventListener(
      "click",
      clearEstimate
    );

  }


  const finalEstimateBtn =
    $("finalEstimateBtn");

  if (finalEstimateBtn) {

    finalEstimateBtn.addEventListener(
      "click",
      finalEstimate
    );

  }


  /* =======================================================
     BOTTOM NAVIGATION
  ======================================================= */

  document
    .querySelectorAll(".nav-item")
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const nav =
              button.dataset.nav;

            document
              .querySelectorAll(".nav-item")
              .forEach(
                item =>
                  item.classList.remove(
                    "active"
                  )
              );

            button.classList.add(
              "active"
            );


            if (nav === "home") {

              renderStages();

            }

            else if (nav === "stages") {

              renderStages();

            }

            else if (nav === "estimate") {

              showEstimate();

            }

            else if (nav === "settings") {

              alert(
                currentLang === "hi"
                  ? "Settings आगे जोड़े जाएंगे।"
                  : "Settings will be added next."
              );

            }

          }
        );

      }
    );


  /* =======================================================
     BROWSER / ANDROID BACK
  ======================================================= */

  window.addEventListener(
    "popstate",
    function () {

      goBack();

    }
  );


  /* =======================================================
     START APP
  ======================================================= */

  if (
    document.readyState === "complete"
  ) {

    startLoading();

  } else {

    window.addEventListener(
      "load",
      startLoading,
      { once: true }
    );

  }


})();
