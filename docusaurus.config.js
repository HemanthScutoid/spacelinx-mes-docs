// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SpaceLinx MES",
  tagline: "Smart Manufacturing Execution System for Aerospace & Beyond",
  favicon: "img/spacelinx-icon.png",

  future: {
    v4: true,
  },

  url: "https://your-spacelinx-site.example.com",
  baseUrl: "/",

  organizationName: "spacelinx",
  projectName: "mes-docs",

  // Warn for broken links instead of throwing (faster build)
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Add webpack optimizations for faster builds
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        target: isServer ? "node12" : "es2017",
      },
    }),
  },

  // Remove bundle analyzer config - not a valid top-level option

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/docs",

          // Optimization for build speed
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          includeCurrentVersion: true,

          // Reduce processing time
          editUrl: undefined, // Disable edit links to reduce processing
        },
        pages: {
          path: "src/pages",
          routeBasePath: "/",
          // Only include .js and .jsx pages to reduce processing
          include: ["**/*.js", "**/*.jsx"],
        },
        blog: false, // already disabled
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        // Disable sitemap generation during build (can be done post-build)
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  // Add client modules optimization
  clientModules: [],

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

  // Optional: enable incremental builds (Docusaurus v2.3+)
  // You still need to update package.json to use:
  // "build": "docusaurus build --incremental"
};

export default config;
