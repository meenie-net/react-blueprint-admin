import { MenuDivider, Icon, Collapse, Menu } from "@blueprintjs/core";
import { MenuItem2 } from "@blueprintjs/popover2";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../../../../../../hooks/useGlobalStore";
import "./style.scss";
import { IMenu } from "../../../../../../config/menu";
import { useTranslation } from "react-i18next";

const CollapseMenu = (props: { key: string; item: IMenu }) => {
  const { item } = props;
  const { t } = useTranslation();
  const {
    setting: { menuOpen },
  } = useGlobalStore();
  const [open, setOpen] = useState(false);
  const [collapseActive, setCollapseActive] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleCollapse = () => {
    setOpen(!open);
  };
  const handleClick = (path: string) => {
    navigate(path);
  };
  useEffect(() => {
    const pathArr = pathname.split(/\//g);
    pathArr.pop();
    const active = pathArr.join("/") === item.path;
    setOpen(active);
    setCollapseActive(active);
  }, [pathname]);
  return (
    <div>
      <MenuDivider />
      {menuOpen ? (
        <MenuItem2
          text={menuOpen ? t(`menu.${item.meta.name}`) : ""}
          className="justify-center"
          icon={item.meta.icon}
          active={collapseActive}
          title={menuOpen ? "" : "" + t(`menu.${item.meta.name}`)}
          labelElement={
            menuOpen && <Icon icon={open ? "caret-up" : "caret-down"} />
          }
          onClick={handleCollapse}
        ></MenuItem2>
      ) : (
        <MenuItem2
          className="fix-menuicon-mr"
          textClassName="mr-0"
          icon={item.meta.icon}
          active={collapseActive}
          onClick={handleCollapse}
          selected={true}
          popoverProps={{
            popoverClassName: "fix-popmenu-min-w",
          }}
        >
          {item.children &&
            item.children.map((sub) => (
              <MenuItem2
                key={sub.path}
                icon={sub.meta.icon}
                active={pathname === sub.path}
                title={"" + t(`menu.${sub.meta.name}`)}
                onClick={() => handleClick(sub.path)}
                text={t(`menu.${sub.meta.name}`)}
              ></MenuItem2>
            ))}
        </MenuItem2>
      )}
      {menuOpen && (
        <Collapse isOpen={open}>
          <Menu large={false} className="min-w-[45px] bg-slate-100">
            {item.children &&
              item.children.map((sub) => (
                <MenuItem2
                  key={sub.path}
                  icon={sub.meta.icon}
                  active={pathname === sub.path}
                  title={menuOpen ? "" : "" + t(`menu.${sub.meta.name}`)}
                  onClick={() => handleClick(sub.path)}
                  text={menuOpen ? t(`menu.${sub.meta.name}`) : ""}
                ></MenuItem2>
              ))}
          </Menu>
        </Collapse>
      )}
    </div>
  );
};

export default CollapseMenu;
