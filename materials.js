/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT LIST — MASTER MATERIAL DATABASE
   FINAL VERSION
   TOTAL MATERIALS = 69
========================================================= */

window.ESTIMATE_LIST = [

  /* =======================================================
     STAGE 1 — SLAB CONDUIT INSTALLATION
  ======================================================= */

  {
    id: "s1-pipe",
    stage: "stage1",
    name: {
      en: "Pipe",
      hi: "पाइप"
    },
    flow: ["type", "size", "quantity", "unit", "brand"],

    type: [
      "Heavy",
      "Medium",
      "Light"
    ],

    size: [
      "20mm",
      "25mm",
      "32mm",
      "40mm"
    ],

    units: [
      "pcs",
      "bndl",
      "doz"
    ],

    brands: [
      "Polycab",
      "Finolex",
      "Havells",
      "AKG",
      "Precision",
      "Other Brand",
      "Non Brand / Local",
      "Skip Brand"
    ]
  },


  {
    id: "s1-bend",
    stage: "stage1",
    name: {
      en: "Bend",
      hi: "बेंड"
    },
    flow: [
      "type",
      "subType",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Heavy",
      "Medium",
      "Light"
    ],

    subType: [
      "Short Bend",
      "Long Bend"
    ],

    size: [
      "20mm",
      "25mm",
      "32mm",
      "40mm"
    ],

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s1-junction-box",
    stage: "stage1",
    name: {
      en: "Junction Box",
      hi: "जंक्शन बॉक्स"
    },

    flow: [
      "type",
      "shape",
      "material",
      "conduitSize",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Normal Junction Box",
      "Deep Junction Box"
    ],

    shape: [
      "1 Way",
      "2 Way Straight",
      "2 Way Angle",
      "3 Way T-Type",
      "4 Way Cross Type",
      "Y-Type",
      "H-Type",
      "U-Type",
      "V-Type"
    ],

    material: [
      "PVC",
      "GI Metal"
    ],

    conduitSize: [
      "20mm",
      "25mm"
    ],

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s1-fan-box",
    stage: "stage1",
    name: {
      en: "Fan Box",
      hi: "फैन बॉक्स"
    },

    flow: [
      "material",
      "ways",
      "depth",
      "hookRod",
      "conduitSize",
      "quantity",
      "unit",
      "brand"
    ],

    material: [
      "MS Metal",
      "PVC"
    ],

    ways: [
      "4 Way",
      "6 Way",
      "8 Way"
    ],

    depth: [
      '2.5"',
      '3"'
    ],

    hookRod: [
      "8mm",
      "10mm"
    ],

    conduitSize: [
      "20mm",
      "25mm"
    ],

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s1-concealed-light-box",
    stage: "stage1",
    name: {
      en: "Concealed Light Box",
      hi: "कन्सील्ड लाइट बॉक्स"
    },

    flow: [
      "material",
      "depth",
      "diameter",
      "quantity",
      "unit",
      "brand"
    ],

    material: [
      "Heavy GI Metal Box",
      "Heavy PVC Box"
    ],

    depth: [
      '3"',
      '3.5"'
    ],

    diameter: [
      '3"',
      '4"'
    ],

    units: [
      "pcs",
      "pkt",
      "doz"
    ],

    brandMaster: true
  },


  {
    id: "s1-tape",
    stage: "stage1",
    name: {
      en: "Tape",
      hi: "टेप"
    },

    flow: [
      "quantity",
      "unit",
      "brand"
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s1-solvent-cement",
    stage: "stage1",
    name: {
      en: "Solvent Cement",
      hi: "सॉल्वेंट सीमेंट"
    },

    flow: [
      "quantity",
      "unit",
      "brand"
    ],

    units: [
      "ml",
      "l"
    ]
  },


  {
    id: "s1-neel-powder",
    stage: "stage1",
    name: {
      en: "Neel Powder",
      hi: "नील पाउडर"
    },

    flow: [
      "quantity",
      "unit",
      "brand"
    ],

    units: [
      "gm",
      "kg",
      "bag"
    ]
  },


  {
    id: "s1-binding-wire",
    stage: "stage1",
    name: {
      en: "Binding Wire",
      hi: "बाइंडिंग वायर"
    },

    flow: [
      "quantity",
      "unit",
      "brand"
    ],

    units: [
      "kg",
      "mtr"
    ]
  },


  {
    id: "s1-cable-tie",
    stage: "stage1",
    name: {
      en: "Cable Tie / Zip Tie",
      hi: "केबल टाई / जिप टाई"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    size: [
      "100mm",
      "150mm",
      "200mm",
      "250mm",
      "300mm",
      "400mm"
    ],

    units: [
      "pcs",
      "pkt"
    ]
  },


  /* =======================================================
     STAGE 2 — WALL CONDUIT INSTALLATION
  ======================================================= */

  {
    id: "s2-board",
    stage: "stage2",
    name: {
      en: "Board",
      hi: "बोर्ड"
    },

    flow: [
      "type",
      "module",
      "quantity",
      "unit"
    ],

    type: [
      "PVC",
      "GI Metal"
    ],

    module: [
      "2M",
      "3M",
      "4M",
      "6M",
      "8M Square",
      "8M Rectangular",
      "12M",
      "16M",
      "18M"
    ],

    units: [
      "Nos",
      "pcs"
    ]
  },


  {
    id: "s2-pipe",
    stage: "stage2",
    name: {
      en: "Pipe",
      hi: "पाइप"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Heavy",
      "Medium",
      "Light"
    ],

    size: [
      "20mm",
      "25mm",
      "32mm",
      "40mm"
    ],

    units: [
      "pcs",
      "bndl",
      "doz"
    ]
  },


  {
    id: "s2-bend",
    stage: "stage2",
    name: {
      en: "Bend",
      hi: "बेंड"
    },

    flow: [
      "type",
      "subType",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Heavy",
      "Medium",
      "Light"
    ],

    subType: [
      "Short Bend",
      "Long Bend"
    ],

    size: [
      "20mm",
      "25mm",
      "32mm",
      "40mm"
    ],

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s2-junction-box",
    stage: "stage2",
    name: {
      en: "Junction Box",
      hi: "जंक्शन बॉक्स"
    },

    flow: [
      "type",
      "shape",
      "material",
      "conduitSize",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Normal Junction Box",
      "Deep Junction Box"
    ],

    shape: [
      "1 Way",
      "2 Way Straight",
      "2 Way Angle",
      "3 Way T-Type",
      "4 Way Cross",
      "Y",
      "H",
      "U",
      "V"
    ],

    material: [
      "PVC",
      "GI Metal"
    ],

    conduitSize: [
      "20mm",
      "25mm"
    ],

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s2-mcb-box",
    stage: "stage2",
    name: {
      en: "MCB Box",
      hi: "MCB बॉक्स"
    },

    flow: [
      "material",
      "door",
      "phase",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    material: [
      "PVC",
      "Metal / Sheet Steel (CRCA)"
    ],

    door: [
      "Single",
      "Double",
      "Transparent (Acrylic)"
    ],

    phase: [
      "Single Phase",
      "Three Phase"
    ],

    size: [
      "2 Way",
      "4 Way",
      "6 Way",
      "8 Way",
      "10 Way",
      "12 Way",
      "16 Way",
      "18 Way",
      "24 Way"
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s2-cable-clip",
    stage: "stage2",
    name: {
      en: "Cable Clip",
      hi: "केबल क्लिप"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    size: [
      "4mm",
      "6mm",
      "8mm",
      "10mm",
      "12mm",
      "14mm",
      "16mm",
      "20mm",
      "25mm",
      "32mm"
    ],

    units: [
      "pcs",
      "pkt"
    ]
  },


  {
    id: "s2-tape",
    stage: "stage2",
    name: {
      en: "Tape",
      hi: "टेप"
    },

    flow: [
      "type",
      "quantity",
      "unit",
      "brand"
    ],

    typePending: true,

    units: [
      "pcs"
    ]
  },


  /* =======================================================
     STAGE 3 — WIRING INSTALLATION
  ======================================================= */

  {
    id: "s3-wire",
    stage: "stage3",
    name: {
      en: "Wire",
      hi: "वायर"
    },

    flow: [
      "type",
      "size",
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "FR",
      "HRFR",
      "FRLS",
      "XLPE"
    ],

    size: [
      "0.75 Sqmm",
      "1 Sqmm",
      "1.5 Sqmm",
      "2.5 Sqmm",
      "4 Sqmm",
      "6 Sqmm",
      "10 Sqmm"
    ],

    colours: [
      "Red",
      "Black",
      "Yellow",
      "Blue",
      "Green",
      "White",
      "Grey"
    ],

    units: [
      "mtr",
      "bndl"
    ]
  },


  {
    id: "s3-flexible-pipe",
    stage: "stage3",
    name: {
      en: "Flexible Pipe",
      hi: "फ्लेक्सिबल पाइप"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "PVC",
      "FMC (GI/SM)",
      "LFMC"
    ],

    size: [
      "16mm",
      "20mm",
      "25mm",
      "32mm"
    ],

    units: [
      "mtr",
      "bndl"
    ]
  },


  {
    id: "s3-electrical-tape",
    stage: "stage3",
    name: {
      en: "Electrical Tape",
      hi: "इलेक्ट्रिकल टेप"
    },

    flow: [
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    colours: [
      "Red",
      "Black",
      "Yellow",
      "Blue",
      "Green",
      "White",
      "Grey"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s3-fastener",
    stage: "stage3",
    name: {
      en: "Fastener",
      hi: "फास्टनर"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Wedge Anchor Fastener",
      "Pin Type Anchor",
      "Rawl Anchor Bolt",
      "Drop In Anchor",
      "J Hook Anchor",
      "Round Anchor Bolt"
    ],

    size: [
      "M4",
      "M5",
      "M6",
      "M8",
      "M10",
      "M12",
      "M16",
      "M20"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s3-steel-wire",
    stage: "stage3",
    name: {
      en: "Steel Wire / Spring Wire",
      hi: "स्टील वायर / स्प्रिंग वायर"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    sizePending: true,

    units: [
      "kg",
      "mtr"
    ]
  },


  /* =======================================================
     STAGE 4 — FINAL ELECTRICAL FITTINGS
  ======================================================= */

  {
    id: "s4-modular-plate",
    stage: "stage4",
    group: "modular",
    name: {
      en: "Modular Plate",
      hi: "मॉड्यूलर प्लेट"
    },

    flow: [
      "type",
      "module",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "PVC",
      "Mica"
    ],

    module: [
      "1M",
      "2M",
      "3M",
      "4M",
      "6M",
      "8M Horizontal",
      "8M Square / Vertical",
      "12M",
      "16M",
      "18M"
    ],

    sizeHidden: true,

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-switch",
    stage: "stage4",
    group: "modular",
    name: {
      en: "Switch",
      hi: "स्विच"
    },

    flow: [
      "type",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "1 Way",
      "2 Way",
      "Intermediate",
      "Bell Push"
    ],

    amp: [
      "6A",
      "10A",
      "16A",
      "20A",
      "25A"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-socket",
    stage: "stage4",
    group: "modular",
    name: {
      en: "Socket",
      hi: "सॉकेट"
    },

    flow: [
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    amp: [
      "5A",
      "6A",
      "10A",
      "16A",
      "20A",
      "25A"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-fan-regulator",
    stage: "stage4",
    group: "modular",
    name: {
      en: "Fan Regulator",
      hi: "फैन रेगुलेटर"
    },

    flow: [
      "type",
      "module",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Electronic",
      "Step Regulator"
    ],

    module: [
      "1M",
      "2M"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-dummy-blank",
    stage: "stage4",
    group: "modular",
    name: {
      en: "Dummy Switch / Blank Plate",
      hi: "डमी स्विच / ब्लैंक प्लेट"
    },

    flow: [
      "type",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Blank Plate",
      "Dummy Switch"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-neon-indicator",
    stage: "stage4",
    group: "modular",
    name: {
      en: "Neon Indicator",
      hi: "नियॉन इंडिकेटर"
    },

    flow: [
      "type",
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "LED",
      "Neon"
    ],

    colours: [
      "Red",
      "Green",
      "Yellow",
      "Blue",
      "White"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-dp-switch",
    stage: "stage4",
    group: "modular",
    name: {
      en: "DP Switch",
      hi: "DP स्विच"
    },

    flow: [
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    amp: [
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "63A"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  /* -------------------------------------------------------
     MCB & PROTECTION
  ------------------------------------------------------- */

  {
    id: "s4-mini-mcb",
    stage: "stage4",
    group: "protection",
    name: {
      en: "Mini MCB",
      hi: "मिनी MCB"
    },

    flow: [
      "type",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "B Curve",
      "C Curve",
      "D Curve"
    ],

    amp: [
      "0.5A",
      "1A",
      "1.6A",
      "2A",
      "3A",
      "4A",
      "6A",
      "8A",
      "10A",
      "13A",
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "50A",
      "63A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-sp-mcb",
    stage: "stage4",
    group: "protection",
    name: {
      en: "SP MCB",
      hi: "SP MCB"
    },

    flow: [
      "type",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "B Curve",
      "C Curve",
      "D Curve"
    ],

    amp: [
      "0.5A",
      "1A",
      "1.6A",
      "2A",
      "3A",
      "4A",
      "6A",
      "8A",
      "10A",
      "13A",
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "50A",
      "63A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-dp-mcb",
    stage: "stage4",
    group: "protection",
    name: {
      en: "DP MCB",
      hi: "DP MCB"
    },

    flow: [
      "type",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "B Curve",
      "C Curve",
      "D Curve"
    ],

    amp: [
      "0.5A",
      "1A",
      "1.6A",
      "2A",
      "3A",
      "4A",
      "6A",
      "8A",
      "10A",
      "13A",
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "50A",
      "63A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-tpn-mcb",
    stage: "stage4",
    group: "protection",
    name: {
      en: "TPN MCB",
      hi: "TPN MCB"
    },

    flow: [
      "type",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "B Curve",
      "C Curve",
      "D Curve"
    ],

    amp: [
      "0.5A",
      "1A",
      "1.6A",
      "2A",
      "3A",
      "4A",
      "6A",
      "8A",
      "10A",
      "13A",
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "50A",
      "63A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-mcb-changeover",
    stage: "stage4",
    group: "protection",
    name: {
      en: "MCB Changeover",
      hi: "MCB चेंजओवर"
    },

    flow: [
      "type",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Manual",
      "Automatic"
    ],

    amp: [
      "16A",
      "25A",
      "32A",
      "40A",
      "63A",
      "80A",
      "100A",
      "125A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-dp-isolator",
    stage: "stage4",
    group: "protection",
    name: {
      en: "DP Isolator",
      hi: "DP आइसोलेटर"
    },

    flow: [
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    amp: [
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "63A",
      "80A",
      "100A",
      "125A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-tpn-isolator",
    stage: "stage4",
    group: "protection",
    name: {
      en: "TPN Isolator",
      hi: "TPN आइसोलेटर"
    },

    flow: [
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    amp: [
      "16A",
      "20A",
      "25A",
      "32A",
      "40A",
      "63A",
      "80A",
      "100A",
      "125A"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-rccb",
    stage: "stage4",
    group: "protection",
    name: {
      en: "RCCB / RCD",
      hi: "RCCB / RCD"
    },

    flow: [
      "type",
      "amp",
      "sensitivity",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "AC",
      "A"
    ],

    amp: [
      "25A",
      "40A",
      "63A",
      "80A",
      "100A"
    ],

    sensitivity: [
      "30mA",
      "100mA",
      "300mA"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-mcb-box",
    stage: "stage4",
    group: "protection",
    name: {
      en: "MCB Box",
      hi: "MCB बॉक्स"
    },

    flow: [
      "material",
      "door",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    material: [
      "PVC",
      "Metal / Sheet Steel (CRCA)"
    ],

    door: [
      "Single",
      "Double",
      "Transparent (Acrylic)"
    ],

    size: [
      "2 Way",
      "4 Way",
      "6 Way",
      "8 Way",
      "10 Way",
      "12 Way",
      "16 Way",
      "18 Way",
      "24 Way"
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-kit-kat-fuse",
    stage: "stage4",
    group: "protection",
    name: {
      en: "Kit Kat Fuse",
      hi: "किट कैट फ्यूज"
    },

    flow: [
      "voltage",
      "amp",
      "quantity",
      "unit",
      "brand"
    ],

    voltage: [
      "250V",
      "415V"
    ],

    amp: [
      "5A",
      "10A",
      "15A",
      "20A",
      "25A",
      "30A",
      "40A",
      "50A",
      "60A",
      "80A",
      "100A"
    ],

    units: [
      "pcs"
    ]
  },


  /* -------------------------------------------------------
     FAN & CEILING
  ------------------------------------------------------- */

  {
    id: "s4-fan-sheet",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Fan Sheet",
      hi: "फैन शीट"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "PVC",
      "Mica"
    ],

    sizeHidden: true,

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s4-round-sheet",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Round Sheet",
      hi: "राउंड शीट"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "PVC",
      "Mica"
    ],

    sizeHidden: true,

    units: [
      "pcs",
      "pkt",
      "doz"
    ]
  },


  {
    id: "s4-fan-rod",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Fan Rod",
      hi: "फैन रॉड"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    size: [
      '9"',
      '12"',
      '15"',
      '18"',
      '24"',
      '30"',
      '36"',
      '42"',
      '48"'
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-fan-clamp",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Fan Clamp",
      hi: "फैन क्लैंप"
    },

    flow: [
      "type",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Heavy",
      "Normal"
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-holder",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Holder",
      hi: "होल्डर"
    },

    flow: [
      "type",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Batten Holder",
      "Angle Holder"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-ceiling-rose",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Ceiling Rose",
      hi: "सीलिंग रोज"
    },

    flow: [
      "quantity",
      "unit",
      "brand"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-chain",
    stage: "stage4",
    group: "fan",
    name: {
      en: "Chain",
      hi: "चेन"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    sizeUserInput: true,

    units: [
      "inch",
      "ft"
    ]
  },


  /* -------------------------------------------------------
     LIGHTING
  ------------------------------------------------------- */

  {
    id: "s4-led-bulb",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "LED Bulb",
      hi: "LED बल्ब"
    },

    flow: [
      "base",
      "wattage",
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    base: [
      "B22",
      "E27"
    ],

    wattage: [
      "3W",
      "5W",
      "7W",
      "9W",
      "12W",
      "15W",
      "20W"
    ],

    colours: [
      "Warm White 3000K",
      "Natural/Neutral 4000K",
      "Cool Daylight 6500K"
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-led-tube",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "LED Tube Light",
      hi: "LED ट्यूब लाइट"
    },

    flow: [
      "length",
      "wattage",
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    length: [
      "2 ft",
      "4 ft"
    ],

    wattage: [
      "10W",
      "20W",
      "40W",
      "50W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ],

    units: [
      "pcs",
      "bx"
    ]
  },


  {
    id: "s4-foot-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Foot Light",
      hi: "फुट लाइट"
    },

    flow: [
      "type",
      "wattage",
      "colour",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Recess / Concealed",
      "Surface"
    ],

    wattage: [
      "3W",
      "6W",
      "12W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ],

    sizeModelDependent: true
  },


  {
    id: "s4-up-down-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Up Down Light",
      hi: "अप डाउन लाइट"
    },

    flow: [
      "type",
      "wattage",
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Wall Light",
      "Outdoor Up-Down"
    ],

    wattage: [
      "3W × 2",
      "5W × 2",
      "10W",
      "12W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ]
  },


  {
    id: "s4-panel-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Panel Light",
      hi: "पैनल लाइट"
    },

    flow: [
      "mounting",
      "shape",
      "wattage",
      "colour",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    mounting: [
      "Recessed / Concealed",
      "Surface"
    ],

    shape: [
      "Round",
      "Square"
    ],

    wattage: [
      "6W",
      "8W",
      "12W",
      "15W",
      "18W",
      "22W",
      "24W",
      "36W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ],

    sizeModelDependent: true
  },


  {
    id: "s4-surface-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Surface Light",
      hi: "सरफेस लाइट"
    },

    flow: [
      "shape",
      "wattage",
      "colour",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    shape: [
      "Round",
      "Square"
    ],

    wattage: [
      "6W",
      "12W",
      "15W",
      "18W",
      "22W",
      "24W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ],

    sizeModelDependent: true
  },


  {
    id: "s4-cob-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "COB Light",
      hi: "COB लाइट"
    },

    flow: [
      "type",
      "shape",
      "wattage",
      "colour",
      "sizeCutout",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Recessed / Concealed",
      "Surface",
      "Spot"
    ],

    shape: [
      "Round",
      "Square"
    ],

    wattage: [
      "3W",
      "5W",
      "7W",
      "10W",
      "12W",
      "15W",
      "18W",
      "20W",
      "30W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ],

    sizeCutoutModelDependent: true
  },


  {
    id: "s4-down-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Down Light",
      hi: "डाउन लाइट"
    },

    flow: [
      "type",
      "shape",
      "wattage",
      "colour",
      "sizeCutout",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Recessed / Concealed",
      "Surface"
    ],

    shape: [
      "Round",
      "Square"
    ],

    wattage: [
      "3W",
      "5W",
      "7W",
      "10W",
      "12W",
      "15W",
      "18W",
      "22W",
      "24W"
    ],

    colours: [
      "3000K",
      "4000K",
      "6500K"
    ],

    sizeCutoutModelDependent: true
  },


  {
    id: "s4-cob-spot-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "COB Spot Light",
      hi: "COB स्पॉट लाइट"
    },

    flow: [
      "structure",
      "quantity",
      "unit",
      "brand"
    ],

    structurePending: true
  },


  {
    id: "s4-strip-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Strip Light",
      hi: "स्ट्रिप लाइट"
    },

    flow: [
      "ledDensity",
      "length",
      "voltage",
      "quantity",
      "unit",
      "brand"
    ],

    ledDensity: [
      "60 LED/m",
      "120 LED/m",
      "240 LED/m"
    ],

    length: [
      "5m",
      "10m"
    ],

    voltage: [
      "12V",
      "24V"
    ],

    units: [
      "roll"
    ]
  },


  {
    id: "s4-rope-light",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "Rope Light",
      hi: "रोप लाइट"
    },

    flow: [
      "supply",
      "colour",
      "ipRating",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    supply: [
      "AC 220V",
      "DC 12V",
      "DC 24V"
    ],

    colours: [
      "Warm White",
      "Cool White",
      "Red",
      "Green",
      "Blue",
      "Yellow/Amber",
      "Pink/Hot Pink",
      "Purple",
      "Ice Blue",
      "Orange",
      "RGB"
    ],

    ipRatingUserInput: true,

    sizeUserInput: true,

    units: [
      "m",
      "roll"
    ]
  },


  {
    id: "s4-led-profile-channel",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "LED Profile Channel",
      hi: "LED प्रोफाइल चैनल"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    typePending: true,

    sizePending: true,

    units: [
      "mtr",
      "pcs"
    ]
  },


  {
    id: "s4-led-strip-driver",
    stage: "stage4",
    group: "lighting",
    name: {
      en: "LED Strip Driver",
      hi: "LED स्ट्रिप ड्राइवर"
    },

    flow: [
      "type",
      "wattage",
      "quantity",
      "unit",
      "brand"
    ],

    typePending: true,

    wattagePending: true,

    units: [
      "pcs"
    ]
  },


  /* -------------------------------------------------------
     OTHER FINAL FITTINGS
  ------------------------------------------------------- */

  {
    id: "s4-door-bell",
    stage: "stage4",
    group: "other",
    name: {
      en: "Door Bell",
      hi: "डोर बेल"
    },

    flow: [
      "type",
      "quantity",
      "unit",
      "brand"
    ],

    typePending: true,

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-electrical-tape",
    stage: "stage4",
    group: "other",
    name: {
      en: "Electrical Tape",
      hi: "इलेक्ट्रिकल टेप"
    },

    flow: [
      "colour",
      "quantity",
      "unit",
      "brand"
    ],

    colours: [
      "Red",
      "Black",
      "Yellow",
      "Blue",
      "Green",
      "White",
      "Grey"
    ],

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-instant-glue",
    stage: "stage4",
    group: "other",
    name: {
      en: "Instant Glue",
      hi: "इंस्टेंट ग्लू"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    sizeUserInput: true,

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-araldite-glue",
    stage: "stage4",
    group: "other",
    name: {
      en: "Araldite Glue",
      hi: "अरालडाइट ग्लू"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    sizeUserInput: true,

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-pop",
    stage: "stage4",
    group: "other",
    name: {
      en: "POP",
      hi: "POP"
    },

    flow: [
      "type",
      "quantity",
      "unit",
      "brand"
    ],

    typeUserInput: true,

    units: [
      "kg",
      "bag"
    ]
  },


  {
    id: "s4-putty-blade",
    stage: "stage4",
    group: "other",
    name: {
      en: "Putty Blade / Patta",
      hi: "पुट्टी ब्लेड / पट्टा"
    },

    flow: [
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    sizeUserInput: true,

    units: [
      "pcs"
    ]
  },


  {
    id: "s4-fastener",
    stage: "stage4",
    group: "other",
    name: {
      en: "Fastener",
      hi: "फास्टनर"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Wedge Anchor Fastener",
      "Pin Type Anchor",
      "Rawl Anchor Bolt",
      "Drop In Anchor",
      "J Hook Anchor",
      "Round Anchor Bolt"
    ],

    size: [
      "M4",
      "M5",
      "M6",
      "M8",
      "M10",
      "M12",
      "M16",
      "M20"
    ],

    units: [
      "pcs",
      "bx",
      "doz"
    ]
  },


  {
    id: "s4-screw",
    stage: "stage4",
    group: "other",
    final: true,

    name: {
      en: "Screw",
      hi: "स्क्रू"
    },

    flow: [
      "type",
      "diameter",
      "length",
      "sizeDisplay",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Self Tapping",
      "Self Drilling"
    ],

    diameter: [
      "2.2 mm",
      "2.9 mm",
      "3.5 mm",
      "3.9 mm",
      "4.2 mm",
      "4.8 mm",
      "5.5 mm",
      "6.3 mm"
    ],

    length: [
      "6.5 mm",
      "8 mm",
      "9.5 mm",
      "13 mm",
      "16 mm",
      "19 mm",
      "22 mm",
      "25 mm",
      "32 mm",
      "38 mm",
      "45 mm",
      "50 mm",
      "63 mm",
      "75 mm"
    ],

    sizeDisplayFormat: "Diameter × Length",

    units: [
      "pkt"
    ]
  },


  {
    id: "s4-lug",
    stage: "stage4",
    group: "other",
    final: true,

    name: {
      en: "Lug",
      hi: "लग"
    },

    flow: [
      "type",
      "material",
      "cableSize",
      "studSize",
      "sizeDisplay",
      "quantity",
      "unit",
      "brand"
    ],

    type: [
      "Ring Type",
      "Pin Type",
      "Fork / Spade Type",
      "Butt Connector"
    ],

    material: [
      "CU",
      "ALU",
      "AL-CU"
    ],

    sizes: [
      "1.5×M4",
      "1.5×M5",
      "2.5×M4",
      "2.5×M5",
      "4×M6",
      "6×M6",
      "10×M6",
      "10×M8",
      "16×M8",
      "25×M10",
      "35×M10",
      "50×M12",
      "70×M12",
      "95×M12",
      "120×M12",
      "150×M12",
      "185×M12",
      "240×M12"
    ],

    sizeDisplayFormat: "Cable Size × Stud Size",

    quantityUserInput: true,

    units: [
      "pcs",
      "pkt",
      "box"
    ],

    brandMaster: true
  },


  {
    id: "s4-washer",
    stage: "stage4",
    group: "other",
    name: {
      en: "Washer",
      hi: "वॉशर"
    },

    flow: [
      "type",
      "size",
      "quantity",
      "unit",
      "brand"
    ],

    typePending: true,

    sizePending: true,

    units: [
      "gm",
      "kg"
    ]
  }

];


/* =========================================================
   DATABASE HELPERS
========================================================= */


/**
 * Get all materials
 */
window.getAllMaterials = function () {

  return window.ESTIMATE_LIST;

};


/**
 * Get materials by stage
 */
window.getMaterialsByStage = function (stageId) {

  return window.ESTIMATE_LIST.filter(
    material => material.stage === stageId
  );

};


/**
 * Get material by ID
 */
window.getMaterialById = function (materialId) {

  return window.ESTIMATE_LIST.find(
    material => material.id === materialId
  );

};


/**
 * Search materials
 */
window.searchMaterials = function (query) {

  const search =
    String(query || "")
      .trim()
      .toLowerCase();

  if (!search) {
    return window.ESTIMATE_LIST;
  }

  return window.ESTIMATE_LIST.filter(material => {

    const en =
      material.name?.en?.toLowerCase() || "";

    const hi =
      material.name?.hi?.toLowerCase() || "";

    return (
      en.includes(search) ||
      hi.includes(search)
    );

  });

};


/**
 * Count materials
 */
window.getMaterialCount = function () {

  return window.ESTIMATE_LIST.length;

};


/* =========================================================
   DATABASE VALIDATION
========================================================= */

console.log(
  "Sandeep ElectroFix — Material Database Loaded"
);

console.log(
  "Total Materials:",
  window.ESTIMATE_LIST.length
);
