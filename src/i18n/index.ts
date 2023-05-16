import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: () => {
        return `${import.meta.env.VITE_I18N_PATH}/locales/{{lng}}/{{ns}}.json`;
      },
    },
  });

export default i18n;

export const lngs = {
  en: { nativeName: "English" },
  zh: { nativeName: "中文" },
};

export type TLngsKey = keyof typeof lngs;
