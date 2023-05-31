import { Button, Tabs, Tab, Icon } from "@blueprintjs/core";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ITab, removeTab, setTab } from "../../../stores/global";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { RootState } from "../../../stores";
import { useTranslation } from "react-i18next";

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

  // let overflow1 = false;
  const [overflow, setOverflow] = useState(false);

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
        <div className="relative ml-1 overflow-x-hidden">
          {overflow && (
            <>
              <span className="absolute left-0 z-50 flex h-full w-fit items-center bg-white pr-2">
                <Icon icon="arrow-left" />
              </span>
              <span className="absolute right-0 z-50 flex h-full w-fit items-center bg-white px-2">
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
            className={`transition-all ${
              overflow ? "translate-x-6" : "translate-x-0"
            }`}
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
