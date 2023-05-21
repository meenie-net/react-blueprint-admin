import { Breadcrumbs2 } from "@blueprintjs/popover2";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import useGlobalStore from "../../../hooks/useGlobalStore";

const Breadcrumb = (props: { mode: "dark" | "light" }) => {
  const { mode } = props;
  const {
    setting: { showBreadcrumbs },
  } = useGlobalStore();
  const crumbs = useBreadcrumbs({ mode });
  return showBreadcrumbs ? <Breadcrumbs2 items={crumbs} /> : null;
};

export default Breadcrumb;
