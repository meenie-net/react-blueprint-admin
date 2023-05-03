interface MenuType {
  path: string;
  name: string;
  element?: JSX.Element;
  nodeRef?: React.RefObject<unknown>;
  meta: {
    title: string;
    icon: IconName | MaybeElement;
  };
  children?: MenuType[];
}
