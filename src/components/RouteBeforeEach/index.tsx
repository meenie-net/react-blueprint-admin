import { useOutlet, useLocation } from "react-router-dom";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css";
import { useEffect } from "react";

const RouteBeforeEach = () => {
  const currentOutlet = useOutlet();
  const location = useLocation();
  // todo
  // auth逻辑
  useEffect(() => {
    // 使用 NProgress
    NProgress.configure({ easing: "ease", speed: 1000 });
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [location]);
  return <>{currentOutlet}</>;
};

export default RouteBeforeEach;
