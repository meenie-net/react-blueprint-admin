import { useState } from "react";
import EmitEventEnum from "../../../../enums/emitEvent";
import emitter from "../../../../utils/EventEmitter";
import { Drawer } from "@blueprintjs/core";

const ThemeDrawer = () => {
  const [open, setOpen] = useState(false);
  emitter.on(EmitEventEnum.OpenThemeDrawer, () => {
    console.log(1);
    setOpen(true);
  });
  return (
    <Drawer
      isOpen={open}
      className=""
      icon="info-sign"
      title="Palantir Foundry"
      canOutsideClickClose
      onClose={() => setOpen(false)}
    ></Drawer>
  );
};

export default ThemeDrawer;
