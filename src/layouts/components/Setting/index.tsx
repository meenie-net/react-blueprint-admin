import { ButtonGroup, Button, Icon, Menu } from "@blueprintjs/core";
import emitter, { EmitEventEnum } from "../../../utils/EventEmitter";
import { MenuItem2, Popover2 } from "@blueprintjs/popover2";
import Notification from "./components/Notification";
import i18n, { lngs, type TLngsKey } from "../../../i18n";
import { assetsUrl } from "../../../utils";
import { useGlobalStore } from "../../../hooks/useStore";

const Setting = (props: { mode: "dark" | "light" }) => {
  const { mode } = props;
  const {
    setting: { assemblyLarge },
  } = useGlobalStore();
  const handleThemeClick = () => {
    emitter.emit(EmitEventEnum.OpenThemeDrawer);
  };
  const handleLanguageClick = (lng: TLngsKey) => {
    i18n.changeLanguage(lng);
  };
  const LanguageMenu = (
    <Menu className="min-w-[60px]">
      {Object.keys(lngs).map((lng) => (
        <MenuItem2
          className={`${
            i18n.resolvedLanguage === lng ? "font-bold" : "font-normal"
          }`}
          key={lng}
          text={lngs[lng as TLngsKey].nativeName}
          onClick={() => handleLanguageClick(lng as TLngsKey)}
        />
      ))}
    </Menu>
  );
  return (
    <>
      <ButtonGroup minimal={true} large={assemblyLarge}>
        <Button id="global-search">
          <Icon
            icon="search"
            color={mode === "dark" ? undefined : "#ffffff"}
            size={assemblyLarge ? 24 : 18}
          />
        </Button>
        <Popover2 content={LanguageMenu} fill={true} placement="bottom">
          <Button id="i18n">
            <Icon
              icon="translate"
              color={mode === "dark" ? undefined : "#ffffff"}
              size={assemblyLarge ? 24 : 18}
            />
          </Button>
        </Popover2>
        <Button id="full-screen">
          <Icon
            icon="zoom-to-fit"
            color={mode === "dark" ? undefined : "#ffffff"}
            size={assemblyLarge ? 24 : 18}
          />
        </Button>
        <Button id="theme" onClick={handleThemeClick}>
          <Icon
            icon="contrast"
            color={mode === "dark" ? undefined : "#ffffff"}
            size={assemblyLarge ? 24 : 18}
          />
        </Button>
        <Popover2 content={<Notification />} placement="bottom">
          <Button id="message" className="relative" title="消息">
            <Icon
              icon="notifications"
              color={mode === "dark" ? undefined : "#ffffff"}
              size={assemblyLarge ? 24 : 18}
              className="mx-[-7px]"
            />
            <span className="right-2px border-1 absolute top-0 rounded-full border-solid border-white bg-[#B83211] px-1 text-xs font-bold text-dark-text">
              2222
            </span>
          </Button>
        </Popover2>
        <span className="ml-3 flex items-center font-semibold">Meenie</span>
        <Popover2 content={LanguageMenu} placement="bottom">
          <Button>
            <img
              src={assetsUrl("/assets/avatar.png")}
              className={`border border-gray-500 ${
                assemblyLarge ? "h-8 w-8 rounded-full" : "h-6 w-6 rounded-full"
              }`}
              alt=""
            />
          </Button>
        </Popover2>
      </ButtonGroup>
    </>
  );
};

export default Setting;
