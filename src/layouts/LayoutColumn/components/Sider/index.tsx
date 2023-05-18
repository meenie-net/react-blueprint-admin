import { Menu, Icon } from "@blueprintjs/core";
import menu from "../../../../config/menu";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem2 } from "@blueprintjs/popover2";
import useGlobalStore from "../../../../hooks/useGlobalStore";
import { useTranslation } from "react-i18next";
import CollapseMenu from "../../../LayoutClassic/components/Sider/components/CollapseMenu";
import { assetsUrl } from "../../../../utils";

const ColumnSider = () => {
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <img
        src={assetsUrl("/assets/avatar.png")}
        alt=""
        className={`${
          assemblyLarge ? "w-8 h-8 rounded-full" : "w-7 h-7 rounded-full"
        }`}
      />
      <Menu
        large={assemblyLarge}
        className="min-w-[50px] flex flex-col content-center"
      >
        {menu.map((item) => {
          if (item.children && item.children.length > 0) {
            return <CollapseMenu key={item.path} item={item} />;
          } else {
            return (
              <MenuItem2
                key={item.path}
                icon={item.meta.icon}
                title={menuOpen ? "" : "" + t(`menu.${item.meta.name}`)}
                text={menuOpen ? t(`menu.${item.meta.name}`) : ""}
                onClick={() => handleClick(item.path)}
                active={location.pathname === item.path}
                className="self-center"
                labelElement={
                  menuOpen && <Icon icon="star-empty" className="invisible" />
                }
              />
            );
          }
        })}
      </Menu>

      {/* HeaderLeft */}
      <div
        className={`${
          assemblyLarge
            ? menuOpen
              ? "header-left-large-open"
              : "header-left-large-close"
            : menuOpen
            ? "header-left-open"
            : "header-left-close"
        }`}
      >
        {menuOpen && <span>Mee Admin</span>}
      </div>
    </>
  );
};

export default ColumnSider;
