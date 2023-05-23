import { createHashRouter } from "react-router-dom";
import menu, { IMenu } from "../config/menu";
import { Layout } from "../layouts";
import { ReactElement } from "react";
import NotFound from "../views/Common/NotFound";

export interface IRoute {
  path: string;
  element?: ReactElement;
  children?: IRoute[];
  handle: object;
}

const generateRoutes = (menu: IMenu[]): IRoute[] => {
  return menu.map((route) => {
    let children: IRoute[] = [];
    if (route.children) {
      children = generateRoutes(route.children);
      return {
        path: route.path,
        element: route.element,
        children,
        handle: {
          name: route.meta.name,
          icon: route.meta.icon,
          title: route.meta.title,
        },
      };
    } else {
      return {
        path: route.path,
        element: route.element,
        handle: {
          name: route.meta.name,
          icon: route.meta.icon,
          title: route.meta.title,
        },
      };
    }
  });
};

const sub = generateRoutes(menu);
const routes = [
  {
    path: "/",
    name: "home",
    element: <Layout />,
    children: [...sub],
    handle: {
      name: "home",
      icon: "home",
      title: "首页",
    },
  },
  {
    path: "/*",
    name: "404",
    element: <NotFound />,
    handle: {
      name: "404",
      icon: "home",
      title: "未知页面",
    },
  },
];

const router = createHashRouter(routes);

export default router;
