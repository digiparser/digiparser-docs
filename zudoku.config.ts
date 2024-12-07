import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/docs",
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
    { id: "guides", label: "Guides" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Guides",
        items: [
          "/guides/introduction",
        ],
      },
    ],
  },
  redirects: [
    { from: "/", to: "/guides/introduction" },
    { from: "/guides", to: "/guides/introduction" },
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
