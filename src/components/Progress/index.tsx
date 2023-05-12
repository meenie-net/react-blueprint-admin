import { useEffect } from "react";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css";
const Progress = () => {
  useEffect(() => {
    // 使用 NProgress
    console.log("111", 111);
    NProgress.configure({ easing: "ease", speed: 1000 });
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
  return <></>;
};

export default Progress;
