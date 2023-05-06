import { Breadcrumbs2 } from "@blueprintjs/popover2";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import useGlobalStore from "../../../hooks/useGlobalStore";

const Breadcrumb = () => {
  const {
    setting: { showBreadcrumbs },
  } = useGlobalStore();
  const crumbs = useBreadcrumbs();
  return showBreadcrumbs ? <Breadcrumbs2 items={crumbs} /> : null;
};

export default Breadcrumb;
