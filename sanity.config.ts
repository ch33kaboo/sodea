import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import productSchema from "./sanity/schemas/product-schema";
import aboutSchema from "./sanity/schemas/about-schema";

const config = defineConfig({
    projectId: "hv3vqbgi",
    dataset: "production",
    title: "sodea",
    apiVersion: "2023-07-11",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [productSchema, aboutSchema] },
});

export default config;
