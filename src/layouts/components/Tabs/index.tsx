import { Button, Card, Tabs, Tab, Icon } from "@blueprintjs/core";
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

  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    // todo tabs overflow
    if (!tabContainerRef.current) return;
    const tab = tabContainerRef.current.querySelector(
      ".bp4-tab-list"
    ) as HTMLElement;
    if (!tab) return;
    if (tab.offsetWidth < tab.scrollWidth) {
      setOverflow(false);
    } else {
      setOverflow(true);
    }
    console.log("overflow", overflow);
  }, [location, tabList]);

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
      <Card className="flex justify-between border-s-2 border-gray-50 p-1">
        <div ref={tabContainerRef} className="ml-1 overflow-x-hidden">
          <Tabs
            id="tabs"
            animate
            fill
            large={assemblyLarge}
            onChange={(nextTabId: string) => handleChange(nextTabId)}
            selectedTabId={location.pathname}
          >
            {tabList.length &&
              tabList.map((tab: ITab, i: number) => (
                <Tab
                  key={tab.path}
                  id={tab.path}
                  title={t(`menu.${tab.meta.name}`)}
                  icon={showTabIcon && tab.meta.icon}
                  className="group"
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
      </Card>
    </>
  ) : null;
};

export default TabsSection;
