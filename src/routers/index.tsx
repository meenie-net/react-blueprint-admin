import { createHashRouter } from "react-router-dom";
import menu, { IMenu } from "../config/menu";
import { Layout } from "../layouts";
import { ReactElement } from "react";
import NotFound from "../views/Common/NotFound";
import KeepAlive from "react-activation";

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
        element: (
          <KeepAlive
            cacheKey={route.path}
            name={route.path}
            id={route.path}
            saveScrollPosition
          >
            {route.element}
          </KeepAlive>
        ),
        children,
        handle: {
          name: route.meta.name,
          icon: route.meta.icon,
          title: route.meta.title,
          url: route.meta.url,
          target: route.meta.target,
        },
      };
    } else {
      return {
        path: route.path,
        element: (
          <KeepAlive
            cacheKey={route.path}
            name={route.path}
            id={route.path}
            saveScrollPosition
          >
            {route.element}
          </KeepAlive>
        ),
        handle: {
          name: route.meta.name,
          icon: route.meta.icon,
          title: route.meta.title,
          url: route.meta.url,
          target: route.meta.target,
        },
      };
    }
  });
};

const sub = generateRoutes(menu);
console.log("sub", sub);
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
