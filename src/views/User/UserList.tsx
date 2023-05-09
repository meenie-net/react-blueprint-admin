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
  const {
    tableData: userData,
    tableRef,
    updateTable,
    loading,
    onSelection,
    multiSelectedArr,
  } = useTable<User, "id">(api.getUser, {
    widthArr: [0.2, 0.2, 0.4, 0.2],
  });
  const handleAdd = () => {
    emitter.emit(EmitEventEnum.OpenUserDrawer, {
      state: "add",
    });
  };
  const handleEdit = (user: User) => {
    emitter.emit(EmitEventEnum.OpenUserDrawer, {
      user,
      state: "edit",
    });
  };
  const paginationChange = (currentPage: number, pageSize: number) => {
    updateTable({ pageNum: currentPage, pageSize });
  };
  const userRowHeaderRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">{rowIndex + 1}</Cell>
  );
  const IDCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userData.data[rowIndex].id}
    </Cell>
  );
  const NickCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userData.data[rowIndex].nick}
    </Cell>
  );
  const TelCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userData.data[rowIndex].tel}
    </Cell>
  );
  const OperationCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      <ButtonGroup minimal>
        <Button
          onClick={() => handleEdit(userData.data[rowIndex])}
          intent="primary"
        >
          编辑
        </Button>
        <Button
          onClick={() => handleEdit(userData.data[rowIndex])}
          intent="success"
        >
          编辑
        </Button>
        <Button
          onClick={() => handleEdit(userData.data[rowIndex])}
          intent="danger"
        >
          删除
        </Button>
      </ButtonGroup>
    </Cell>
  );
  return (
    <div className="flex flex-col h-full">
      <Card className="flex justify-between pb-0">
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
        <div className="flex">
          <FormGroup inline={true} className="mr-2">
            <Button icon="search" text="搜索" />
          </FormGroup>
          <FormGroup inline={true}>
            <Button icon="reset" text="重置" />
          </FormGroup>
        </div>
      </Card>
      <Card className="flex flex-col flex-auto min-h-0 mt-3">
        <div className="flex">
          <FormGroup inline={true} className="mr-2">
            <Button onClick={() => handleAdd()} icon="search" text="新增用户" />
          </FormGroup>
          <FormGroup inline={true} className="mr-2">
            <Button
              icon="search"
              text="批量删除"
              disabled={multiSelectedArr.length === 0}
            />
          </FormGroup>
        </div>
        <div className="flex-auto min-h-0">
          <HotkeysProvider>
            <Table2
              ref={tableRef}
              className="overflow-x-hidden"
              numRows={userData.total}
              rowHeights={generateArray(() => 40, userData.total)}
              loadingOptions={loading.current}
              rowHeaderCellRenderer={userRowHeaderRenderer}
              onSelection={(_) => onSelection(_, "id")}
              selectionModes={SelectionModes.ROWS_ONLY}
              columnWidths={[180, 50, 100, 100]}
              numFrozenColumns={1}
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
        <div className="flex justify-center mt-4">
          <Pagination
            total={userData.total}
            pagerCount={7}
            pageSizeArr={[5, 10, 15, 20, 50, 100, 500]}
            onChange={paginationChange}
          />
        </div>
      </Card>
      <UserDrawer />
    </div>
  );
};

export default UserList;
