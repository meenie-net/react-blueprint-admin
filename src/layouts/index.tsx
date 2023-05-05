import { useSelector } from "react-redux";
import LayoutClassic from "./LayoutClassic";
import { ReactElement } from "react";
import ThemeDrawer from "./components/Setting/components/ThemeDrawer";
import { HotkeysProvider } from "@blueprintjs/core";
import { RootState } from "../stores";

const LAYOUT_BASE: Record<LayoutType, ReactElement> = {
  CLASSIC: <LayoutClassic></LayoutClassic>,
  COLUMN: <LayoutClassic></LayoutClassic>,
  VERTICAL: <LayoutClassic></LayoutClassic>,
  TRANSVERSE: <LayoutClassic></LayoutClassic>,
};

export const Layout = () => {
  const { layoutType }: { layoutType: LayoutType } = useSelector(
    (state: RootState) => state.global
  );
  return (
    <HotkeysProvider>
      <>
        {LAYOUT_BASE[layoutType]}
        <ThemeDrawer />
      </>
    </HotkeysProvider>
  );
};
