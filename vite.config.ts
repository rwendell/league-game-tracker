import prpc from "@prpc/vite";
import path from "path";
import devtools from "solid-devtools/vite";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
import unoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    // TODO maybe remove?
    devtools({
      autoname: true,
    }),
    unoCSS(),
    prpc(),
    solid({ ssr: true }),
  ],
  ssr: {
    noExternal: ["@kobalte/core"],
  },
  resolve: {
    alias: {
      rpc: path.join(__dirname, "src", "server", "api"),
    },
  },
});
