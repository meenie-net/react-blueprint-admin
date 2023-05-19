import { Button, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import useGlobalStore from "../../hooks/useGlobalStore";
import { changeMenuOpen } from "../../stores/global";
import Content from "../components/Content";
import Setting from "../components/Setting";
import Breadcrumb from "../components/Breadcrumb";
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
import ClassicSider from "../LayoutClassic/ClassicSider";
import { assetsUrl } from "../../utils";

const LayoutTransverse = () => {
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(changeMenuOpen());
  };

  return (
    // ClassicLayoutContainer
    <div className="flex flex-row w-full h-full dark">
      {/* SiderMenu */}
      <div id="sider-menu-container">
        {/* Logo */}
        <div
          className={`flex items-center justify-evenly overflow-hidden text-center font-mono text-xl font-black transition-all ${
            assemblyLarge
              ? menuOpen
                ? "h-[55px] w-[160px] min-w-[160px]"
                : "h-[55px] w-[60px] min-w-[60px]"
              : menuOpen
              ? "h-[45px] w-[160px] min-w-[160px]"
              : "h-[45px] w-[50px] min-w-[50px]"
          }`}
        >
          <img
            src={assetsUrl("/assets/avatar.png")}
            alt=""
            className={`${
              assemblyLarge ? "h-8 w-8 rounded-full" : "h-7 w-7 rounded-full"
            }`}
          />
          {menuOpen && <span className="whitespace-nowrap">Mee Admin</span>}
        </div>
        {/* Menu */}
        <ClassicSider />
      </div>
      {/* PageRight */}
      <div className="flex flex-col content-between flex-auto min-w-0">
        {/* Header */}
        <div
          className={`border-box flex w-full flex-shrink-0 items-center divide-x-2 ${
            assemblyLarge ? "h-[55px]" : "h-[45px]"
          }`}
        >
          {/* HeaderRight */}
          <div className="flex items-center justify-between flex-auto pl-4 pr-6">
            {/* OpenIcon & Breadcrumb */}
            <div className="flex items-center">
              {/* OpenIcon */}
              <Button minimal={true} onClick={handleMenuOpen}>
                <Icon
                  icon={menuOpen ? "menu-closed" : "menu-open"}
                  className="animate-appear_right"
                  size={assemblyLarge ? 28 : 24}
                ></Icon>
              </Button>
              {/* Breadcrumb */}
              <div className="ml-4">
                <Breadcrumb />
              </div>
            </div>
            {/* Setting */}
            <div>
              <Setting />
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="flex flex-auto min-h-0">
          {/* ContentContainer */}
          <div className="flex flex-col content-between flex-auto min-w-0">
            {/* Tabs */}
            <Tabs />
            {/* Content */}
            <div
              id="content"
              className="flex flex-col flex-auto min-h-0 p-3 dark bg-slate-200"
            >
              <Content />
            </div>
            <Footer className="py-1 text-center dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTransverse;
