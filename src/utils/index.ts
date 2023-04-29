/* eslint-disable @typescript-eslint/no-explicit-any */
export const flapMenu = (menu: Menu[]): Menu[] => {
  const serializedMenu: Menu[] = JSON.parse(JSON.stringify(menu));
  return serializedMenu.flatMap((item) => [
    item,
    ...(item.children ? flapMenu(item.children) : []),
  ]);
};
export const generateArray = (cb:(v:any,k:number)=>any, len:number):any[] => {
  return Array.from(Array(len), (v, k) => cb(v,k))
};
export const generateRowHeight = (height:number, len:number):number[] => {
  return Array.from(Array(len), () => height)
};