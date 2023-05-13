import KeepAlive from "react-activation";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.scss";
import RouteBeforeEach from "../../../components/RouteBeforeEach";

const Content = () => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} timeout={300} classNames="page">
        {() => (
          <KeepAlive saveScrollPosition>
            <RouteBeforeEach />
          </KeepAlive>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Content;
