import { IconName, Intent, MaybeElement } from "@blueprintjs/core";
import EmitEventEnum from "../enums/emitEvent";
import emitter from "../utils/EventEmitter";
import { AppToaster } from "../utils/Toaster";
import { ResCode } from "../enums/http";

export const useHandleConfirm = (config: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (args?: any) => Promise<ResType>;
  param?: object;
  message: string;
  icon?: IconName | MaybeElement;
  intent?: Intent | undefined;
}) => {
  const { handler, param, message, icon, intent } = config;
  AppToaster.clear();
  emitter.emit(EmitEventEnum.OpenGlobalAlert, {
    message,
    icon,
    intent,
  });
  return new Promise((resolve, reject) => {
    const cb = async () => {
      const { code } = await handler(param);
      if (code === ResCode.SUCCESS) {
        AppToaster.show({
          message: "成功",
          icon: "tick",
          intent: "success",
          timeout: 1000,
        });
        resolve(true);
      } else {
        reject(false);
        AppToaster.show({ message: "失败", icon: "cross", intent: "danger" });
      }
      emitter.off(EmitEventEnum.GlobalAlertConfirm, cb);
      emitter.emit(EmitEventEnum.CloseGlobalAlert);
    };
    emitter.on(EmitEventEnum.GlobalAlertConfirm, cb);
    emitter.on(EmitEventEnum.GlobalAlertCancel, () => {
      emitter.off(EmitEventEnum.GlobalAlertConfirm, cb);
    });
  });
};
