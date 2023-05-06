import { Button, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import useGlobalStore from "../../hooks/useGlobalStore";
import { changeMenuOpen } from "../../stores/global";
import ClassicSider from "../LayoutClassic/components/Sider";
import Content from "../components/Content";
import Setting from "../components/Setting";
import Tabs from "../components/Tabs";
import Breadcrumb from "../components/Breadcrumb";

const LayoutColumn = () => {
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
        className={`${
          assemblyLarge
            ? "flex items-center w-full divide-x-2 border-box h-classic-large-header text-dark-text bg-dark-bg"
            : "flex items-center w-full divide-x-2 border-box h-classic-header text-dark-text bg-dark-bg"
        }`}
      >
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
          <img
            src="../../../../src/assets/avatar.png"
            alt=""
            className={`${
              assemblyLarge ? "w-8 h-8 rounded-full" : "w-7 h-7 rounded-full"
            }`}
          />
          {menuOpen && <span>Mee Admin</span>}
        </div>
        {/* HeaderRight */}
        <div className="flex items-center justify-between flex-auto pl-4">
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
      <div className="flex flex-auto w-full">
        {/* SiderMenu */}
        <div
          id="sider-menu-container"
          className={`${
            assemblyLarge
              ? menuOpen
                ? "w-classic-large-open-left min-w-classic-large-open-left"
                : "w-classic-large-close-left min-w-classic-large-close-left"
              : menuOpen
              ? "w-classic-open-left min-w-classic-open-left"
              : "w-classic-close-left min-w-classic-close-left"
          }`}
        >
          <ClassicSider />
        </div>
        {/* ContentContainer */}
        <div className="flex flex-col flex-auto h-full">
          {/* Tabs */}
          <Tabs />
          {/* Content */}
          <div
            id="content"
            className="flex-auto p-3 bg-slate-200 h-classic-container"
          >
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutColumn;
