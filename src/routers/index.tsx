import { createHashRouter } from "react-router-dom";
import menu from "../config/menu";
import { Layout } from "../layouts";

const generateRoutes = (menu: MenuType[]): RouteType[] => {
  return menu.map((route) => {
    let children: RouteType[] = [];
    if (route.children) {
      children = generateRoutes(route.children);
      return {
        path: route.path,
        element: route.element,
        children,
        handle: {
          icon: route.meta.icon,
          title: route.meta.title,
        },
      };
    } else {
      return {
        path: route.path,
        element: route.element,
        handle: {
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
    element: <Layout />,
    children: [...sub],
    handle: {
      icon: "home",
      title: "首页",
    },
  },
];
console.log("routes", routes);

const router = createHashRouter(routes);

export default router;
