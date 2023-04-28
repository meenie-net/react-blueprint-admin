import { Button, Card, Tabs, Tab, Icon } from "@blueprintjs/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeTab, setTab } from "../../../stores/global";

const TabsSection = () => {
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
  return (
    <>
      <Card className="flex justify-between p-1 border-s-2 border-gray-50">
        <div className="overflow-x-hidden">
          <Tabs
            id="tabs"
            animate
            fill
            onChange={(nextTabId: string) => handleChange(nextTabId)}
            selectedTabId={location.pathname}
          >
            {tabList.length &&
              tabList.map((tab: TabType) => (
                <Tab
                  key={tab.path}
                  id={tab.path}
                  title={tab.meta.title}
                  icon={tab.meta.icon}
                  className="group"
                >
                  <Icon
                    icon="small-cross"
                    className="group-hover:animate-appear_right"
                  />
                </Tab>
              ))}
          </Tabs>
        </div>
        <div>
          <Button icon="add" minimal={true} small />
        </div>
      </Card>
    </>
  );
};

export default TabsSection;
