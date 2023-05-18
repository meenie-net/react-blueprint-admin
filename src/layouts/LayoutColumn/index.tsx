import { Button, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import useGlobalStore from "../../hooks/useGlobalStore";
import { changeMenuOpen } from "../../stores/global";
import Content from "../components/Content";
import Setting from "../components/Setting";
import Tabs from "../components/Tabs";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import ColumnSider from "./components/Sider";

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
    <div className="flex flex-row w-full h-full">
      {/* SiderMenu */}
      <div
        id="sider-menu-container"
        className={`${
          assemblyLarge
            ? menuOpen
              ? "dark w-classic-large-open-left min-w-classic-large-open-left"
              : "dark w-classic-large-close-left min-w-classic-large-close-left"
            : menuOpen
            ? "dark w-classic-open-left min-w-classic-open-left"
            : "dark w-classic-close-left min-w-classic-close-left"
        }`}
      >
        <ColumnSider />
      </div>
      {/* PageRight */}
      <div className="flex flex-col content-between flex-auto min-w-0">
        {/* Header */}
        <div
          className={`${
            assemblyLarge
              ? "flex items-center flex-shrink-0 w-full divide-x-2 border-box h-classic-large-header text-dark-text bg-dark-bg"
              : "flex items-center flex-shrink-0 w-full divide-x-2 border-box h-classic-header text-dark-text bg-dark-bg"
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

export default LayoutColumn;
