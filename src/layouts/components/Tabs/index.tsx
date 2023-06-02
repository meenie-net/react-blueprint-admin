import { Button, Tabs, Tab, Icon } from "@blueprintjs/core";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ITab, removeTab, setTab } from "../../../stores/global";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { RootState } from "../../../stores";
import { useTranslation } from "react-i18next";
import "./style.scss";

const TabsSection = () => {
  const {
    setting: { assemblyLarge, showTab, showTabIcon },
  } = useGlobalStore();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tabList } = useSelector((state: RootState) => state.global);
  const { t } = useTranslation();

  const tabContainerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);
  const [overflowClass, setOverflowClass] = useState("");

  const computeOverflow = () => {
    if (!tabContainerRef.current) return;
    const tab = tabContainerRef.current.querySelector(
      ".bp4-tab-list"
    ) as HTMLElement;
    if (!tab) return;
    setOverflow(
      tabContainerRef.current.clientWidth - 40 === tab.getClientRects()[0].width
        ? tab.scrollWidth > tabContainerRef.current.clientWidth - 40
        : tabContainerRef.current.clientWidth - 40 <
            tab.getClientRects()[0].width
    );
    const tabContainer = document.querySelector(".bp4-tabs") as HTMLElement;
    if (!tabContainer) return;
    tabContainer.removeAttribute("style");
    if (
      tabContainerRef.current.clientWidth - 40 === tab.getClientRects()[0].width
        ? tab.scrollWidth > tabContainerRef.current.clientWidth - 40
        : tabContainerRef.current.clientWidth - 40 <
          tab.getClientRects()[0].width
    ) {
      setOverflowClass("translate-x-6");
    } else {
      setOverflowClass("translate-x-0");
    }
    console.log("overflow", overflow);
  };

  useEffect(() => computeOverflow(), [location, tabList]);

  useEffect(() => {
    const overflowObserver = new ResizeObserver(() => {
      computeOverflow();
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    overflowObserver.observe(tabContainerRef.current!);
    return () => {
      overflowObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    dispatch(setTab(location.pathname));
  }, [location]);

  const handleChange = (nextTabId: string) => {
    navigate(nextTabId);
    // todo
    // when overflow，click the tab which half hide should animate to show it's whole width
    const tabContainer = document.querySelector(".bp4-tabs") as HTMLElement;
    if (!tabContainer) return;
    const targetTab = tabContainer.querySelector(
      `[id="bp4-tab-title_tabs_${nextTabId}"]`
    ) as HTMLElement;
    if (!targetTab) return;
    const targetTabLeftBoundary = targetTab.getBoundingClientRect().left;
    const targetTabRightBoundary =
      targetTab.getBoundingClientRect().left + targetTab.clientWidth;
    if (!leftRef.current || !rightRef.current) return;
    const leftBoundary = leftRef.current.getBoundingClientRect().left + 24;
    const rightBoundary = rightRef.current.getBoundingClientRect().left;
    if (
      targetTabLeftBoundary < leftBoundary &&
      leftBoundary < targetTabRightBoundary
    ) {
      console.log("1", 1);
      setOverflowClass("translate-x-[30px]");
    } else if (
      targetTabLeftBoundary < rightBoundary &&
      rightBoundary < targetTabRightBoundary
    ) {
      const matrix = new WebKitCSSMatrix(
        window.getComputedStyle(tabContainer).transform
      );
      tabContainer.style.transform =
        "translateX(" +
        (matrix.m41 - targetTabRightBoundary + rightBoundary) +
        "px)";
    }
  };
  const handleRemove = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const { path } = tabList[index];
    if (path === "/") return;
    if (path === location.pathname) {
      const nextTab = tabList[index - 1] || tabList[index + 1];
      if (!nextTab) return;
      navigate(nextTab.path);
    }
    dispatch(removeTab(path));
  };
  return showTab ? (
    <>
      <div
        ref={tabContainerRef}
        className="custom-border-b dark flex items-center justify-between p-1"
      >
        <div className="relative ml-1 overflow-hidden">
          {overflow && (
            <>
              <span
                ref={leftRef}
                className="absolute left-0 z-50 flex h-full w-fit items-center bg-white pr-2"
              >
                <Icon icon="arrow-left" />
              </span>
              <span
                ref={rightRef}
                className="absolute right-0 z-50 flex h-full w-fit items-center bg-white px-2"
              >
                <Icon icon="arrow-right" />
              </span>
            </>
          )}
          <Tabs
            id="tabs"
            animate
            fill
            large={assemblyLarge}
            onChange={(nextTabId: string) => handleChange(nextTabId)}
            selectedTabId={location.pathname}
            className={`transition-all ${overflowClass}`}
          >
            {tabList.length &&
              tabList.map((tab: ITab, i: number) => (
                <Tab
                  key={tab.path}
                  id={tab.path}
                  title={t(`menu.${tab.meta.name}`)}
                  icon={showTabIcon && tab.meta.icon}
                  className="group select-none"
                >
                  <Icon
                    icon="small-cross"
                    className="group-hover:animate-appear_right"
                    style={{
                      display: tab.path === "/" ? "none" : "block",
                    }}
                    onClick={(e) => handleRemove(e, i)}
                  />
                </Tab>
              ))}
          </Tabs>
        </div>
        <div className="mr-1 flex items-center">
          <Button
            icon="more"
            minimal={true}
            large={assemblyLarge}
            small={!assemblyLarge}
          />
        </div>
      </div>
    </>
  ) : null;
};

export default TabsSection;
