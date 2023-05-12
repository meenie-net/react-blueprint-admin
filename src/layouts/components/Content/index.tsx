import KeepAlive from "react-activation";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.scss";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css";
import { useEffect } from "react";

const Content = () => {
  const currentOutlet = useOutlet();
  const location = useLocation();
  useEffect(() => {
    // 使用 NProgress
    NProgress.configure({ easing: "ease", speed: 1000 });
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [location]);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} timeout={300} classNames="page">
        {() => <KeepAlive saveScrollPosition>{currentOutlet}</KeepAlive>}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Content;
