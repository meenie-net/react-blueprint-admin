/* eslint-disable @typescript-eslint/no-explicit-any */
export const flapMenu = (menu: MenuType[]): MenuType[] => {
  const serializedMenu: MenuType[] = JSON.parse(JSON.stringify(menu));
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
export const generateColumnWidth = (widthRateArr: number[], totalWidth: number): number[] => {
  const result = widthRateArr.map(w => Math.floor(totalWidth * w))
  result.pop()
  const lastWidth = totalWidth - eval(result.join("+")) - 30
  result.push(lastWidth)
  return result
};
export const generateRangeArray = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
export const getRestWidth = ():82|66 => { 
    const content = document.querySelector("#content")
    if(!content) return 66
    return content?.scrollHeight > content?.clientHeight ? 82 : 66
}