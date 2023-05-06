import { useState } from "react";
import EmitEventEnum from "../../../../enums/emitEvent";
import emitter from "../../../../utils/EventEmitter";
import { Drawer, Switch } from "@blueprintjs/core";
import Divider from "../../../../components/Divider";
import useGlobalStore from "../../../../hooks/useGlobalStore";
import { useDispatch } from "react-redux";
import {
  changeAssemblySize,
  changeDarkTheme,
  changeShowBreadcrumbs,
  changeShowBreadcrumbsIcon,
  changeShowFooter,
  changeShowTab,
  changeShowTabIcon,
  setLayoutType,
} from "../../../../stores/global";
import { changeMenuOpen } from "../../../../stores/global";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

const ThemeDrawer = () => {
  const [open, setOpen] = useState(true);
  const {
    layoutType,
    setting: {
      darkTheme,
      menuOpen,
      assemblyLarge,
      showBreadcrumbs,
      showBreadcrumbsIcon,
      showTab,
      showTabIcon,
      showFooter,
    },
  } = useGlobalStore();
  const dispatch = useDispatch();
  emitter.on(EmitEventEnum.OpenThemeDrawer, () => {
    setOpen(true);
  });
  const handleLayout = (layout: LayoutType) => {
    dispatch(setLayoutType(layout));
  };
  type SettingMethod =
    | "menu"
    | "theme"
    | "assemblyLarge"
    | "breadcrumbs"
    | "breadcrumbs-icon"
    | "tab"
    | "tab-icon"
    | "footer";
  const settingMethods: Record<SettingMethod, ActionCreatorWithoutPayload> = {
    menu: changeMenuOpen,
    theme: changeDarkTheme,
    assemblyLarge: changeAssemblySize,
    breadcrumbs: changeShowBreadcrumbs,
    "breadcrumbs-icon": changeShowBreadcrumbsIcon,
    tab: changeShowTab,
    "tab-icon": changeShowTabIcon,
    footer: changeShowFooter,
  };
  const handleClick = (target: SettingMethod) => {
    dispatch(settingMethods[target]());
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
                onClick={() => handleLayout("CLASSIC")}
              >
                {/* todo 使用div画出布局 */}
                CLASSIC
              </div>
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "COLUMN"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleLayout("COLUMN")}
              >
                COLUMN
              </div>
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "VERTICAL"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleLayout("VERTICAL")}
              >
                VERTICAL
              </div>
              <div
                className={`w-20 h-20 cursor-pointer rounded-lg transition-opacity bg-slate-200 ${
                  layoutType === "TRANSVERSE"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-60"
                }`}
                onClick={() => handleLayout("TRANSVERSE")}
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
                defaultChecked={darkTheme}
                innerLabelChecked="☽"
                innerLabel="☀"
                onChange={() => handleClick("theme")}
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
                defaultChecked={menuOpen}
                innerLabelChecked="on"
                innerLabel="off"
                onChange={() => handleClick("menu")}
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>全局大小</span>}
                defaultChecked={assemblyLarge}
                innerLabelChecked="large"
                innerLabel="normal"
                onChange={() => handleClick("assemblyLarge")}
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>面包屑</span>}
                defaultChecked={showBreadcrumbs}
                innerLabelChecked="on"
                innerLabel="off"
                onChange={() => handleClick("breadcrumbs")}
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>面包屑图标</span>}
                defaultChecked={showBreadcrumbsIcon}
                innerLabelChecked="on"
                innerLabel="off"
                onChange={() => handleClick("breadcrumbs-icon")}
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>标签栏</span>}
                defaultChecked={showTab}
                innerLabelChecked="on"
                innerLabel="off"
                onChange={() => handleClick("tab")}
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>标签栏图标</span>}
                defaultChecked={showTabIcon}
                innerLabelChecked="on"
                innerLabel="off"
                onChange={() => handleClick("tab-icon")}
              />
              <Switch
                alignIndicator="right"
                labelElement={<span>页脚</span>}
                defaultChecked={showFooter}
                innerLabelChecked="on"
                innerLabel="off"
                onChange={() => handleClick("footer")}
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ThemeDrawer;
