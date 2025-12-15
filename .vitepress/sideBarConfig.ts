import { DefaultTheme } from "vitepress";
import {
  cssArticles,
  engineerArticles,
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
      items: [
        {
          text: "目录页",
          link: "/es6/",
        },
        {
          text: "let&const",
          link: "/es6/001",
        },
        {
          text: "Set&Map",
          link: "/es6/002",
        },
        {
          text: "Promise 和 async 函数",
          link: "/es6/003",
        },
        {
          text: "变量类型和变量计算",
          link: "/es6/004",
        },
        {
          text: "原型链",
          link: "/es6/005",
        },
        {
          text: "作用域和闭包",
          link: "/es6/006",
        },
        {
          text: "事件",
          link: "/es6/007",
        },
      ],
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
