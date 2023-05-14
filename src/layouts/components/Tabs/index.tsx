import { Button, Card, Tabs, Tab, Icon } from "@blueprintjs/core";
import { useEffect } from "react";
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
      <Card className="flex justify-between p-1 border-s-2 border-gray-50">
        <div className="ml-1 overflow-x-hidden">
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
        <div className="flex items-center mr-1">
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
