import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  base: "/modulo_cloud_lab_2/",
  plugins: [react()],
  define: {
    "process.env.GITHUB_API_URL": JSON.stringify(process.env.GITHUB_API_URL),
    "process.env.RICK_AND_MORTY_API_URL": JSON.stringify(
      process.env.RICK_AND_MORTY_API_URL
    ),
  },
});
