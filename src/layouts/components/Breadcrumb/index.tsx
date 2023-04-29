import { BreadcrumbProps, Breadcrumbs2 } from "@blueprintjs/popover2";
import useGlobalStore from "../../../hooks/useGlobalStore";

const Breadcrumb = () => {
  const { assemblyLarge } = useGlobalStore();
  const BREADCRUMBS: BreadcrumbProps[] = [
    {
      href: "/users",
      icon: "folder-close",
      text: "Users",
      className: `${
        assemblyLarge
          ? "text-text-dark hover:text-hover"
          : "text-text-dark hover:text-hover text-xs"
      }`,
    },
    {
      href: "/users/janet",
      icon: "folder-close",
      text: "Janet",
      className: `${
        assemblyLarge
          ? "text-text-dark hover:text-hover"
          : "text-text-dark hover:text-hover text-xs"
      }`,
    },
    {
      icon: "document",
      text: "image.jpg",
      className: `${assemblyLarge ? "" : "text-xs"}`,
    },
  ];
  return <Breadcrumbs2 items={BREADCRUMBS} />;
};

export default Breadcrumb;
