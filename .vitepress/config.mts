import { defineConfig } from "vitepress";
import { navConfig } from "./navConfig";
import { sideBarConfig } from "./sideBarConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/blog/",
  title: "知识库",
  description: "好记性不如烂笔头",
  themeConfig: {
    nav: navConfig,
    sidebar: sideBarConfig,
    socialLinks: [{ icon: "github", link: "https://github.com/earthaYan" }],
  },
});
