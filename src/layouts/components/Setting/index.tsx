import { ButtonGroup, Button, Icon } from "@blueprintjs/core";
import EmitEventEnum from "../../../enums/emitEvent";
import emitter from "../../../utils/EventEmitter";

const Setting = () => {
  const handleClick = () => {
    emitter.emit(EmitEventEnum.OpenThemeDrawer);
  };
  return (
    <>
      <ButtonGroup minimal={true} large>
        <Button>
          <Icon icon="user" color="#f6f7f9" size={24}></Icon>
        </Button>
        <Button>
          <Icon icon="settings" color="#f6f7f9" size={24}></Icon>
        </Button>
        <Button onClick={handleClick}>
          <Icon icon="control" color="#f6f7f9" size={24}></Icon>
        </Button>
        <Button>
          <img
            src="../../src/assets/avatar.png"
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Setting;
