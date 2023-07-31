import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import productSchema from "./sanity/schemas/product-schema";

const config = defineConfig({
    projectId: "hv3vqbgi",
    dataset: "production",
    title: "sodea",
    apiVersion: "2023-07-11",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [productSchema] },
});

export default config;
