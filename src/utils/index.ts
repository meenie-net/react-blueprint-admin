export const flapMenu = (menu: Menu[]): Menu[] => {
  const serializedMenu: Menu[] = JSON.parse(JSON.stringify(menu));
  return serializedMenu.flatMap((item) => [
    item,
    ...(item.children ? flapMenu(item.children) : []),
  ]);
};
