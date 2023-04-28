import { createHashRouter } from "react-router-dom";
import menu from "../config/menu";
import { Layout } from "../layouts";

const generateRoutes = (menu: Menu[]): Route[] => {
  return menu.map((route) => {
    let children: Route[] = [];
    if (route.children) {
      children = generateRoutes(route.children);
      return {
        path: route.path,
        element: route.element,
        children,
      };
    } else {
      return {
        path: route.path,
        element: route.element,
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
  },
];

const router = createHashRouter(routes);

export default router;
