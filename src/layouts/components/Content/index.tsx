import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.scss";
import { useLocation, useOutlet } from "react-router-dom";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css";
import { useEffect } from "react";

const Content = () => {
  const currentOutlet = useOutlet();
  const location = useLocation();
  console.log("currentOutlet", currentOutlet);
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
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} timeout={300} classNames="page">
        {currentOutlet}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Content;
