// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "PLM",
      items: [
        {
          type: "category",
          label: "Parts",
          items: [
            { type: "doc", id: "plm/parts/parts", label: "Overview" },
            { type: "doc", id: "plm/parts/newPart", label: "Create Part" },
            { type: "doc", id: "plm/parts/editPart", label: "Edit Part" },
            { type: "doc", id: "plm/parts/bom", label: "BOM" },
          ],
        },
        {
          type: "category",
          label: "ECO",
          items: [
            { type: "doc", id: "plm/eco/eco", label: "Overview" },
            { type: "doc", id: "plm/eco/newEco", label: "Create ECO" },
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: [
            { type: "doc", id: "plm/tools/tools", label: "Overview" },
            { type: "doc", id: "plm/tools/newTool", label: "Create Tool" },
          ],
        },
        {
          type: "category",
          label: "Machines",
          items: [
            { type: "doc", id: "plm/machines/machines", label: "Overview" },
            {
              type: "doc",
              id: "plm/machines/newMachine",
              label: "Create Machine",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Manufacturing",
      items: [
        {
          type: "category",
          label: "Products",
          items: [
            {
              type: "doc",
              id: "manufacturing/products/products",
              label: "Overview",
            },
            {
              type: "doc",
              id: "manufacturing/products/newProduct",
              label: "New Product",
            },
          ],
        },
        {
          type: "category",
          label: "Guides",
          items: [
            {
              type: "doc",
              id: "manufacturing/guides/guides",
              label: "Overview",
            },
            {
              type: "doc",
              id: "manufacturing/guides/guidedetails",
              label: "Guide Details",
            },
            {
              type: "doc",
              id: "manufacturing/guides/newGuide",
              label: "Create Guide",
            },
          ],
        },
        {
          type: "category",
          label: "Work Orders",
          items: [
            {
              type: "doc",
              id: "manufacturing/workorders/workOrders",
              label: "Overview",
            },
            {
              type: "doc",
              id: "manufacturing/workorders/workOrderDetails",
              label: "Work Order Details",
            },
            {
              type: "doc",
              id: "manufacturing/workorders/workOrderSteps",
              label: "Work Order Steps",
            },
            {
              type: "doc",
              id: "manufacturing/workorders/newWorkOrder",
              label: "Create Workorder",
            },
          ],
        },
        {
          type: "category",
          label: "Material Kits",
          items: [
            {
              type: "doc",
              id: "manufacturing/materialkits/materialkits",
              label: "Material Kits",
            },
            {
              type: "doc",
              id: "manufacturing/materialkits/newMaterialKit",
              label: "Create Material Kit",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Procurement",
      items: [
        {
          type: "category",
          label: "Purchase Orders",
          items: [
            {
              type: "doc",
              id: "procurement/purchaseorders/purchaseorders",
              label: "Overview",
            },
            {
              type: "doc",
              id: "procurement/purchaseorders/newPurchaseOrder",
              label: "Create New PO",
            },
            {
              type: "doc",
              id: "procurement/purchaseorders/purchaseOrderDetails",
              label: "PO Details",
            },
            {
              type: "doc",
              id: "procurement/purchaseorders/editPurchaseOrder",
              label: "PO Line Items",
            },
          ],
        },
        {
          type: "doc",
          id: "procurement/goodsreceipts",
          label: "Goods Receipts",
        },
        {
          type: "doc",
          id: "procurement/requisitions",
          label: "Requisitions",
        },
        {
          type: "doc",
          id: "procurement/vendors",
          label: "Vendors",
        },
      ],
    },

    {
      type: "category",
      label: "Inventory",
      items: [
        { type: "doc", id: "inventory/partsInventory", label: "Parts" },
        { type: "doc", id: "inventory/goodsInventory", label: "Goods" },
        { type: "doc", id: "inventory/servicesInventory", label: "Services" },
        {
          type: "doc",
          id: "inventory/stockMovements",
          label: "Stock Movements",
        },
      ],
    },
  ],
};

export default sidebars;
