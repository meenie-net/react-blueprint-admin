import { Button, Icon } from "@blueprintjs/core";
import { useState } from "react";
import ClassicSider from "./components/Sider";
import Tabs from "../components/Tabs";
import Setting from "../components/Setting";
import Breadcrumb from "../components/Breadcrumb";
import Content from "../components/Content";
import "./style.scss";

const LayoutClassic = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="w-full h-full">
      <div className="flex items-center w-full divide-x-2 border-box h-classic-header dark-base">
        <div className="font-mono text-3xl font-black text-center w-classic-left">
          Mee Admin
        </div>
        <div className="flex items-center justify-between flex-auto pl-4 w-classic-right">
          <div className="flex items-center">
            <Button minimal={true} onClick={() => setMenuOpen(!menuOpen)}>
              <Icon
                icon={menuOpen ? "menu-closed" : "menu-open"}
                className="animate-appear_right"
                color="#f6f7f9"
                size={28}
              ></Icon>
            </Button>
            <div className="ml-4">
              <Breadcrumb />
            </div>
          </div>
          <div>
            <Setting />
          </div>
        </div>
      </div>
      <div className="flex w-full h-classic-body">
        <div className=" w-classic-left">
          <ClassicSider />
        </div>
        <div className="flex-auto h-full">
          <Tabs />
          <div className="p-3 bg-slate-200 h-classic-container">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutClassic;
