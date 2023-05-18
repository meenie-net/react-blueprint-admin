import { ButtonGroup, Button, Icon, Menu } from "@blueprintjs/core";
import emitter, { EmitEventEnum } from "../../../utils/EventEmitter";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { MenuItem2, Popover2 } from "@blueprintjs/popover2";
import Notification from "./components/Notification";
import i18n, { lngs, type TLngsKey } from "../../../i18n";

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
          <Icon
            icon="settings"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          />
        </Button>
        <Button>
          <Icon icon="search" color="#f6f7f9" size={assemblyLarge ? 24 : 18} />
        </Button>
        <Popover2 content={LanguageMenu} fill={true} placement="bottom">
          <Button>
            <Icon
              icon="translate"
              color="#f6f7f9"
              size={assemblyLarge ? 24 : 18}
            />
          </Button>
        </Popover2>
        <Button>
          <Icon
            icon="zoom-to-fit"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          />
        </Button>
        <Button onClick={handleThemeClick}>
          <Icon
            icon="contrast"
            color="#f6f7f9"
            size={assemblyLarge ? 24 : 18}
          />
        </Button>

        <Popover2 content={<Notification />} placement="bottom">
          <Button className="relative" title="消息">
            <Icon
              icon="notifications"
              color="#f6f7f9"
              size={assemblyLarge ? 24 : 18}
              className="mx-[-7px]"
            />
            <span className="text-xs font-bold absolute top-0 right-2px bg-[#B83211] text-dark-text rounded-full px-1 border-1 border-solid border-white">
              2222
            </span>
          </Button>
        </Popover2>
        <span className="flex items-center ml-3 font-semibold">Meenie</span>
        <Popover2 content={LanguageMenu} placement="bottom">
          <Button>
            <img
              src="/assets/avatar.png"
              className={`${
                assemblyLarge ? "w-8 h-8 rounded-full" : "w-6 h-6 rounded-full"
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
