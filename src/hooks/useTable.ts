import { Table2, TableLoadingOption } from "@blueprintjs/table";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import useGlobalStore from "./useGlobalStore";
import { generateArray, generateColumnWidth } from "../utils";

/**
 * 
 * @param defaultValue 表格的初始值, 例：[{}]
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
function useTable<T>(
  cb: { (req: PaginationRequest): Promise<{ code: 200 | 400; msg: "成功" | "失败"; data: T[]; }>;},
  config?: {
    widthArr?:Array<number>
    param?:PaginationRequest
  } 
): {
    tableData: T[],
    tableRef: RefObject<Table2>,
    updateTable: (args0?: PaginationRequest) => void,
    loading: MutableRefObject<TableLoadingOption[]>
}{
  const [tableData, setTableData] = useState<T[]>([
    ...generateArray(() => {
      return {};
    }, 10),
  ]);
  const loading = useRef<TableLoadingOption[]>([
    TableLoadingOption.CELLS,
    TableLoadingOption.COLUMN_HEADERS,
    TableLoadingOption.ROW_HEADERS,
  ]);
  const { assemblyLarge, menuOpen } = useGlobalStore();
  const tableRef = useRef<Table2>(null);
  const updateTable = async (customReq?: PaginationRequest) => {
    const param = customReq || config?.param || {
      pageSize:10,
      pageNum:1
    }
    const { data } = await cb(param)
    if (data) {
      setTableData(data)
      loading.current = []
    }
  }
  updateTable()
  const left = menuOpen ? 160 : (assemblyLarge ? 60 : 50)
  useEffect(() => {
    console.log('1',1)
    const resizeObserver = new ResizeObserver(() => {
      if (!tableRef.current) return;
      const table = tableRef.current;
      if (!table.locator) return;
      const tableRect = table.locator.getViewportRect()
      const containerWidth = document.body.clientWidth - left - 64
      const finalWidth = containerWidth < 700 ? 700 : containerWidth
      tableRect.width = finalWidth
      setTimeout(() => {
        if (config?.widthArr)
        table.setState({
          ...table.state,
          viewportRect: tableRect,
          columnWidths: generateColumnWidth(config?.widthArr, tableRect.width),
        })
        table.componentDidMount()
      },10)
    });
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
    };
  }, [tableData,left]);
  return { tableData, tableRef, updateTable, loading };
};

export default useTable;
