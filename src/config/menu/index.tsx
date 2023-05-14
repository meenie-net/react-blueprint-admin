import UserList from "../../views/User/UserList";
import Welcome from "../../views/Welcome";
import GoodsList from "../../views/Goods/GoodsList";
import { createRef } from "react";
import { IconName, MaybeElement } from "@blueprintjs/core";

export interface IMenu {
  path: string;
  element?: JSX.Element;
  nodeRef?: React.RefObject<unknown>;
  meta: {
    name: string;
    title: string;
    icon: IconName | MaybeElement;
  };
  children?: IMenu[];
}

const menu: IMenu[] = [
  {
    path: "/",
    element: <Welcome />,
    nodeRef: createRef(),
    meta: {
      name: "home",
      title: "首页",
      icon: "home",
    },
  },
  {
    path: "/bigScreen",
    element: <Welcome />,
    nodeRef: createRef(),
    meta: {
      name: "bigScreen",
      title: "大屏",
      icon: "home",
    },
  },
  {
    path: "/user",
    meta: {
      name: "user",
      title: "用户管理",
      icon: "user",
    },
    children: [
      {
        path: "/user/list",
        element: <UserList />,
        nodeRef: createRef(),
        meta: {
          name: "userList",
          title: "用户列表",
          icon: "th",
        },
      },
      {
        path: "/user/manage",
        element: <Welcome />,
        nodeRef: createRef(),
        meta: {
          name: "userManage",
          title: "用户权限",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/goods",
    meta: {
      name: "goods",
      title: "商品管理",
      icon: "shop",
    },
    children: [
      {
        path: "/goods/list",
        element: <GoodsList />,
        nodeRef: createRef(),
        meta: {
          name: "goodsList",
          title: "商品列表",
          icon: "th",
        },
      },
      {
        path: "/goods/manage",
        element: <Welcome />,
        nodeRef: createRef(),
        meta: {
          name: "goodsManage",
          title: "商品管理",
          icon: "edit",
        },
      },
    ],
  },
];
export default menu;
