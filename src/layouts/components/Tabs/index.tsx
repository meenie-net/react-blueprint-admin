import { Button, Card, Tabs, Tab, Icon } from "@blueprintjs/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeTab, setTab } from "../../../stores/global";
import useGlobalStore from "../../../hooks/useGlobalStore";

const TabsSection = () => {
  const { assemblyLarge } = useGlobalStore();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tabList } = useSelector((state: RootState) => state.global);

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
  return (
    <>
      <Card className="flex justify-between p-1 border-s-2 border-gray-50">
        <div className="overflow-x-hidden ml-1">
          <Tabs
            id="tabs"
            animate
            fill
            large={assemblyLarge}
            onChange={(nextTabId: string) => handleChange(nextTabId)}
            selectedTabId={location.pathname}
          >
            {tabList.length &&
              tabList.map((tab: TabType, i: number) => (
                <Tab
                  key={tab.path}
                  id={tab.path}
                  title={tab.meta.title}
                  icon={tab.meta.icon}
                  className="group"
                >
                  {tab.path != "/" && (
                    <Icon
                      icon="small-cross"
                      className="group-hover:animate-appear_right"
                      onClick={(e) => handleRemove(e, i)}
                    />
                  )}
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
  );
};

export default TabsSection;
