import { Button, IconName, MaybeElement } from "@blueprintjs/core";
import { useEffect, useState } from "react";
export type ISelectFilterOption = {
  value: string;
  label: string;
  icon: IconName | MaybeElement;
};
export type ISelectFilter = {
  title: string;
  key: string;
  multiple: boolean;
  options: ISelectFilterOption[];
};

export type IFilterResult = { [key: string]: Array<string> | string };

const SelectFilter = (props: {
  options: ISelectFilter[];
  onChange: (result: IFilterResult) => void;
}) => {
  const { options, onChange } = props;
  const [selected, setSelected] = useState<IFilterResult>(() => {
    const obj: IFilterResult = {};
    for (const key in options) {
      if (Object.prototype.hasOwnProperty.call(options, key)) {
        const element = options[key];
        element.multiple ? (obj[element.key] = []) : (obj[element.key] = "");
      }
    }
    return obj;
  });
  const handleSelectAll = (item: ISelectFilter) => {
    selected[item.key].length === item.options.length
      ? setSelected({
          ...selected,
          [item.key]: [],
        })
      : setSelected({
          ...selected,
          [item.key]: item.options.map((option) => option.value),
        });
  };
  const handleSelectSingle = (
    item: ISelectFilter,
    option: ISelectFilterOption
  ) => {
    if (item.multiple) {
      // 多选
      const newData = selected[item.key] as string[];
      newData.includes(option.value)
        ? newData.splice(selected[item.key].indexOf(option.value), 1)
        : newData.push(option.value);
      setSelected({
        ...selected,
        [item.key]: newData,
      });
    } else {
      // 单选
      selected[item.key] === option.value
        ? setSelected({ ...selected, [item.key]: "" })
        : setSelected({ ...selected, [item.key]: option.value });
    }
  };
  useEffect(() => onChange(selected), [selected]);
  return (
    <div>
      {options
        ? options.map((item, i) => (
            <div key={i} className="mt-4 flex items-center">
              <span className="text-base">
                {item.title}（{`${item.multiple ? "多" : "单"}`}）：
              </span>
              {item.multiple && (
                <Button
                  className="mr-4 rounded-full"
                  intent="primary"
                  outlined
                  active={
                    selected[item.key]
                      ? selected[item.key].length === item.options.length
                      : false
                  }
                  small
                  onClick={() => handleSelectAll(item)}
                >
                  全部
                </Button>
              )}
              {item.options.map((option, k) => (
                <Button
                  key={k}
                  className="mr-4 rounded-full"
                  intent="primary"
                  outlined
                  active={
                    item.multiple
                      ? selected[item.key]
                        ? selected[item.key].includes(option.value)
                        : false
                      : option.value === selected[item.key]
                  }
                  small
                  icon={option.icon || "grid-view"}
                  onClick={() => handleSelectSingle(item, option)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          ))
        : null}
    </div>
  );
};

export default SelectFilter;
