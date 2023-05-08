import { Region, Table2, TableLoadingOption } from "@blueprintjs/table";
import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { generateArray, generateRangeArray } from "../utils";

/**
 *
 * @param cb 获取表格数据的方法，例：api.getList
 * @param config 配置
 *
 * 默认：{
 ***********widthAyy: [] , // 列宽度数组
 ***********param: { // 请求参数（分页，查询等）
 ***************pageSize?: number = 10,
 ***************pageNum?: number = 1,
 ***************param?: object = {},
 ***********}
 *******}
 * @returns [tableData,wrapperRef,tableRef,update]
 */
function useTable<T, K extends keyof T>(
  cb: { (req: PaginationRequest): Promise<ResType> },
  config?: {
    widthArr?: Array<number>;
    param?: PaginationRequest;
  }
): {
  tableData: {
    total: number;
    pageSize: number;
    data: T[];
  };
  tableRef: RefObject<Table2>;
  updateTable: (args0?: PaginationRequest) => void;
  loading: MutableRefObject<TableLoadingOption[]>;
  onSelection: (regions: Region[], key: K) => void;
  multiSelectedArr: T[K][];
} {
  const [tableData, setTableData] = useState<{
    total: number;
    pageSize: number;
    data: T[];
  }>({
    total: 0,
    pageSize: 5,
    data: [
      ...generateArray(() => {
        return {};
      }, 13),
    ],
  });
  const [multiSelectedArr, setMultiSelectedArr] = useState<T[K][]>([]);
  const loading = useRef<TableLoadingOption[]>([
    TableLoadingOption.CELLS,
    TableLoadingOption.COLUMN_HEADERS,
    TableLoadingOption.ROW_HEADERS,
  ]);
  const tableRef = useRef<Table2>(null);
  const updateTable = async (customReq?: PaginationRequest) => {
    const param = customReq ||
      config?.param || {
        pageSize: 10,
        pageNum: 1,
      };
    const { data } = await cb(param);
    if (data) {
      setTableData(data);
      loading.current = [];
    }
  };
  useEffect(() => {
    // updateTable();
  }, [multiSelectedArr]);
  const onSelection = (regions: Region[], key: K) => {
    const prev = regions
      .map((region) => {
        if (region.rows != undefined)
          return generateRangeArray(region.rows[0], region.rows[1], 1);
      })
      .flat()
      .map((i) => tableData.data[i!][key]);
    setMultiSelectedArr(prev);
  };
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!tableRef.current) return;
      const table = tableRef.current;
      if (!table.locator) return;
      const tableRect = table.locator.getViewportRect();
      if (config?.widthArr)
        table.setState({
          ...table.state,
          viewportRect: tableRect,
        });
    });
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
    };
  }, [tableData]);
  return {
    tableData,
    tableRef,
    updateTable,
    loading,
    onSelection,
    multiSelectedArr,
  };
}

export default useTable;
