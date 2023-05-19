import useGlobalStore from "../../../hooks/useGlobalStore";

const Footer = (props: { className?: string }) => {
  const { className } = props;
  const {
    setting: { showFooter },
  } = useGlobalStore();
  return showFooter ? <div className={className}>Footer</div> : null;
};

export default Footer;