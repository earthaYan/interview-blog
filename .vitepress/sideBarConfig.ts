import { DefaultTheme } from "vitepress";

export const sideBarConfig: DefaultTheme.Sidebar = {
  "/css/": [
    {
      text: "css知识库",
      items: [
        {
          text: "DEMO1-CSS",
          link: "/css/demo1",
        },
      ],
    },
  ],
  "/es6/": [],
  "/react/": [
    {
      text: "react知识库",
      items: [
        {
          text: "DEMO1-react",
          link: "/react",
        },
      ],
    },
  ],
};
