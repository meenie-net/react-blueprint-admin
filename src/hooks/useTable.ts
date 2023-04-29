import { Table2 } from "@blueprintjs/table";
import { RefObject, useEffect, useRef, useState } from "react";

/**
 * 
 * @param defaultValue 表格的初始值, 例：[{}]
 * @param cb 获取表格数据的方法，例：api.getList
 * @param req 请求参数（分页，查询等）
 * 默认：{   
        pageSize: 10,   
        pageNum: 1,   
        param: {},   
      }  
 * @returns [tableData,wrapperRef,tableRef,update]
 */
function useTable<T>(
  defaultValue: T[],
  cb: { (req: PaginationRequest): Promise<{ code: 200 | 400; msg: "成功" | "失败"; data: T[]; }>;},
  req?: PaginationRequest
): [T[], RefObject<HTMLDivElement>, RefObject<Table2>, (args0:PaginationRequest)=>void]{
  const [tableData, setTableData] = useState<T[]>(defaultValue);
  const update = async (customReq?:PaginationRequest) => {
    const param = customReq || req || {
      pageSize:10,
      pageNum:1
    }
    const { data } = await cb(param)
    if (data) {
      setTableData(data)
    }
  }
  update()
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<Table2>(null);
  useEffect(() => {
    const wrapperElem = wrapperRef.current;
    if (!wrapperElem) return;
    const resizeObserver = new ResizeObserver(() => {
      if (!tableRef.current) return;
      const table = tableRef.current;
      if (!table.locator) return;
      const tableRect = table.locator.getViewportRect();
      table.setState({ ...table.state, viewportRect: tableRect });
      table.scrollToRegion({ cols: [0, 0] });
    });
    resizeObserver.observe(wrapperElem);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return [tableData,wrapperRef,tableRef,update];
};

export default useTable;
