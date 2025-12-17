import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fce'),
    exact: true
  },
  {
    path: '/blog/2023/10/10/print-po-updates',
    component: ComponentCreator('/blog/2023/10/10/print-po-updates', 'ed7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/spacelinx-mes-introduction',
    component: ComponentCreator('/blog/spacelinx-mes-introduction', '047'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/aerospace',
    component: ComponentCreator('/blog/tags/aerospace', '6ee'),
    exact: true
  },
  {
    path: '/blog/tags/manufacturing',
    component: ComponentCreator('/blog/tags/manufacturing', '430'),
    exact: true
  },
  {
    path: '/blog/tags/mes',
    component: ComponentCreator('/blog/tags/mes', '590'),
    exact: true
  },
  {
    path: '/blog/tags/po',
    component: ComponentCreator('/blog/tags/po', 'bd8'),
    exact: true
  },
  {
    path: '/blog/tags/print',
    component: ComponentCreator('/blog/tags/print', '0f4'),
    exact: true
  },
  {
    path: '/blog/tags/spacelinx',
    component: ComponentCreator('/blog/tags/spacelinx', '6ee'),
    exact: true
  },
  {
    path: '/blog/tags/updates',
    component: ComponentCreator('/blog/tags/updates', 'cca'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b4c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '107'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e4a'),
            routes: [
              {
                path: '/docs/home',
                component: ComponentCreator('/docs/home', 'acc'),
                exact: true
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/goodsInventory/',
                component: ComponentCreator('/docs/inventory/goodsInventory/', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/goodsInventory/editGood',
                component: ComponentCreator('/docs/inventory/goodsInventory/editGood', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/goodsInventory/newGood',
                component: ComponentCreator('/docs/inventory/goodsInventory/newGood', 'b08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/partsInventory',
                component: ComponentCreator('/docs/inventory/partsInventory', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/servicesInventory/',
                component: ComponentCreator('/docs/inventory/servicesInventory/', 'fb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/servicesInventory/editService',
                component: ComponentCreator('/docs/inventory/servicesInventory/editService', 'ab7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/servicesInventory/newService',
                component: ComponentCreator('/docs/inventory/servicesInventory/newService', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/inventory/stockMovements',
                component: ComponentCreator('/docs/inventory/stockMovements', '262'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/guides/',
                component: ComponentCreator('/docs/manufacturing/guides/', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/guides/guidedetails',
                component: ComponentCreator('/docs/manufacturing/guides/guidedetails', 'c65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/guides/newGuide',
                component: ComponentCreator('/docs/manufacturing/guides/newGuide', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/materialkits/',
                component: ComponentCreator('/docs/manufacturing/materialkits/', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/materialkits/newMaterialKit',
                component: ComponentCreator('/docs/manufacturing/materialkits/newMaterialKit', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/products/',
                component: ComponentCreator('/docs/manufacturing/products/', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/products/newProduct',
                component: ComponentCreator('/docs/manufacturing/products/newProduct', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/workorders/',
                component: ComponentCreator('/docs/manufacturing/workorders/', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/workorders/newWorkOrder',
                component: ComponentCreator('/docs/manufacturing/workorders/newWorkOrder', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/workorders/workOrderDetails',
                component: ComponentCreator('/docs/manufacturing/workorders/workOrderDetails', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manufacturing/workorders/workOrderSteps',
                component: ComponentCreator('/docs/manufacturing/workorders/workOrderSteps', 'c14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/eco/',
                component: ComponentCreator('/docs/plm/eco/', 'b12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/eco/newEco',
                component: ComponentCreator('/docs/plm/eco/newEco', 'cb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/machines/',
                component: ComponentCreator('/docs/plm/machines/', '7a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/machines/newMachine',
                component: ComponentCreator('/docs/plm/machines/newMachine', '926'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/parts/',
                component: ComponentCreator('/docs/plm/parts/', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/parts/bom',
                component: ComponentCreator('/docs/plm/parts/bom', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/parts/cloneBom',
                component: ComponentCreator('/docs/plm/parts/cloneBom', 'd04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/parts/editPart',
                component: ComponentCreator('/docs/plm/parts/editPart', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/parts/newPart',
                component: ComponentCreator('/docs/plm/parts/newPart', 'fc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/tools/',
                component: ComponentCreator('/docs/plm/tools/', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/plm/tools/newTool',
                component: ComponentCreator('/docs/plm/tools/newTool', 'b30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/goodsReceiptNote/editGoodsReceipt',
                component: ComponentCreator('/docs/procurement/goodsReceiptNote/editGoodsReceipt', '307'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/goodsReceiptNote/goodsreceipts',
                component: ComponentCreator('/docs/procurement/goodsReceiptNote/goodsreceipts', 'ec2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/goodsReceiptNote/newGoodsReceipt',
                component: ComponentCreator('/docs/procurement/goodsReceiptNote/newGoodsReceipt', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/purchaseorders/',
                component: ComponentCreator('/docs/procurement/purchaseorders/', 'dc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/purchaseorders/editPurchaseOrder',
                component: ComponentCreator('/docs/procurement/purchaseorders/editPurchaseOrder', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/purchaseorders/newPurchaseOrder',
                component: ComponentCreator('/docs/procurement/purchaseorders/newPurchaseOrder', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/purchaseorders/purchaseOrderDetails',
                component: ComponentCreator('/docs/procurement/purchaseorders/purchaseOrderDetails', '931'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/requisitions/',
                component: ComponentCreator('/docs/procurement/requisitions/', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/requisitions/editRequisition',
                component: ComponentCreator('/docs/procurement/requisitions/editRequisition', 'd42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/requisitions/newRequisition',
                component: ComponentCreator('/docs/procurement/requisitions/newRequisition', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/vendors/',
                component: ComponentCreator('/docs/procurement/vendors/', '180'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/vendors/editVendor',
                component: ComponentCreator('/docs/procurement/vendors/editVendor', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/procurement/vendors/newVendor',
                component: ComponentCreator('/docs/procurement/vendors/newVendor', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/spacelinx-mes',
                component: ComponentCreator('/docs/spacelinx-mes', '83e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
