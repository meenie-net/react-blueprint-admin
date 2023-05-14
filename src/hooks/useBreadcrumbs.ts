import { BreadcrumbProps, IconName, MaybeElement } from "@blueprintjs/core";
import { useNavigate, useMatches } from "react-router-dom";
import useGlobalStore from "./useGlobalStore";
import { useTranslation } from "react-i18next";

const useBreadcrumbs = () => {
  const {
    setting: { assemblyLarge, showBreadcrumbsIcon },
  } = useGlobalStore();
  const navigate = useNavigate();
  const matches = useMatches();
  const { t } = useTranslation();
  if (matches[1]?.pathname === "/") matches.shift();
  const crumbs: BreadcrumbProps[] = matches
    .map((match) => {
      return {
        ...match,
        handle: match.handle as {
          name: string;
          icon: IconName | MaybeElement;
          title: string;
        },
      };
    })
    .map((v, k) => {
      if (k === matches.length - 2 && k == 1) {
        return {
          onClick: () => {
            // todo
            // 跳转到同级的第一个路由
            // 使用matches[matches.length - 2].pathname到flatMenu中查找
            //navigate(result);
          },
          icon: showBreadcrumbsIcon && v.handle.icon,
          text: t(`menu.${v.handle.name}`),
          className: `${
            assemblyLarge
              ? "text-dark-text hover:text-hover"
              : "text-dark-text hover:text-hover text-xs"
          }`,
        };
      }
      if (k === matches.length - 1) {
        return {
          icon: showBreadcrumbsIcon && v.handle.icon,
          text: t(`menu.${v.handle.name}`),
          className: `${assemblyLarge ? "font-normal" : "font-normal text-xs"}`,
        };
      }
      return {
        onClick: () => {
          navigate(v.pathname);
        },
        icon: showBreadcrumbsIcon && v.handle.icon,
        text: t(`menu.${v.handle.name}`),
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
