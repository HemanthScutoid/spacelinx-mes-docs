// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SpaceLinx MES",
  tagline: "Smart Manufacturing Execution System for Aerospace & Beyond",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://your-spacelinx-site.example.com",
  baseUrl: "/",

  organizationName: "spacelinx", // Replace with your org/user
  projectName: "mes-docs", // Replace with your repo name

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
          routeBasePath: "/", // 👈 makes docs the homepage
        },
        blog: false, // 👈 no blog for now
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SpaceLinx MES",

        items: [
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
              { label: "PLM", to: "/plm/parts" },
              { label: "Manufacturing", to: "/manufacturing/products" },
              { label: "Procurement", to: "/procurement/purchaseorders" },
              { label: "Inventory", to: "/inventory/partsInventory" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XDLINX SPACE LABS. All rights reserved.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
