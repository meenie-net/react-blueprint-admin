interface TabType {
  path: string;
  name: string;
  meta: {
    title: string;
    icon: BlueprintIcons_16Id | MaybeElement;
  };
}
interface globalStoreState {
  layoutType: LayoutType;
  menuOpen: boolean;
  assemblyLarge: boolean;
  tabList: TabType[];
  flapedMenu: Menu[];
}

type RootState = ReturnType<typeof store.getState>;
