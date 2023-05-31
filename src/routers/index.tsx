import { createHashRouter } from "react-router-dom";
import menus, { IMenu } from "../config/menu";
import { Layout } from "../layouts";
import { ReactElement, lazy, Suspense, ComponentType } from "react";
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
      const views = import.meta.glob(
        "../views/**/*.tsx"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) as Record<string, () => Promise<{ default: ComponentType<any> }>>;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const Component = lazy(views[menu.element!]);
      return {
        path: menu.path,
        element: (
          <KeepAlive
            key={menu.path}
            name={menu.meta.name}
            id={menu.meta.name}
            saveScrollPosition
            autoFreeze={false} // react-activation与freeze冲突，导致嵌套菜单缓存会出现顺序等错误，设置为false避免
          >
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <Spinner size={SpinnerSize.LARGE} />
                </div>
              }
            >
              <Component />
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
