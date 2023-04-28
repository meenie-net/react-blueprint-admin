import { HotkeysProvider } from "@blueprintjs/core";
import { Table2, Column } from "@blueprintjs/table";

const UserList = () => {
  return (
    <div>
      <HotkeysProvider>
        <Table2 numRows={5}>
          <Column />
          <Column />
          <Column />
        </Table2>
      </HotkeysProvider>
    </div>
  );
};

export default UserList;
