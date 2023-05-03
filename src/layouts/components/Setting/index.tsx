import { ButtonGroup, Button, Icon } from "@blueprintjs/core";
import EmitEventEnum from "../../../enums/emitEvent";
import emitter from "../../../utils/EventEmitter";
import { useDispatch } from "react-redux";
import { changeAssemblySize } from "../../../stores/global";
import useGlobalStore from "../../../hooks/useGlobalStore";

const Setting = () => {
  const { assemblyLarge } = useGlobalStore();
  const dispatch = useDispatch();
  const handSizeClick = () => {
    dispatch(changeAssemblySize());
  };
  const handleThemeClick = () => {
    emitter.emit(EmitEventEnum.OpenThemeDrawer);
  };
  return (
    <>
      <ButtonGroup minimal={true} large={assemblyLarge}>
        <Button onClick={handSizeClick}>
          <Icon
            icon="settings"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          ></Icon>
        </Button>
        <Button>
          <Icon
            icon="search"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          ></Icon>
        </Button>
        <Button>
          <Icon
            icon="translate"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          ></Icon>
        </Button>
        <Button>
          <Icon
            icon="zoom-to-fit"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          ></Icon>
        </Button>
        <Button onClick={handleThemeClick}>
          <Icon
            icon="contrast"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          ></Icon>
        </Button>
        <Button>
          <Icon
            icon="notifications"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          ></Icon>
        </Button>
        <Button>
          <img
            src="../../src/assets/avatar.png"
            className={`${
              assemblyLarge ? "w-8 h-8 rounded-full" : "w-7 h-7 rounded-full"
            }`}
            alt=""
          />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Setting;
