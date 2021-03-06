const { resolve } = require("path");

import reactRefresh from "@vitejs/plugin-react-refresh";
/**
 * @type { import('vite').UserConfig }
 */
export default {
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/shared": resolve(__dirname, "src/shared"),
    },
  },

  plugins: [reactRefresh()],
};
