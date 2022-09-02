import vue from "@vitejs/plugin-vue2";
import { defineConfig, loadEnv } from "vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
const path = require("path");

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          // Vuetify
          VuetifyResolver(),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
