import { Card } from "@blueprintjs/core";
import KeepAlive from "react-activation";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.scss";

const Content = () => {
  const currentOutlet = useOutlet();
  const location = useLocation();
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        appear={true}
        timeout={{ appear: 300, enter: 300, exit: 300 }}
        mountOnEnter
        unmountOnExit
        classNames="page"
      >
        {() => (
          <Card className="w-full h-full overflow-y-auto animate-appear_right">
            <KeepAlive saveScrollPosition>{currentOutlet}</KeepAlive>
          </Card>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Content;
