import { DefaultTheme } from "vitepress";

export const sideBarConfig: DefaultTheme.Sidebar = {
  "/css/": [
    {
      text: "css知识库",
      items: [
        {
          text: "目录页",
          link: "/css/",
        },
        {
          text: "浏览器加载过程",
          link: "/css/001",
        },
        {
          text: "css基础",
          link: "/css/002",
        },
        {
          text: "tailwindcss(一)",
          link: "/css/003",
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
        {
          text: "React 事件机制",
          link: "/react/004",
        },
        {
          text: "React 状态管理",
          link: "/react/005",
        },
        {
          text: "React Hook",
          link: "/react/006",
        },
        {
          text: "useEffect",
          link: "/react/007",
        },
        {
          text: "useCallback和useMemo",
          link: "/react/008",
        },
        {
          text: "useRef",
          link: "/react/009",
        },
        {
          text: "forwardRef",
          link: "/react/010",
        },
        {
          text: "React18 hooks",
          link: "/react/011",
        },
        {
          text: "React19新特性",
          link: "/react/012",
        },
        {
          text: "React路由系统",
          link: "/react/013",
        },
      ],
    },
  ],
  "/nextjs/": [
    {
      text: "nextjs",
      items: [
        { text: "目录页面", link: "/nextjs/" },
        { text: "nextjs(一)", link: "/nextjs/001" },
        { text: "nextjs(二)", link: "/nextjs/002" },
      ],
    },
  ],
  "/projects/": [
    {
      text: "项目复盘",
      items: [
        {
          text: "目录页",
          link: "/projects/index",
        },
        {
          text: "组件库项目(一)",
          link: "/projects/001",
        },
        {
          text: "组件库项目(二)",
          link: "/projects/002",
        },
        {
          text: "DTLE项目(一)",
          link: "/projects/003",
        },
        {
          text: "DTLE项目(二)",
          link: "/projects/004",
        },
        {
          text: "DTLE项目(三)",
          link: "/projects/005",
        },
        {
          text: "构建工具迁移",
          link: "/projects/010",
        },
      ],
    },
  ],
  "/engineer": [
    {
      text: "工程化",
      items: [
        { text: "工程化目录页", link: "/engineer" },
        { text: "webpack", link: "/engineer/001" },
      ],
    },
  ],
  "/performance": [
    {
      text: "性能优化知识库",
      items: [
        {
          text: "目录页",
          link: "/performance",
        },
        {
          text: "性能优化1",
          link: "/performance/001",
        },
        {
          text: "性能优化2",
          link: "/performance/002",
        },
        {
          text: "性能优化3",
          link: "/performance/003",
        },
        {
          text: "性能优化4",
          link: "/performance/004",
        },
        {
          text: "性能优化5",
          link: "/performance/005",
        },
        {
          text: "前端安全",
          link: "/performance/006",
        },
        {
          text: "chrome调试",
          link: "/performance/007",
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
        { text: "Linux", link: "/other/005" },
      ],
    },
    {
      text: "运行环境",
      items: [{ text: "浏览器加载过程", link: "/other/006" }],
    },
  ],
};
