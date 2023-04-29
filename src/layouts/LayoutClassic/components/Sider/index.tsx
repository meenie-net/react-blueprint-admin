import { Menu, Icon } from "@blueprintjs/core";
import menu from "../../../../config/menu";
import { useNavigate } from "react-router-dom";
import CollapseMenu from "./components/CollapseMenu";
import { MenuItem2 } from "@blueprintjs/popover2";
import useGlobalStore from "../../../../hooks/useGlobalStore";

const ClassicSider = () => {
  const { assemblyLarge, menuOpen } = useGlobalStore();
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <>
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
                title={menuOpen ? "" : item.meta.title}
                text={menuOpen ? item.meta.title : ""}
                onClick={() => handleClick(item.path)}
                className="self-center"
                labelElement={
                  menuOpen && <Icon icon="star-empty" className="invisible" />
                }
              />
            );
          }
        })}
      </Menu>
    </>
  );
};

export default ClassicSider;
