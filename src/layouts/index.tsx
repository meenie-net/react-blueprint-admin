import { useSelector } from "react-redux";
import LayoutClassic from "./LayoutClassic";
import { ReactElement } from "react";
import ThemeDrawer from "./components/Setting/components/ThemeDrawer";
import { HotkeysProvider } from "@blueprintjs/core";
import { RootState } from "../stores";
import LayoutColumn from "./LayoutColumn";
import LayoutTransverse from "./LayoutTransverse";
import LayoutVertical from "./LayoutVertical";
import useGlobalStore from "../hooks/useGlobalStore";

const LAYOUT_BASE: Record<LayoutType, ReactElement> = {
  CLASSIC: <LayoutClassic></LayoutClassic>,
  COLUMN: <LayoutColumn></LayoutColumn>,
  VERTICAL: <LayoutVertical></LayoutVertical>,
  TRANSVERSE: <LayoutTransverse></LayoutTransverse>,
};

export const Layout = () => {
  const {
    layoutType,
    setting: { darkTheme },
  } = useGlobalStore();
  return (
    <HotkeysProvider>
      <div className={`${darkTheme ? "bp4-dark" : ""}`}>
        {LAYOUT_BASE[layoutType]}
        <ThemeDrawer />
      </div>
    </HotkeysProvider>
  );
};
