import LayoutClassic from "./LayoutClassic";
import { ReactElement, Suspense } from "react";
import ThemeDrawer from "./components/Setting/components/ThemeDrawer";
import { HotkeysProvider, Spinner, SpinnerSize } from "@blueprintjs/core";
import LayoutColumn from "./LayoutColumn";
import LayoutTransverse from "./LayoutTransverse";
import LayoutVertical from "./LayoutVertical";
import useGlobalStore from "../hooks/useGlobalStore";
import "./style.scss";
import GlobalAlert from "../components/GlobalAlert";

export type TLayout = "CLASSIC" | "COLUMN" | "VERTICAL" | "TRANSVERSE";

const LAYOUT_BASE: Record<TLayout, ReactElement> = {
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
    <Suspense fallback={<Spinner size={SpinnerSize.LARGE} />}>
      <HotkeysProvider>
        <div className={`w-full h-full ${darkTheme ? "bp4-dark" : ""}`}>
          {LAYOUT_BASE[layoutType]}
          <ThemeDrawer />
          <GlobalAlert isOpen={false} />
        </div>
      </HotkeysProvider>
    </Suspense>
  );
};
