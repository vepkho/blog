import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "uv8r7bnr",
  dataset: "production",
  title: "Vepkho's DevBlog",
  apiVersion: "09/18/2023",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
