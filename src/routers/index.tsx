import { createHashRouter } from "react-router-dom";
import menus, { IMenu } from "../config/menu";
import { Layout } from "../layouts";
import { ReactElement, lazy, Suspense } from "react";
import NotFound from "../views/Common/NotFound";
import { KeepAlive } from "react-activation";
import { Spinner, SpinnerSize } from "@blueprintjs/core";

export interface IRoute {
  path: string;
  element?: ReactElement;
  children?: IRoute[];
  handle: object;
}

const generateRoutes = (menus: IMenu[]): IRoute[] => {
  return menus.map((menu) => {
    let children: IRoute[] = [];
    if (menu.children) {
      children = generateRoutes(menu.children);
      return {
        path: menu.path,
        children,
        handle: {
          name: menu.meta.name,
          icon: menu.meta.icon,
          title: menu.meta.title,
          url: menu.meta.url,
          target: menu.meta.target,
        },
      };
    } else {
      const Component = lazy(() => import(menu.element!));
      return {
        path: menu.path,
        element: (
          <KeepAlive
            // key={menu.meta.name}
            name={menu.meta.name}
            id={menu.meta.name}
            saveScrollPosition
          >
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <Spinner size={SpinnerSize.LARGE} />
                </div>
              }
            >
              <Component key={menu.meta.name} />
            </Suspense>
          </KeepAlive>
        ),
        handle: {
          name: menu.meta.name,
          icon: menu.meta.icon,
          title: menu.meta.title,
          url: menu.meta.url,
          target: menu.meta.target,
        },
      };
    }
  });
};

const sub = generateRoutes(menus);
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
