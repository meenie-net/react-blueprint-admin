import { ReactNode, useEffect } from "react";
import { useUserStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

const RouteBeforeEach = ({ children }: { children: ReactNode }) => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default RouteBeforeEach;
