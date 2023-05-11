import { IconName, Intent, MaybeElement } from "@blueprintjs/core";
import EmitEventEnum from "../enums/emitEvent";
import emitter from "../utils/EventEmitter";
import { AppToaster } from "../utils/Toaster";
import { ResCode } from "../enums/http";

export const useHandleConfirm = (config: {
  handler: (args?: any) => Promise<ResType>;
  param?: object;
  message: string;
  icon?: IconName | MaybeElement;
  intent?: Intent | undefined;
}) => {
  const { handler, param, message, icon, intent } = config;
  return new Promise((resolve, reject) => {
    emitter.emit(EmitEventEnum.OpenGlobalAlert, {
      message,
      icon,
      intent,
    });
    const cb = async () => {
      const { code } = await handler(param);
      if (code === ResCode.SUCCESS) {
        emitter.emit(EmitEventEnum.CloseGlobalAlert);
        emitter.off(EmitEventEnum.GlobalAlertConfirm, cb);
        AppToaster.show({ message: "成功", icon: "tick", intent: "success" });
        resolve(true);
      } else {
        AppToaster.show({ message: "失败", icon: "cross", intent: "danger" });
        reject(false);
      }
    };
    emitter.on(EmitEventEnum.GlobalAlertConfirm, cb);
  });
};
