import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import ReactRefresh from "@vitejs/plugin-react-refresh";

// export default {
//   plugins: [ReactRefresh()],
// };
