import { Menu, MenuDivider, MenuItem, Icon, Collapse } from "@blueprintjs/core";
import menu from "../../../../config/menu";
import { useNavigate } from "react-router-dom";

const ClassicSider = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <Menu large className="min-w-[160px]">
        {menu.map((item) => {
          if (item.children && item.children.length > 0) {
            return (
              <div key={item.path}>
                <MenuDivider />
                <MenuItem
                  text={item.meta.title}
                  className="justify-center"
                  icon={item.meta.icon}
                  labelElement={<Icon icon="caret-down" />}
                ></MenuItem>
                <Collapse isOpen={true}>
                  <Menu large={false} className="min-w-[145px] bg-slate-100">
                    {item.children.map((sub) => (
                      <MenuItem
                        key={sub.path}
                        icon={sub.meta.icon}
                        onClick={() => handleClick(sub.path)}
                        text={sub.meta.title}
                      ></MenuItem>
                    ))}
                  </Menu>
                </Collapse>
              </div>
            );
          } else {
            return (
              <MenuItem
                key={item.path}
                icon={item.meta.icon}
                text={item.meta.title}
                onClick={() => handleClick(item.path)}
                className="justify-center"
                labelElement={<Icon icon="star-empty" className="invisible" />}
              />
            );
          }
        })}
      </Menu>
    </>
  );
};

export default ClassicSider;
