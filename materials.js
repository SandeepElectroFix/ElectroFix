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


 
