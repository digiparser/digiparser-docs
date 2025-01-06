import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/docs",
  metadata: {
    title: "DigiParser Docs",
    applicationName: "DigiParser Docs",
    description: "Documentation for DigiParser",
    logo: "https://www.digiparser.com/img/logo.svg",
  },
  page: {
    pageTitle: "DigiParser Docs",
    logo: {
      src: {
        light: "https://www.digiparser.com/img/logo-default.png",
        dark: "https://www.digiparser.com/img/logo-light.png",
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
        label: "Overview",
        items: [
          "/guides/introduction",
          "/guides/overview/parsers",
          "/guides/overview/workflows",
          "/guides/overview/schemas",
        ],
      },
      {
        type: "category",
        label: "Getting Started",
        items: [
          "/guides/getting-started/create-account",
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
  theme: {
    light: {
      primary: "243, 82%, 66%",
      primaryForeground: "243, 82%, 66%",
      background: "0, 0%, 100%",
      foreground: "0, 0%, 0%",
    },
    dark: {
      primary: "243, 82%, 66%",
      primaryForeground: "243, 82%, 66%",
      background: "0, 0%, 0%",
      foreground: "0, 0%, 100%",
    },
  },
};

export default config;
