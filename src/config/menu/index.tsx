import UserList from "../../views/User/UserList";
import Welcome from "../../views/Welcome";
import GoodsList from "../../views/Goods/GoodsList";
import { IconName, MaybeElement } from "@blueprintjs/core";
import MenuPermission from "../../views/Permission/MenuPermission";
import ButtonPermission from "../../views/Permission/ButtonPermission";
import BasicForm from "../../views/Form/BasicForm";
import ValidatedForm from "../../views/Form/ValidatedForm";
import EChartsWater from "../../views/ECharts/EChartsWater";
import EChartsColumn from "../../views/ECharts/EChartsColumn";
import EChartsLine from "../../views/ECharts/EChartsLine";
import EChartsPie from "../../views/ECharts/EChartsPie";
import EChartsRadar from "../../views/ECharts/EChartsRadar";
import EChartsNested from "../../views/ECharts/EChartsNested";

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
    meta: {
      name: "home",
      title: "首页",
      icon: "home",
    },
  },
  {
    path: "/bigScreen",
    element: <Welcome />,
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
        meta: {
          name: "userList",
          title: "用户列表",
          icon: "th",
        },
      },
      {
        path: "/user/manage",
        element: <Welcome />,
        meta: {
          name: "userManage",
          title: "用户权限",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/permission",
    meta: {
      name: "permission",
      title: "权限管理",
      icon: "shop",
    },
    children: [
      {
        path: "/permission/menu",
        element: <MenuPermission />,
        meta: {
          name: "menuPermission",
          title: "菜单权限",
          icon: "th",
        },
      },
      {
        path: "/permission/button",
        element: <ButtonPermission />,
        meta: {
          name: "buttonPermission",
          title: "按钮权限",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/form",
    meta: {
      name: "form",
      title: "常用表单",
      icon: "shop",
    },
    children: [
      {
        path: "/form/basic",
        element: <BasicForm />,
        meta: {
          name: "formBasic",
          title: "基础表单",
          icon: "th",
        },
      },
      {
        path: "/form/validate",
        element: <ValidatedForm />,
        meta: {
          name: "formValidate",
          title: "表单验证",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/eCharts",
    meta: {
      name: "eCharts",
      title: "ECharts",
      icon: "shop",
    },
    children: [
      {
        path: "/eCharts/water",
        element: <EChartsWater />,
        meta: {
          name: "eChartsWater",
          title: "水型图",
          icon: "th",
        },
      },
      {
        path: "/eCharts/column",
        element: <EChartsColumn />,
        meta: {
          name: "eChartsColumn",
          title: "柱状图",
          icon: "edit",
        },
      },
      {
        path: "/eCharts/line",
        element: <EChartsLine />,
        meta: {
          name: "eChartsLine",
          title: "折线图",
          icon: "edit",
        },
      },
      {
        path: "/eCharts/pie",
        element: <EChartsPie />,
        meta: {
          name: "eChartsPie",
          title: "饼图",
          icon: "edit",
        },
      },
      {
        path: "/eCharts/radar",
        element: <EChartsRadar />,
        meta: {
          name: "eChartsRadar",
          title: "雷达图",
          icon: "edit",
        },
      },
      {
        path: "/eCharts/nested",
        element: <EChartsNested />,
        meta: {
          name: "eChartsNested",
          title: "环形图",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/menu",
    meta: {
      name: "menu",
      title: "菜单嵌套",
      icon: "shop",
    },
    children: [
      {
        path: "/menu/menu1",
        meta: {
          name: "menuMenu1",
          title: "菜单1",
          icon: "th",
        },
        children: [
          {
            path: "/menu/menu1/menu11",
            element: <GoodsList />,
            meta: {
              name: "menuMenu1Menu11",
              title: "菜单1-1",
              icon: "th",
            },
          },
          {
            path: "/menu/menu1/menu12",
            meta: {
              name: "menuMenu1Menu12",
              title: "菜单1-2",
              icon: "edit",
            },
            children: [
              {
                path: "/menu/menu1/menu12/menu121",
                element: <GoodsList />,
                meta: {
                  name: "menuMenu1Menu12Menu121",
                  title: "菜单1-2-1",
                  icon: "th",
                },
              },
              {
                path: "/menu/menu1/menu12/menu122",
                element: <Welcome />,
                meta: {
                  name: "menuMenu1Menu12Menu122",
                  title: "菜单1-2-2",
                  icon: "edit",
                },
              },
            ],
          },
        ],
      },
      {
        path: "/menu/menu2",
        element: <Welcome />,
        meta: {
          name: "menuMenu2",
          title: "菜单2",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/system",
    meta: {
      name: "system",
      title: "系统管理",
      icon: "shop",
    },
    children: [
      {
        path: "/system/account",
        element: <GoodsList />,
        meta: {
          name: "systemAccount",
          title: "账号管理",
          icon: "th",
        },
      },
      {
        path: "/system/role",
        element: <Welcome />,
        meta: {
          name: "systemRole",
          title: "角色管理",
          icon: "edit",
        },
      },
      {
        path: "/system/menu",
        element: <Welcome />,
        meta: {
          name: "systemMenu",
          title: "菜单管理",
          icon: "edit",
        },
      },
    ],
  },
  {
    path: "/link",
    meta: {
      name: "link",
      title: "外部链接",
      icon: "shop",
    },
    children: [
      {
        path: "/link/github",
        element: <GoodsList />,
        meta: {
          name: "linkGithub",
          title: "GitHub",
          icon: "th",
        },
      },
    ],
  },
];
export default menu;
