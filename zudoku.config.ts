import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  metadata: {
    title: "Digiparser Docs",
    applicationName: "Digiparser Docs",
    description: "Documentation for Digiparser",
    logo: "https://www.digiparser.com/img/logo.svg",
  },
  page: {
    pageTitle: "Digiparser Docs",
    logo: {
      src: {
        light: "https://www.digiparser.com/img/logo.svg",
        dark: "https://www.digiparser.com/img/logo.svg",
      },
    },
  },
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: [
          "/docs/introduction",
        ],
      },
    ],
  },
  redirects: [
    { from: "/", to: "/docs/introduction" },
    { from: "/docs", to: "/docs/introduction" },
  ],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
