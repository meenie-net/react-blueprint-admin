import { MenuDivider, Icon, Collapse, Menu } from "@blueprintjs/core";
import { MenuItem2 } from "@blueprintjs/popover2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../../../../../../hooks/useGlobalStore";

const CollapseMenu = (props: { key: string; item: MenuType }) => {
  const { item } = props;
  const { menuOpen } = useGlobalStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleCollapse = () => {
    setOpen(!open);
  };
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <MenuDivider />
      <MenuItem2
        text={menuOpen ? item.meta.title : ""}
        className="justify-center"
        icon={item.meta.icon}
        title={menuOpen ? "" : item.meta.title}
        labelElement={
          menuOpen && <Icon icon={open ? "caret-up" : "caret-down"} />
        }
        onClick={handleCollapse}
      ></MenuItem2>
      {menuOpen && (
        <Collapse isOpen={open}>
          <Menu large={false} className="min-w-[45px] bg-slate-100">
            {item.children &&
              item.children.map((sub) => (
                <MenuItem2
                  key={sub.path}
                  icon={sub.meta.icon}
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
