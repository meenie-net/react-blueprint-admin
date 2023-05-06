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
  tabList: TabType[];
  flapedMenu: Menu[];
  setting: {
    darkTheme: boolean;
    menuOpen: boolean;
    assemblyLarge: boolean;
    showBreadcrumbs: boolean;
    showBreadcrumbsIcon: boolean;
    showTab: boolean;
    showTabIcon: boolean;
    showFooter: boolean;
  };
}
