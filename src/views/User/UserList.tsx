import {
  Button,
  ButtonGroup,
  FormGroup,
  HotkeysProvider,
  InputGroup,
} from "@blueprintjs/core";
import { Table2, Column, Cell } from "@blueprintjs/table";
import useTable from "../../hooks/useTable";
import { api } from "../../api";

const UserList = () => {
  const [userList, wrapperRef, tableRef, update] = useTable<User>(
    [],
    api.getUser
  );
  const handleEdit = (index: number) => {
    update({
      pageSize: 1,
      pageNum: 1,
      param: {},
    });
    console.log(index);
  };
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
      <ButtonGroup>
        <Button
          onClick={() => handleEdit(userList[rowIndex].id)}
          intent="primary"
        >
          编辑
        </Button>
        <Button
          onClick={() => handleEdit(userList[rowIndex].id)}
          intent="primary"
        >
          编辑
        </Button>
        <Button
          onClick={() => handleEdit(userList[rowIndex].id)}
          intent="primary"
        >
          编辑
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
        <div ref={wrapperRef}>
          <Table2
            ref={tableRef}
            numRows={userList.length}
            rowHeights={userList.map((_) => 40)}
            defaultColumnWidth={100}
            columnWidths={[100, 80, 100, 200]}
          >
            <Column id="user-id" name="ID" cellRenderer={IDCellRenderer} />
            <Column
              id="user-nick"
              name="昵称"
              cellRenderer={NickCellRenderer}
            />
            <Column id="user-tel" name="电话" cellRenderer={TelCellRenderer} />
            <Column
              id="user-operation"
              name="操作"
              cellRenderer={OperationCellRenderer}
            />
          </Table2>
        </div>
      </HotkeysProvider>
    </div>
  );
};

export default UserList;
