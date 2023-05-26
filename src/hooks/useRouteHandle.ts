import { useEffect } from "react";
import { useLocation, useMatches } from "react-router-dom";

export const useRouteHandle = () => {
  const matches = useMatches();
  const location = useLocation();
  let handle = matches[matches.length - 1].handle;
  useEffect(() => {
    console.log("1", 1);
    handle = matches[matches.length - 1].handle;
  }, [location]);
  return handle as unknown as {
    icon: string;
    url: string;
    title: string;
    name: string;
    target: "_blank" | "_self" | "_parent";
  };
};
