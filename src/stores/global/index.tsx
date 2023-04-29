import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import menu from "../../config/menu";
import { flapMenu } from "../../utils";

const initialState: globalStoreState = {
  layoutType: "CLASSIC",
  menuOpen: true,
  assemblyLarge: true,
  tabList: [],
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
      if (state.tabList.every((tab) => tab.path !== payload)) {
        state.flapedMenu.forEach((item) => {
          if (item.path === payload) {
            state.tabList.push({
              path: payload,
              name: item.name,
              active: true,
              meta: {
                title: item.meta.title,
                icon: item.meta.icon,
              },
            });
          }
        });
      }
    },
    addTab: (state, { payload }) => {
      if (state.tabList.find(payload)) {
        redirect(payload.path);
      }
    },
    removeTab: (state, { payload }) => {
      state.tabList.filter((tab) => tab.path === payload);
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
  addTab,
  removeTab,
  removeAllTab,
  changeAssemblySize,
  changeMenuOpen,
} = globalStore.actions;
export default globalStore;
