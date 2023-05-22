import { Icon } from "@blueprintjs/core";
import useGlobalStore from "../../../../hooks/useGlobalStore";
import { useTranslation } from "react-i18next";
import { IMenu } from "../../../../config/menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MenuOpenItem = (props: { item: IMenu }) => {
  const { item } = props;
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = (item: IMenu) => {
    if (!item.children) {
      navigate(item.path);
    } else {
      setOpen(!open);
    }
  };
  return (
    <>
      <div
        key={item.path}
        onClick={() => handleClick(item)}
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
        {item.children ? (
          <Icon
            icon={open ? "caret-up" : "caret-down"}
            size={assemblyLarge ? 20 : 13}
          />
        ) : (
          <Icon
            icon="star-empty"
            className="invisible"
            size={assemblyLarge ? 20 : 13}
          />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {item.children &&
          item.children.map((item) => <MenuOpenItem item={item} />)}
      </div>
    </>
  );
};

export default MenuOpenItem;
