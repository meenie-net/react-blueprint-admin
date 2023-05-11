import {
  Alert,
  AlertProps,
  IconName,
  Intent,
  MaybeElement,
} from "@blueprintjs/core";
import emitter from "../../utils/EventEmitter";
import { useState } from "react";
import EmitEventEnum from "../../enums/emitEvent";
const GlobalAlert = (props: AlertProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState<IconName | MaybeElement>("lightbulb");
  const [intent, setIntent] = useState<Intent | undefined>("none");
  const [message, setMessage] = useState("");
  const init = (payload: {
    message: string;
    icon: IconName | MaybeElement;
    intent: Intent | undefined;
  }) => {
    setMessage(payload.message);
    setIcon(payload.icon);
    setIntent(payload.intent);
    setOpen(true);
  };
  const handleConfirm = async () => {
    setLoading(true);
    emitter.emit(EmitEventEnum.GlobalAlertConfirm);
  };
  const close = () => {
    setMessage("");
    setIcon("lightbulb");
    setIntent("none");
    setLoading(false);
    setOpen(false);
  };
  const handleCancel = () => {
    emitter.off(EmitEventEnum.OpenGlobalAlert, init);
    emitter.off(EmitEventEnum.CloseGlobalAlert, close);
    close();
  };
  emitter.on(EmitEventEnum.OpenGlobalAlert, init);
  emitter.on(EmitEventEnum.CloseGlobalAlert, close);
  return (
    <Alert
      {...props}
      cancelButtonText="取消"
      confirmButtonText="确认"
      icon={icon}
      isOpen={open}
      loading={loading}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      intent={intent}
    >
      <p>{message}</p>
    </Alert>
  );
};

export default GlobalAlert;
