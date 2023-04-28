import { useSelector } from "react-redux";
import LayoutClassic from "./LayoutClassic";
import { ReactElement } from "react";
import ThemeDrawer from "./components/Setting/components/ThemeDrawer";

const LAYOUT_BASE: Record<LayoutType, ReactElement> = {
  CLASSIC: <LayoutClassic></LayoutClassic>,
  COLUMN: <LayoutClassic></LayoutClassic>,
};

export const Layout = () => {
  const { layoutType }: { layoutType: LayoutType } = useSelector(
    (state: RootState) => state.global
  );
  return (
    <>
      {LAYOUT_BASE[layoutType]}
      <ThemeDrawer />
    </>
  );
};
