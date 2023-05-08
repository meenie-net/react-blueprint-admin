import { Drawer } from "@blueprintjs/core";
import emitter from "../../utils/EventEmitter";
import EmitEventEnum from "../../enums/emitEvent";
import { useState } from "react";

const UserDrawer = () => {
  const [user, setUser] = useState<User>({
    id: "",
    nick: "",
    tel: 0,
    permission: [],
  });
  const [state, setState] = useState("add");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  emitter.on(EmitEventEnum.OpenUserDrawer, (payload) => {
    console.log(payload);

    if (payload.state === "edit") setUser(payload.user);
    setState(payload.state);
    setOpen(true);
  });
  return (
    <Drawer
      isOpen={open}
      className=""
      icon="info-sign"
      title={state === "add" ? "新增用户" : "编辑用户信息"}
      canOutsideClickClose
      onClose={handleClose}
    >
      {/* {user.id} */}
    </Drawer>
  );
};

export default UserDrawer;
