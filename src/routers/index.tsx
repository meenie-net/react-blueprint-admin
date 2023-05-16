import { createHashRouter } from "react-router-dom";
import menu, { IMenu } from "../config/menu";
import { Layout } from "../layouts";
import { ReactElement } from "react";

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
];
console.log("routes", routes);

const router = createHashRouter(routes);

export default router;
