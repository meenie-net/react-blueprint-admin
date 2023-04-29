import UserList from "../../views/User/UserList";
import Welcome from "../../views/Welcome";
import GoodsList from "../../views/Goods/GoodsList";
import { createRef } from "react";

const menu: MenuType[] = [
  {
    path: "/home",
    name: "home",
    element: <Welcome />,
    nodeRef: createRef(),
    meta: {
      title: "首页",
      icon: "home",
    },
  },
  {
    path: "/bigScreen",
    name: "bigScreen",
    element: <Welcome />,
    nodeRef: createRef(),
    meta: {
      title: "大屏",
      icon: "home",
    },
  },
  {
    path: "/user",
    name: "user",
    meta: {
      title: "用户管理",
      icon: "user",
    },
    children: [
      {
        path: "/user/list",
        name: "userList",
        element: <UserList />,
        nodeRef: createRef(),
        meta: {
          title: "用户列表",
          icon: "th",
        },
      },
      {
        path: "/user/manage",
        name: "userManage",
        element: <Welcome />,
        nodeRef: createRef(),
        meta: {
          title: "用户权限",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/goods",
    name: "goods",
    meta: {
      title: "商品管理",
      icon: "shop",
    },
    children: [
      {
        path: "/goods/list",
        name: "goodsList",
        element: <GoodsList />,
        nodeRef: createRef(),
        meta: {
          title: "商品列表",
          icon: "th",
        },
      },
      {
        path: "/goods/manage",
        name: "goodsManage",
        element: <Welcome />,
        nodeRef: createRef(),
        meta: {
          title: "商品管理",
          icon: "edit",
        },
      },
    ],
  },
];
export default menu;
