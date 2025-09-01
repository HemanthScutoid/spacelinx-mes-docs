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
            { type: "doc", id: "plm/parts/editPart", label: "Edit Part" },
            { type: "doc", id: "plm/parts/newPart", label: "Create Part" },
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
        { type: "doc", id: "manufacturing/products", label: "Products" },
        {
          type: "category",
          label: "Guides",
          items: [
            { type: "doc", id: "manufacturing/guides", label: "Overview" },
            {
              type: "doc",
              id: "manufacturing/guidedetails",
              label: "Guide Details",
            },
          ],
        },
        {
          type: "category",
          label: "Work Orders",
          items: [
            { type: "doc", id: "manufacturing/workOrders", label: "Overview" },
            {
              type: "doc",
              id: "manufacturing/workOrderDetails",
              label: "Work Order Details",
            },
            {
              type: "doc",
              id: "manufacturing/workOrderSteps",
              label: "Work Order Steps",
            },
          ],
        },

        {
          type: "doc",
          id: "manufacturing/materialkits",
          label: "Material Kits",
        },
      ],
    },
    {
      type: "category",
      label: "Procurement",
      items: [
        {
          type: "doc",
          id: "procurement/purchaseorders",
          label: "Purchase Orders",
        },
        {
          type: "doc",
          id: "procurement/goodsreceipts",
          label: "Goods Receipts",
        },
        { type: "doc", id: "procurement/requisitions", label: "Requisitions" },
        { type: "doc", id: "procurement/vendors", label: "Vendors" },
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
