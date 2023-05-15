import { ButtonGroup, Button, Icon, H1, Menu } from "@blueprintjs/core";
import emitter, { EmitEventEnum } from "../../../utils/EventEmitter";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { Classes, MenuItem2, Popover2 } from "@blueprintjs/popover2";
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

        <Popover2
          content={<H1>Popover!</H1>}
          placement="bottom"
          popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
        >
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
        <Button>
          <img
            src="../../src/assets/avatar.png"
            className={`${
              assemblyLarge ? "w-8 h-8 rounded-full" : "w-6 h-6 rounded-full"
            }`}
            alt=""
          />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Setting;