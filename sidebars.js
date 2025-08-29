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
            { type: "doc", id: "plm/parts", label: "Overview" },
            { type: "doc", id: "plm/editpart", label: "Edit Part" },
          ],
        },
        { type: "doc", id: "plm/eco", label: "ECO" },
        { type: "doc", id: "plm/tools", label: "Tools" },
        { type: "doc", id: "plm/machines", label: "Machines" },
      ],
    },
    {
      type: "category",
      label: "Manufacturing",
      items: [
        { type: "doc", id: "manufacturing/products", label: "Products" },
        { type: "doc", id: "manufacturing/guides", label: "Guides" },
        { type: "doc", id: "manufacturing/workOrders", label: "Work Orders" },
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
