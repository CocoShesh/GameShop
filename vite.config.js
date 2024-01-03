import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/GameShop/", // Replace 'your-repo-name' with your actual GitHub repository name
  plugins: [react()],
  // Other configuration options...
});
