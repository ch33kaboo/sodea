import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "hv3vqbgi",
  dataset: "production",
  title: "sodea",
  apiVersion: "2023-07-11",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
