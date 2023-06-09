import { IDomEditor, i18nChangeLanguage } from "@wangeditor/editor";
import i18n from "../i18n";
import { useState, useEffect } from "react";

export const useMTEditor = (props: { initialValue: string }) => {
  const { initialValue } = props;
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState(initialValue);

  useEffect(() => {
    // 初始化编辑器语言
    console.log("i18n.resolvedLanguage", i18n.resolvedLanguage);
    i18nChangeLanguage(
      i18n.resolvedLanguage && i18n.resolvedLanguage !== "zh"
        ? i18n.resolvedLanguage
        : "zh-CN"
    );
  }, []);
  useEffect(() => {
    // 初始化编辑器语言
    console.log("i18n.resolvedLanguage", i18n.resolvedLanguage);
  }, [() => localStorage.getItem("i18nextLng")]);

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
  return { editor, setEditor, html, setHtml };
};
