/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param menu 用户配置的menu数据
 * @returns 打平的menu
 */
export const flapMenu = (menu: MenuType[]): MenuType[] => {
  const serializedMenu: MenuType[] = JSON.parse(JSON.stringify(menu));
  return serializedMenu.flatMap((item) => [
    item,
    ...(item.children ? flapMenu(item.children) : []),
  ]);
};
/**
 *
 * @param cb 生成数组的回调函数
 * @param len 生成的数组长度
 * @returns 生成的数组
 */
export const generateArray = (
  cb: (v: any, k: number) => any,
  len: number
): any[] => {
  return Array.from(Array(len), (v, k) => cb(v, k));
};
/**
 *
 * @param height 表格行高
 * @param len 表格行数
 * @returns 生成的行高数组
 */
export const generateRowHeight = (height: number, len: number): number[] =>
  generateArray(() => height, len);
/**
 *
 * @param widthRateArr 宽度数组
 * @param totalWidth 总宽度
 * @returns 生成的列宽数组
 */
export const generateColumnWidth = (
  widthRateArr: number[],
  totalWidth: number
): number[] => {
  const result = widthRateArr.map((w) => Math.floor(totalWidth * w));
  result.pop();
  const lastWidth = totalWidth - eval(result.join("+")) - 30;
  result.push(lastWidth);
  return result;
};
/**
 *
 * @param start 数组第一项的值
 * @param stop 数组最后一项的值
 * @param step 等差数组的差
 * @returns
 */
export const generateRangeArray = (start: number, stop: number, step: number) =>
  generateArray((_, i) => start + i * step, (stop - start) / step + 1);
/**
 *
 * @param totalPage 总页数
 * @param pagerCount 显示的最大页码数
 * @param currentPage 当前页码
 * @returns 生成的页码数组
 */
export const generatePagesArray = (
  totalPage: number,
  pagerCount: number,
  currentPage: number
) => {
  let pages: number[][] = [];

  if (totalPage <= pagerCount) {
    pages = [[...generateRangeArray(1, totalPage, 1)]];
  }
  if (totalPage > pagerCount) {
    if (0 < currentPage && currentPage <= Math.ceil(pagerCount / 2)) {
      pages = [
        [1],
        [],
        [...generateRangeArray(2, pagerCount - 1, 1)],
        [0],
        [totalPage],
      ];
    } else if (
      totalPage - pagerCount + 1 < currentPage &&
      currentPage <= totalPage
    ) {
      pages = [
        [1],
        [0],
        [...generateRangeArray(totalPage - pagerCount + 1, totalPage - 1, 1)],
        [],
        [totalPage],
      ];
    } else {
      pages = [
        [1],
        [0],
        [
          ...generateRangeArray(
            currentPage - Math.floor(pagerCount / 2),
            currentPage + Math.floor(pagerCount / 2),
            1
          ),
        ],
        [0],
        [totalPage],
      ];
    }
  }
  console.log("pages", pages);
  return pages;
};
