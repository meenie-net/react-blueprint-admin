import { BreadcrumbProps, Breadcrumbs2 } from "@blueprintjs/popover2";

const Breadcrumb = () => {
  const BREADCRUMBS: BreadcrumbProps[] = [
    {
      href: "/users",
      icon: "folder-close",
      text: "Users",
      className: "text-text-dark hover:text-hover",
    },
    {
      href: "/users/janet",
      icon: "folder-close",
      text: "Janet",
      className: "text-text-dark hover:text-hover",
    },
    { icon: "document", text: "image.jpg" },
  ];
  return <Breadcrumbs2 items={BREADCRUMBS} />;
};

export default Breadcrumb;
