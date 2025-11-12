import { DefaultTheme } from "vitepress";

export const sideBarConfig: DefaultTheme.Sidebar = {
  "/css/": [
    {
      text: "css知识库",
      items: [
        {
          text: "网页加载",
          link: "/css/",
        },
        {
          text: "选择器",
          link: "/css/001",
        },
        {
          text: "DEMO2-CSS",
          link: "/css/002",
        },
      ],
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
        {
          text: "TypeScript(1)",
          link: "/es6/008",
        },
      ],
    },
  ],
  "/react/": [
    {
      text: "react知识库",
      items: [
        {
          text: "react目录页",
          link: "/react/",
        },
        {
          text: "虚拟DOM",
          link: "/react/001",
        },
        {
          text: "JSX以及组件类型",
          link: "/react/002",
        },
        {
          text: "Fiber架构",
          link: "/react/003",
        },
      ],
    },
  ],
  "/other/": [
    {
      text: "总览",
      items: [
        {
          text: "目录页",
          link: "/other/",
        },
      ],
    },
    {
      text: "开发环境",
      items: [
        { text: "http协议", link: "/other/001" },
        { text: "git操作", link: "/other/002" },
        { text: "chrome调试", link: "/other/003" },
        { text: "工程化基础", link: "/other/004" },
        { text: "Linux", link: "/other/005" },
      ],
    },
    {
      text: "运行环境",
      items: [
        { text: "浏览器加载过程", link: "/other/006" },
        { text: "前端性能优化1", link: "/other/007" },
        { text: "前端安全", link: "/other/008" },
        { text: "前端性能优化2", link: "/other/009" },
        { text: "前端性能优化3", link: "/other/010" },
        { text: "前端兼容性", link: "/other/011" },
      ],
    },
  ],
  "/soft/": [
    {
      text: "软技能",
      items: [
        {
          text: "宝洁八大问",
          link: "/soft/index",
        },
      ],
    },
  ],
};
