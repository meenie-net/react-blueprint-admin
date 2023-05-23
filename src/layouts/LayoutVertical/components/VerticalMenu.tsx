import { Icon } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useMatches } from "react-router-dom";
import menu, { IMenu } from "../../../config/menu";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { Popover2 } from "@blueprintjs/popover2";

const VerticalMenu = () => {
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMatches();
  const { t } = useTranslation();
  const handleClick = (item: IMenu) => {
    navigate(item.path);
  };

  const generateMenu = (menu: IMenu) => {
    return (
      <div
        className={`flex w-[64px] flex-col items-center justify-center transition-all hover:cursor-pointer hover:bg-slate-600 ${
          matches[1].pathname === menu.path ? "bg-slate-800" : ""
        }`}
      >
        <Icon icon={menu.meta.icon} size={assemblyLarge ? 24 : 20} />
        {t(`menu.${menu.meta.name}`)}
      </div>
    );
  };

  const generateSubMenu = (subMenu: IMenu[]) => {
    return (
      // 二级菜单
      <div
        className={`dark overflow-hidden transition-all ${
          assemblyLarge ? "w-[100px]" : "w-[100px]"
        }`}
      >
        {subMenu.length !== 0 &&
          subMenu.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex h-10 items-center justify-center hover:cursor-pointer hover:bg-orange-600 hover:text-white
                 ${
                   location.pathname === item.path
                     ? "bg-orange-800 text-white"
                     : ""
                 }`}
            >
              <Icon icon={item.meta.icon} size={assemblyLarge ? 20 : 13} />
              {menuOpen && (
                <span className="ml-2 whitespace-nowrap">
                  {t(`menu.${item.meta.name}`)}
                </span>
              )}
            </div>
          ))}
      </div>
    );
  };
  return (
    <div className="flex">
      {/* 一级菜单 */}
      {/* todo optimize UI */}
      <div className="flex h-full text-white">
        {menu.map((item) =>
          item.children ? (
            <Popover2
              key={item.path}
              modifiers={{ arrow: { enabled: false } }}
              interactionKind="hover"
              content={item.children && generateSubMenu(item.children)}
              placement="bottom"
            >
              {generateMenu(item)}
            </Popover2>
          ) : (
            <div key={item.path} onClick={() => handleClick(item)}>
              {generateMenu(item)}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default VerticalMenu;
