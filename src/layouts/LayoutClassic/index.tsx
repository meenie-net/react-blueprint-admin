import { Button, Icon } from "@blueprintjs/core";
import ClassicSider from "./components/Sider";
import Tabs from "../components/Tabs";
import Setting from "../components/Setting";
import Breadcrumb from "../components/Breadcrumb";
import Content from "../components/Content";
import "./style.scss";
import { useDispatch } from "react-redux";
import { changeMenuOpen } from "../../stores/global";
import useGlobalStore from "../../hooks/useGlobalStore";
import Footer from "../components/Footer";
import { assetsUrl } from "../../utils";

const LayoutClassic = () => {
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(changeMenuOpen());
  };

  return (
    // ClassicLayoutContainer
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div
        className={`border-box flex w-full flex-shrink-0 items-center divide-x-2 bg-dark-bg text-dark-text ${
          assemblyLarge ? "h-[55px]" : "h-[45px]"
        }`}
      >
        {/* HeaderLeft */}
        <div
          className={`flex justify-evenly overflow-hidden text-center font-mono text-xl font-black transition-all ${
            assemblyLarge
              ? menuOpen
                ? "w-[160px] min-w-[160px]"
                : "w-[60px] min-w-[60px]"
              : menuOpen
              ? "w-[160px] min-w-[160px]"
              : "w-[50px] min-w-[50px]"
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
        {/* HeaderRight */}
        <div className="flex items-center justify-between flex-auto pl-4 pr-6">
          {/* OpenIcon & Breadcrumb */}
          <div className="flex items-center">
            {/* OpenIcon */}
            <Button minimal={true} onClick={handleMenuOpen}>
              <Icon
                icon={menuOpen ? "menu-closed" : "menu-open"}
                className="animate-appear_right"
                color="#f6f7f9"
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
        {/* SiderMenu */}
        <div
          id="sider-menu-container"
          className={`dark transition-all ${
            assemblyLarge
              ? menuOpen
                ? "w-[160px] min-w-[160px]"
                : "w-[60px] min-w-[60px]"
              : menuOpen
              ? "w-[160px] min-w-[160px]"
              : "w-[50px] min-w-[50px]"
          }`}
        >
          <ClassicSider />
        </div>
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
  );
};

export default LayoutClassic;
