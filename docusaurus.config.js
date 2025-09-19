// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SpaceLinx MES",
  tagline: "Smart Manufacturing Execution System for Aerospace & Beyondddddd",
  favicon: "img/spacelinx-icon.png",

  future: {
    v4: true,
  },

  url: "https://your-spacelinx-site.example.com",
  baseUrl: "/",

  organizationName: "spacelinx",
  projectName: "mes-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/docs",
        },
        pages: {
          path: "src/pages",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: false,
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
          activeBaseRegex: "^/$",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Modules",
          items: [
            { label: "PLM", to: "/docs/plm/parts" },
            { label: "Manufacturing", to: "/docs/manufacturing/products" },
            { label: "Procurement", to: "/docs/procurement/purchaseorders" },
            { label: "Inventory", to: "/docs/inventory/partsInventory" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XDLINX SPACE LABS. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
