import { DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/default-theme-config
export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "web开发基础",
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
        text: "其他",
        link: "/other",
      },
    ],
  },
  {
    text: "框架",
    items: [
      {
        text: "react",
        link: "/react",
      },
    ],
  },
  {
    text: "软技能",
    link: "/soft/index",
  },
  {
    text: "项目复盘",
    link: "/projects/",
  },
];
