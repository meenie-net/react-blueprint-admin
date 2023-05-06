import KeepAlive from "react-activation";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.scss";

const Content = () => {
  const currentOutlet = useOutlet();
  const location = useLocation();
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} timeout={300} classNames="page">
        {() => <KeepAlive saveScrollPosition>{currentOutlet}</KeepAlive>}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Content;
