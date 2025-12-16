import { DefaultTheme } from "vitepress";
import {
  cssArticles,
  engineerArticles,
  esArticles,
  otherArticles,
  performanceArticles,
  projectArticles,
  reactArticles,
} from "./sideBar";
import { nextjsArticles } from "./sideBar/nextjs";

export const sideBarConfig: DefaultTheme.Sidebar = {
  "/css/": [
    {
      text: "css知识库",
      items: cssArticles,
    },
  ],
  "/es6/": [
    {
      text: "ES6知识库",
      items: esArticles,
    },
  ],
  "/ts/": [
    {
      text: "TypeScript",
      items: [
        {
          text: "目录页",
          link: "/ts/",
        },
        {
          text: "TypeScript(一)",
          link: "/ts/001",
        },
      ],
    },
  ],
  "/react/": [
    {
      text: "react知识库",
      items: reactArticles,
    },
  ],
  "/vue": [
    {
      text: "vue知识库",
      items: [
        {
          text: "目录页",
          link: "/vue/",
        },
        {
          text: "vue2基本使用",
          link: "/vue/001",
        },
        {
          text: "vue2组件使用",
          link: "/vue/002",
        },
      ],
    },
  ],
  "/nextjs/": [
    {
      text: "nextjs",
      items: nextjsArticles,
    },
  ],
  "/projects/": [
    {
      text: "项目复盘",
      items: projectArticles,
    },
  ],
  "/engineer": [
    {
      text: "工程化",
      items: engineerArticles,
    },
  ],
  "/performance": [
    {
      text: "性能优化知识库",
      items: performanceArticles,
    },
  ],
  "/other/": otherArticles,
};
