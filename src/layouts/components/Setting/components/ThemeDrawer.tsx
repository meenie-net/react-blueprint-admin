import { useState } from "react";
import EmitEventEnum from "../../../../enums/emitEvent";
import emitter from "../../../../utils/EventEmitter";
import { Drawer, Switch } from "@blueprintjs/core";
import Divider from "../../../../components/Divider";
import useGlobalStore from "../../../../hooks/useGlobalStore";
import { useDispatch } from "react-redux";
import { setLayoutType } from "../../../../stores/global";

const ThemeDrawer = () => {
  const [open, setOpen] = useState(true);
  const { layoutType } = useGlobalStore();
  const dispatch = useDispatch();
  emitter.on(EmitEventEnum.OpenThemeDrawer, () => {
    setOpen(true);
  });
  const handleClick = (layout: LayoutType) => {
    dispatch(setLayoutType(layout));
  };
  return (
    <Drawer
      isOpen={open}
      size={"240px"}
      icon="contrast"
      title="外观设置"
      canOutsideClickClose
      onClose={() => setOpen(false)}
    >
      <div className="px-4">
        <div>
          <Divider content="布局设置" />
          <div className="text-center">
            <div className="grid grid-cols-2 gap-2 w-[170px] mx-auto place-content-center place-items-center">
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "CLASSIC"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleClick("CLASSIC")}
              >
                CLASSIC
              </div>
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "COLUMN"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleClick("COLUMN")}
              >
                COLUMN
              </div>
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "VERTICAL"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleClick("VERTICAL")}
              >
                VERTICAL
              </div>
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "TRANSVERSE"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleClick("TRANSVERSE")}
              >
                TRANSVERSE
              </div>
            </div>
          </div>
        </div>
        <div>
          <Divider content="主题设置" />
          <div>
            <div>
              <Switch
                alignIndicator="right"
                labelElement={<span>暗黑主题</span>}
                innerLabelChecked="☽"
                innerLabel="☀"
              />
            </div>
          </div>
        </div>
        <div>
          <Divider content="界面设置" />
          <div>
            <div>
              <Switch
                alignIndicator="right"
                labelElement={<span>折叠菜单</span>}
                innerLabelChecked="on"
                innerLabel="off"
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>面包屑</span>}
                innerLabelChecked="on"
                innerLabel="off"
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>面包屑图标</span>}
                innerLabelChecked="on"
                innerLabel="off"
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>标签栏</span>}
                innerLabelChecked="on"
                innerLabel="off"
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>标签栏图标</span>}
                innerLabelChecked="on"
                innerLabel="off"
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>页脚</span>}
                innerLabelChecked="on"
                innerLabel="off"
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ThemeDrawer;
