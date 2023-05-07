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
import { useState } from "react";
import { generateArray } from "../../utils";
import UserDrawer from "./UserDrawer";
import emitter from "../../utils/EventEmitter";
import EmitEventEnum from "../../enums/emitEvent";
import Pagination from "./../../components/Pagination/index";

const UserList = () => {
  const {
    tableData: userList,
    tableRef,
    updateTable,
    loading,
    onSelection,
    multiSelectedArr,
  } = useTable<User, "id">(api.getUser, {
    widthArr: [0.2, 0.1, 0.4, 0.3],
  });
  const [userDrawerProps, setUserDrawerProps] = useState<{
    user: User;
    state: "add" | "edit";
  }>({
    user: {
      id: "",
      nick: "",
      tel: 0,
      permission: [],
    },
    state: "edit",
  });
  const handleAdd = () => {
    setUserDrawerProps({
      ...userDrawerProps,
      user: {
        id: "",
        nick: "",
        tel: 0,
        permission: [],
      },
      state: "add",
    });
    emitter.emit(EmitEventEnum.OpenUserDrawer);
  };
  const handleEdit = (user: User) => {
    setUserDrawerProps({
      ...userDrawerProps,
      user,
      state: "edit",
    });
    emitter.emit(EmitEventEnum.OpenUserDrawer);
  };
  const userRowHeaderRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">{rowIndex + 1}</Cell>
  );
  const IDCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userList[rowIndex].id}
    </Cell>
  );
  const NickCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userList[rowIndex].nick}
    </Cell>
  );
  const TelCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      {userList[rowIndex].tel}
    </Cell>
  );
  const OperationCellRenderer = (rowIndex: number) => (
    <Cell className="flex items-center justify-center">
      <ButtonGroup minimal>
        <Button onClick={() => handleEdit(userList[rowIndex])} intent="primary">
          编辑
        </Button>
        <Button onClick={() => handleEdit(userList[rowIndex])} intent="success">
          编辑
        </Button>
        <Button onClick={() => handleEdit(userList[rowIndex])} intent="danger">
          删除
        </Button>
      </ButtonGroup>
    </Cell>
  );
  return (
    <div className="h-full flex flex-col">
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
              className="h-auto overflow-x-hidden"
              numRows={userList.length}
              rowHeights={generateArray(() => 40, userList.length)}
              loadingOptions={loading.current}
              rowHeaderCellRenderer={userRowHeaderRenderer}
              onSelection={(_) => onSelection(_, "id")}
              selectionModes={SelectionModes.ROWS_ONLY}
            >
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
              <Column
                id="user-operation"
                name="操作"
                cellRenderer={OperationCellRenderer}
              />
            </Table2>
          </HotkeysProvider>
        </div>
        <div className="flex justify-center mt-4">
          <Pagination total={userList.length} onSizeChange={updateTable} />
        </div>
      </Card>
      <UserDrawer {...userDrawerProps} />
    </div>
  );
};

export default UserList;
