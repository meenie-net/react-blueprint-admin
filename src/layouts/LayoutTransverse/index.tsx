import { Button, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import useGlobalStore from "../../hooks/useGlobalStore";
import { changeMenuOpen } from "../../stores/global";
import ClassicSider from "../LayoutClassic/ClassicSider";
import Content from "../components/Content";
import Setting from "../components/Setting";
import Breadcrumb from "../components/Breadcrumb";
import Tabs from "../components/Tabs";

const LayoutTransverse = () => {
  const {
    setting: { assemblyLarge, menuOpen },
  } = useGlobalStore();
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(changeMenuOpen());
  };

  return (
    // todo
    // ClassicLayoutContainer
    <div className="flex h-full w-full flex-col">
      {/* Header */}
      <div
        className={`${
          assemblyLarge
            ? "border-box flex h-[55px] w-full items-center divide-x-2 bg-dark-bg text-dark-text"
            : "border-box flex h-[45px] w-full items-center divide-x-2 bg-dark-bg text-dark-text"
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
              assemblyLarge ? "h-8 w-8 rounded-full" : "h-7 w-7 rounded-full"
            }`}
          />
          {menuOpen && <span>Mee Admin</span>}
        </div>
        {/* HeaderRight */}
        <div className="flex flex-auto items-center justify-between pl-4">
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
      <div className="flex w-full flex-auto">
        {/* SiderMenu */}
        <div
          id="sider-menu-container"
          className={`${
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
        <div className="flex h-full flex-auto flex-col">
          {/* Tabs */}
          <Tabs />
          {/* Content */}
          <div
            id="content"
            className="h-classic-container flex-auto bg-slate-200 p-3"
          >
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTransverse;
