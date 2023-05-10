import {
  Button,
  ButtonGroup,
  Card,
  FormGroup,
  HotkeysProvider,
  InputGroup,
} from "@blueprintjs/core";
import { Table2, Column, Cell, SelectionModes } from "@blueprintjs/table";
import useTable from "../../hooks/useTable";
import { api } from "../../api";
import { generateArray } from "../../utils";
import UserDrawer from "./UserDrawer";
import emitter from "../../utils/EventEmitter";
import EmitEventEnum from "../../enums/emitEvent";
import Pagination from "./../../components/Pagination/index";

const UserList = () => {
  // 使用useTable Hooks获取table数据及相关方法
  const {
    tableData: userData, // 表格数据
    tableRef, // 表格Ref
    updateTable, // 表格更新函数
    loading, // 表格loading状态数组
    pager, // 表格数据分页器数据
    onSelection, // 多选回调函数
    multiSelectedArr, //多选结果数组
  } = useTable<User, "id">(
    api.getUserList, // 表格数据接口
    {} // 表格配置
  );
  // 点击“添加用户”按钮操作
  const handleAdd = () => {
    emitter.emit(EmitEventEnum.OpenUserDrawer, {
      state: "add",
    });
  };
  // 点击“编辑”按钮操作
  const handleEdit = (user: User) => {
    emitter.emit(EmitEventEnum.OpenUserDrawer, {
      user,
      state: "edit",
    });
  };
  // Pagination组件的回调函数
  const paginationChange = (currentPage: number, pageSize: number) => {
    updateTable({ pageNum: currentPage, pageSize });
  };
  // User表格行首渲染函数
  const userRowHeaderRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">{rowIndex + 1}</Cell>
  );
  // User表格操作列渲染函数
  const OperationCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      <ButtonGroup minimal>
        <Button onClick={() => handleEdit(userData[rowIndex])} intent="primary">
          编辑
        </Button>
        <Button onClick={() => handleEdit(userData[rowIndex])} intent="success">
          编辑
        </Button>
        <Button onClick={() => handleEdit(userData[rowIndex])} intent="danger">
          删除
        </Button>
      </ButtonGroup>
    </Cell>
  );
  // User表格ID列渲染函数
  const IDCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userData[rowIndex]?.id}
    </Cell>
  );
  // User表格Nick列渲染函数
  const NickCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userData[rowIndex]?.nick}
    </Cell>
  );
  // User表格Tel列渲染函数
  const TelCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userData[rowIndex]?.tel}
    </Cell>
  );
  return (
    // 用户列表container
    <div className="flex flex-col h-full">
      {/* 用户列表操作区 */}
      <Card className="flex justify-between pb-0">
        {/* 用户列表操作区左边 */}
        <div className="flex">
          <FormGroup
            inline={true}
            label={"姓名"}
            labelFor="search-input"
            className="mr-2"
          >
            <InputGroup
              id="search-input"
              placeholder="请输入姓名"
              intent={"none"}
            />
          </FormGroup>
          <FormGroup
            inline={true}
            label={"电话"}
            labelFor="text-input"
            className="mr-2"
          >
            <InputGroup
              id="text-input"
              placeholder="请输入电话"
              intent={"none"}
            />
          </FormGroup>
        </div>
        {/* 用户列表操作区右边 */}
        <div className="flex">
          <FormGroup inline={true} className="mr-2">
            <Button icon="search" text="搜索" />
          </FormGroup>
          <FormGroup inline={true}>
            <Button icon="reset" text="重置" />
          </FormGroup>
        </div>
      </Card>
      {/* 用户列表内容区 */}
      <Card className="flex flex-col flex-auto min-h-0 mt-3">
        {/* 用户列表内容区头部 */}
        <div className="flex">
          <FormGroup inline={true} className="mr-2">
            <Button onClick={handleAdd} icon="search" text="新增用户" />
          </FormGroup>
          <FormGroup inline={true} className="mr-2">
            <Button
              icon="search"
              text="批量删除"
              disabled={multiSelectedArr.length === 0}
            />
          </FormGroup>
        </div>
        {/* 用户列表内容区表格 */}
        <div className="flex-auto min-h-0">
          <HotkeysProvider>
            <Table2
              ref={tableRef}
              className="overflow-x-hidden"
              numRows={userData.length}
              rowHeights={generateArray(() => 40, userData.length)}
              loadingOptions={loading.current}
              rowHeaderCellRenderer={userRowHeaderRenderer}
              onSelection={(_) => onSelection(_, "id")} // 多选数组值对应的key
              selectionModes={SelectionModes.ROWS_ONLY}
              columnWidths={[180, 50, 100, 100]} // 列宽
              numFrozenColumns={1} // 首列（操作列）冻结
              cellRendererDependencies={[userData]}
            >
              <Column
                id="user-operation"
                name="操作"
                cellRenderer={OperationCellRenderer}
              />
              <Column id="user-id" name="ID" cellRenderer={IDCellRenderer} />
              <Column
                id="user-nick"
                name="昵称"
                cellRenderer={NickCellRenderer}
              />
              <Column
                id="user-tel"
                name="电话"
                cellRenderer={TelCellRenderer}
              />
            </Table2>
          </HotkeysProvider>
        </div>
        {/* 用户列表内容区分页 */}
        <div className="flex justify-center mt-4">
          <Pagination
            {...pager}
            pagerCount={7} // 分页器页码按钮最大显示数
            pageSizeArr={[5, 10, 15, 20, 50, 100, 500]} // 每页条数配置数组
            onChange={paginationChange}
          />
        </div>
      </Card>
      {/* 新增/更新用户侧边弹出 */}
      <UserDrawer />
    </div>
  );
};

export default UserList;
