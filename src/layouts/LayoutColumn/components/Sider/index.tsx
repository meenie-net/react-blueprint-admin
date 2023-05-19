import { Icon } from "@blueprintjs/core";
import menu, { IMenu } from "../../../../config/menu";
import { useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../../../../hooks/useGlobalStore";
import { useTranslation } from "react-i18next";
import { assetsUrl } from "../../../../utils";
import { useState } from "react";

const ColumnSider = () => {
  const [subMenu, setSubMenu] = useState<IMenu[]>([]);
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const handleClick = (item: IMenu) => {
    if (!item.children) {
      setSubMenu([]);
      navigate(item.path);
    } else {
      setSubMenu(item.children);
    }
  };
  return (
    <div className="flex h-full">
      {/* 一级菜单 */}
      <div className="min-h-full w-[64px] bg-slate-700 text-white">
        <div className="flex h-[64px] items-center justify-center border-b border-b-slate-400">
          <img
            src={assetsUrl("/assets/avatar.png")}
            alt=""
            className={`rounded-full ${assemblyLarge ? "h-8 w-8" : "h-7 w-7"}`}
          />
        </div>
        {menu.map((item) => (
          <div
            key={item.path}
            onClick={() => handleClick(item)}
            className={`flex h-[64px] flex-col items-center justify-center transition-all hover:cursor-pointer hover:bg-slate-600 ${
              location.pathname === item.path ? "bg-slate-800" : ""
            }`}
          >
            <Icon icon={item.meta.icon} size={assemblyLarge ? 24 : 20} />
            {t(`menu.${item.meta.name}`)}
          </div>
        ))}
      </div>
      {/* 二级菜单 */}
      <div
        className={`dark overflow-hidden transition-all ${
          subMenu.length === 0
            ? "w-0"
            : assemblyLarge
            ? menuOpen
              ? "w-[120px]"
              : "w-[50px]"
            : menuOpen
            ? "w-[100px]"
            : "w-[40px]"
        }`}
      >
        <div className="flex items-center justify-center h-10 border-b border-gray-400">
          <span className="whitespace-nowrap">
            {menuOpen ? "Mee Admin" : "M"}
          </span>
        </div>
        {subMenu.map((item) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex 
                h-10 
                items-center 
                justify-center
                hover:cursor-pointer 
                hover:bg-orange-600
                hover:text-white
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
    </div>
  );
};

export default ColumnSider;
