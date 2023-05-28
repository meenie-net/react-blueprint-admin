import { useEffect } from "react";
import { useRouteHandle } from "../../hooks/useRouteHandle";

const NestedMenu = () => {
  console.log("3", 3);
  const routeHandle = useRouteHandle();
  useEffect(() => {
    console.log("2", 2);
  });
  return (
    <div>
      这是嵌套菜单{routeHandle.name}
      <input placeholder="input" type="text" />
    </div>
  );
};

export default NestedMenu;
