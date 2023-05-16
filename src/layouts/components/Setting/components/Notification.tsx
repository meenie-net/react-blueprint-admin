import { Tab, Tabs } from "@blueprintjs/core";

const Notification = () => {
  return (
    <Tabs animate className="p-4">
      <Tab id="rx" title="通知" panel={<NotificationPanel />} />
      <Tab
        id="ng"
        title="消息"
        panel={<MessagePanel />}
        tagContent={10}
        tagProps={{ round: true }}
      />
    </Tabs>
  );
};

const NotificationPanel = () => <>通知</>;
const MessagePanel = () => <>消息</>;

export default Notification;
