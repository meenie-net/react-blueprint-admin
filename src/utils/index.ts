/* eslint-disable @typescript-eslint/no-explicit-any */
export const flapMenu = (menu: MenuType[]): MenuType[] => {
  const serializedMenu: MenuType[] = JSON.parse(JSON.stringify(menu));
  return serializedMenu.flatMap((item) => [
    item,
    ...(item.children ? flapMenu(item.children) : []),
  ]);
};
export const generateArray = (
  cb: (v: any, k: number) => any,
  len: number
): any[] => {
  return Array.from(Array(len), (v, k) => cb(v, k));
};
export const generateRowHeight = (height: number, len: number): number[] =>
  generateArray(() => height, len);
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
export const generateRangeArray = (start: number, stop: number, step: number) =>
  generateArray((_, i) => start + i * step, (stop - start) / step + 1);
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

  //todo
  //7                                                                                              0 < current <= Math.ceil(pagerSize/2)          current在中间           (totalPage - pagerSize + 1) < current <= totalPage
  //[[1]]                                           ->  [[1]]
  //[[1, 2]];                                       ->  [[1, 2]]
  //[[1, 2, 3]];                                    ->  [[1, 2, 3]]
  //[[1, 2, 3, 4]];                                 ->  [[1, 2, 3, 4]]
  //[[1, 2, 3, 4, 5]];                              ->  [[1, 2, 3, 4, 5]]
  //[[1, 2, 3, 4, 5, 6]];                           ->  [[1, 2, 3, 4, 5, 6]]
  //[[1, 2, 3, 4, 5, 6, 7]];                        ->  [[1, 2, 3, 4, 5, 6, 7]]
  //[[1, 2, 3, 4, 5, 6, 7, 8]];                     ->  [[1, 2, 3, 4, 5, 6, 7, 8]]                   [[1, 2, '3', 4, ···, 6, 7, 8]]            [[1, ···, 3, 4, '5', 6, 7, 8]]            [[1, 2, 3, 4, ···, '6', 7, 8]]
  //[[1, 2, 3, 4, 5, 6, 7, 8, 9]];                  ->  [[1, 2, 3, 4, 5, 6, 7, 8, 9]]                [[1, 2, '3', 4, ···, 7, 8, 9]]            [[1, ···, 4, '5', 6, 7, 8, 9]]            [[1, 2, 3, 4, ···, '7', 8, 9]]
  //[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];              ->  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]            [[1, 2, '3', 4, ···, 8, 9, 10]]           [[1, ···,'5', 6, 7, 8, 9, 10]]            [[1, 2, '3', 4, ···,8, 9, 10]]
  //[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];          ->  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]
  //[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]];      ->  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]
  console.log("pages", pages);
  return pages;
};
