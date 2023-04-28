interface Menu {
  path: string;
  name: string;
  element?: JSX.Element;
  nodeRef?: React.RefObject<unknown>;
  meta: {
    title: string;
    icon: BlueprintIcons_16Id | MaybeElement;
  };
  children?: Menu[];
}
