import { DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/default-theme-config
export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "web基础",
    items: [
      {
        text: "CSS",
        link: "/css",
      },
      {
        text: "ES6",
        link: "/es6",
      },
      {
        text: "TypeScript",
        link: "/ts",
      },
      {
        text: "其他",
        link: "/other",
      },
    ],
  },
  {
    text: "框架生态",
    items: [
      {
        text: "react",
        link: "/react",
      },
      {
        text: "nextjs",
        link: "/nextjs",
      },
      {
        text: "vue",
        link: "/vue",
      },
    ],
  },
  {
    text: "前端进阶",
    items: [
      { text: "工程化", link: "/engineer" },
      {
        text: "性能优化",
        link: "/performance",
      },
    ],
  },
  {
    text: "项目",
    link: "/projects/",
  },
  {
    text: "后端",
    link: "/backend/",
  },
];
