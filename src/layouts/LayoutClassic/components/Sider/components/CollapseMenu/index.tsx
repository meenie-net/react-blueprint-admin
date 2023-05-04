import { MenuDivider, Icon, Collapse, Menu } from "@blueprintjs/core";
import { MenuItem2 } from "@blueprintjs/popover2";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGlobalStore from "../../../../../../hooks/useGlobalStore";

const CollapseMenu = (props: { key: string; item: MenuType }) => {
  const { item } = props;
  const { menuOpen } = useGlobalStore();
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
          text={menuOpen ? item.meta.title : ""}
          className="justify-center"
          icon={item.meta.icon}
          active={collapseActive}
          title={menuOpen ? "" : item.meta.title}
          labelElement={
            menuOpen && <Icon icon={open ? "caret-up" : "caret-down"} />
          }
          onClick={handleCollapse}
        ></MenuItem2>
      ) : (
        <MenuItem2
          className="justify-center"
          icon={item.meta.icon}
          active={collapseActive}
          labelElement={undefined}
          onClick={handleCollapse}
        >
          {item.children &&
            item.children.map((sub) => (
              <MenuItem2
                key={sub.path}
                icon={sub.meta.icon}
                active={pathname === sub.path}
                title={sub.meta.title}
                onClick={() => handleClick(sub.path)}
                text={sub.meta.title}
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
                  title={menuOpen ? "" : sub.meta.title}
                  onClick={() => handleClick(sub.path)}
                  text={menuOpen ? sub.meta.title : ""}
                ></MenuItem2>
              ))}
          </Menu>
        </Collapse>
      )}
    </div>
  );
};

export default CollapseMenu;
