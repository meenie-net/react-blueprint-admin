import { ButtonGroup, Button, Icon, Menu } from "@blueprintjs/core";
import emitter, { EmitEventEnum } from "../../../utils/EventEmitter";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { MenuItem2, Popover2 } from "@blueprintjs/popover2";
import Notification from "./components/Notification";
import i18n, { lngs, type TLngsKey } from "../../../i18n";
import { assetsUrl } from "../../../utils";

const Setting = () => {
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
        <Button title="调整大小">
          <Icon icon="settings" size={assemblyLarge ? 24 : 18} />
        </Button>
        <Button>
          <Icon icon="search" size={assemblyLarge ? 24 : 18} />
        </Button>
        <Popover2 content={LanguageMenu} fill={true} placement="bottom">
          <Button>
            <Icon icon="translate" size={assemblyLarge ? 24 : 18} />
          </Button>
        </Popover2>
        <Button>
          <Icon icon="zoom-to-fit" size={assemblyLarge ? 24 : 18} />
        </Button>
        <Button onClick={handleThemeClick}>
          <Icon icon="contrast" size={assemblyLarge ? 24 : 18} />
        </Button>

        <Popover2 content={<Notification />} placement="bottom">
          <Button className="relative" title="消息">
            <Icon
              icon="notifications"
              size={assemblyLarge ? 24 : 18}
              className="mx-[-7px]"
            />
            <span className="right-2px border-1 absolute top-0 rounded-full border-solid border-white bg-[#B83211] px-1 text-xs font-bold text-dark-text">
              2222
            </span>
          </Button>
        </Popover2>
        <span className="flex items-center ml-3 font-semibold">Meenie</span>
        <Popover2 content={LanguageMenu} placement="bottom">
          <Button>
            <img
              src={assetsUrl("/assets/avatar.png")}
              className={`${
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
