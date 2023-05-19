import useGlobalStore from "../../hooks/useGlobalStore";
import Content from "../components/Content";
import Setting from "../components/Setting";
import Tabs from "../components/Tabs";
import VerticalMenu from "./VerticalMenu";
import Footer from "../components/Footer";
import { assetsUrl } from "../../utils";

const LayoutVertical = () => {
  const {
    setting: { assemblyLarge },
  } = useGlobalStore();

  return (
    // ClassicLayoutContainer
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div
        className={`border-box flex w-full flex-shrink-0 items-center justify-between bg-dark-bg text-dark-text ${
          assemblyLarge ? "h-[55px]" : "h-[45px]"
        }`}
      >
        {/* HeaderLeft */}
        <div
          className={`flex justify-evenly overflow-hidden text-center font-mono text-xl font-black transition-all ${
            assemblyLarge ? "w-[160px]" : "w-[150px]"
          }`}
        >
          <img
            src={assetsUrl("/assets/avatar.png")}
            alt=""
            className={`${
              assemblyLarge ? "h-8 w-8 rounded-full" : "h-7 w-7 rounded-full"
            }`}
          />
          <span className="whitespace-nowrap">Mee Admin</span>
        </div>
        {/* Menu */}
        <div id="sider-menu-container">
          <VerticalMenu />
        </div>
        {/* HeaderRight */}
        <div className="flex items-center justify-between pl-4 pr-6">
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
  );
};

export default LayoutVertical;
