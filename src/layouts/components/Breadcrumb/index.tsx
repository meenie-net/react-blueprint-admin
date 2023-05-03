import { Breadcrumbs2 } from "@blueprintjs/popover2";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";

const Breadcrumb = () => {
  const crumbs = useBreadcrumbs();
  return <Breadcrumbs2 items={crumbs} />;
};

export default Breadcrumb;
