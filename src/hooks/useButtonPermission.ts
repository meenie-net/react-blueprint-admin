import { useRouteHandle } from "./useRouteHandle";
import { usePermissionStore } from "./useStore";

export const useButtonPermission = () => {
  const { name } = useRouteHandle();
  const buttons = usePermissionStore().buttonPermission[name] || [];
  const BUTTONS = () => {
    const currentPageButtonPermisson: { [key: string]: boolean } = {};
    buttons.forEach((item: string) => {
      currentPageButtonPermisson[item] = true;
    });
    return currentPageButtonPermisson;
  };
  return { BUTTONS };
};
