import { Drawer } from "@blueprintjs/core";
import emitter from "../../utils/EventEmitter";
import EmitEventEnum from "../../enums/emitEvent";
import { useState } from "react";

const UserDrawer = (props: { user: User; state: "add" | "edit" }) => {
  const { user, state } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  emitter.on(EmitEventEnum.OpenUserDrawer, () => {
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
      {user.id}
    </Drawer>
  );
};

export default UserDrawer;
