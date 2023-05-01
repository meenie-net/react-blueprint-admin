import {
  Button,
  ButtonGroup,
  FormGroup,
  HotkeysProvider,
  InputGroup,
} from "@blueprintjs/core";
import { Table2, Column, Cell, TableLoadingOption } from "@blueprintjs/table";
import useTable from "../../hooks/useTable";
import { api } from "../../api";
import { useEffect } from "react";
import { generateArray } from "../../utils";

const UserList = () => {
  const {
    tableData: userList,
    tableRef,
    updateTable,
    loading,
  } = useTable<User>(api.getUser, {
    widthArr: [0.2, 0.1, 0.4, 0.3],
  });
  const handleEdit = (index: number) => {
    updateTable({
      pageSize: 1,
      pageNum: 1,
      param: {},
    });
  };
  useEffect(() => {
    // updateTable();
  }, []);
  const IDCellRenderer = (rowIndex: number) => (
    <Cell className="flex justify-center items-center">
      {userList[rowIndex].id}
    </Cell>
  );
  const NickCellRenderer = (rowIndex: number) => (
    <Cell className="flex justify-center items-center">
      {userList[rowIndex].nick}
    </Cell>
  );
  const TelCellRenderer = (rowIndex: number) => (
    <Cell className="flex justify-center items-center">
      {userList[rowIndex].tel}
    </Cell>
  );
  const OperationCellRenderer = (rowIndex: number) => (
    <Cell className="flex justify-center items-center">
      <ButtonGroup minimal>
        <Button
          onClick={() => handleEdit(userList[rowIndex].id)}
          intent="primary"
        >
          编辑
        </Button>
        <Button
          onClick={() => handleEdit(userList[rowIndex].id)}
          intent="success"
        >
          编辑
        </Button>
        <Button
          onClick={() => handleEdit(userList[rowIndex].id)}
          intent="danger"
        >
          删除
        </Button>
      </ButtonGroup>
    </Cell>
  );
  return (
    <div>
      <div className="flex justify-between">
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
      </div>
      <HotkeysProvider>
        <Table2
          ref={tableRef}
          numRows={userList.length}
          rowHeights={generateArray(() => 40, userList.length)}
          loadingOptions={loading.current}
        >
          <Column id="user-id" name="ID" cellRenderer={IDCellRenderer} />
          <Column id="user-nick" name="昵称" cellRenderer={NickCellRenderer} />
          <Column id="user-tel" name="电话" cellRenderer={TelCellRenderer} />
          <Column
            id="user-operation"
            name="操作"
            cellRenderer={OperationCellRenderer}
          />
        </Table2>
      </HotkeysProvider>
    </div>
  );
};

export default UserList;
