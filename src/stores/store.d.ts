interface TabType {
  path: string;
  name: string;
  active: boolean;
  meta: {
    title: string;
    icon: BlueprintIcons_16Id | MaybeElement;
  };
}
interface globalStoreState {
  layoutType: LayoutType;
  tabList: TabType[];
  flapedMenu: Menu[];
}

type RootState = ReturnType<typeof store.getState>;
