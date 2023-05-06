import { BreadcrumbProps, IconName, MaybeElement } from "@blueprintjs/core";
import { useNavigate, useMatches } from "react-router-dom";
import useGlobalStore from "./useGlobalStore";

const useBreadcrumbs = () => {
  const {
    setting: { assemblyLarge },
  } = useGlobalStore();
  const navigate = useNavigate();
  const matches = useMatches();
  if (matches[1]?.pathname === "/") matches.shift();
  const crumbs: BreadcrumbProps[] = matches
    .map((match) => {
      return {
        ...match,
        handle: match.handle as {
          icon: IconName | MaybeElement;
          title: string;
        },
      };
    })
    .map((v, k) => {
      if (k === matches.length - 2 && k == 1) {
        return {
          onClick: () => {
            navigate(matches[matches.length - 1].pathname);
          },
          icon: v.handle.icon,
          text: v.handle.title,
          className: `${
            assemblyLarge
              ? "text-dark-text hover:text-hover"
              : "text-dark-text hover:text-hover text-xs"
          }`,
        };
      }
      if (k === matches.length - 1) {
        return {
          icon: v.handle.icon,
          text: v.handle.title,
          className: `${assemblyLarge ? "font-normal" : "font-normal text-xs"}`,
        };
      }
      return {
        onClick: () => {
          navigate(v.pathname);
        },
        icon: v.handle.icon,
        text: v.handle.title,
        className: `${
          assemblyLarge
            ? "text-dark-text hover:text-hover"
            : "text-dark-text hover:text-hover text-xs"
        }`,
      };
    });
  return crumbs;
};

export default useBreadcrumbs;
