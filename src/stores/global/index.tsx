import { createSlice } from "@reduxjs/toolkit";
import menu from "../../config/menu";
import { flapMenu } from "../../utils";

const initialState: globalStoreState = {
  layoutType: "CLASSIC",
  menuOpen: true,
  assemblyLarge: true,
  tabList: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
        icon: "home",
      },
    },
  ],
  flapedMenu: flapMenu(menu),
};

const globalStore = createSlice({
  name: "global-store",
  initialState,
  reducers: {
    setLayoutType: (state, { payload }) => {
      state.layoutType = payload;
    },
    setTab: (state, { payload }) => {
      // console.log(
      //   "state.flapedMenu",
      //   JSON.parse(JSON.stringify(state.flapedMenu))
      // );
      if (state.tabList.every((tab) => tab.path !== payload)) {
        state.flapedMenu.forEach((item) => {
          if (item.path === payload) {
            state.tabList.push({
              path: payload,
              name: item.name,
              meta: {
                title: item.meta.title,
                icon: item.meta.icon,
              },
            });
          }
        });
      }
    },
    removeTab: (state, { payload }) => {
      state.tabList = [...state.tabList.filter((tab) => tab.path !== payload)];
    },
    removeAllTab: (state) => {
      state.tabList = [];
    },
    changeAssemblySize: (state) => {
      state.assemblyLarge = !state.assemblyLarge;
    },
    changeMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const {
  setLayoutType,
  setTab,
  removeTab,
  removeAllTab,
  changeAssemblySize,
  changeMenuOpen,
} = globalStore.actions;
export default globalStore;
