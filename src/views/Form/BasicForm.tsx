import {
  FormGroup,
  Switch,
  ControlGroup,
  Button,
  Slider,
  Intent,
  Card,
  NumericInput,
  TagInput,
  FileInput,
} from "@blueprintjs/core";
import { useState } from "react";
import DateRangeInput from "../../components/temporary/DateRangeInput";
import { DateRange } from "react-day-picker";
import DatePicker from "../../components/temporary/DatePicker";
import { useForm } from "react-hook-form";
import EnhancedInput from "../../components/EnhancedForm/EnhancedInput";
import EnhancedSwitch from "../../components/EnhancedForm/EnhancedSwitch";
import EnhancedCheckBoxGroup from "../../components/EnhancedForm/EnhancedCheckBoxGroup";
import EnhancedRadioGroup from "../../components/EnhancedForm/EnhancedRadioGroup";

const BasicForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [inline, setInline] = useState(true);
  const [vertical, setVertical] = useState(false);
  const [intent] = useState<Intent | undefined>("success");

  const { handleSubmit, control } = useForm({ mode: "all" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleAgeChange = (age: number) => {
    console.log("age", age);
  };
  const handleFileNumChange = (v: number, value: string) => {
    console.log("v", v);
    console.log("value", value);
  };
  const handleTagChange = (values: React.ReactNode[]) => {
    console.log("values", values);
  };
  const handleDateChange = (date: Date | undefined) => {
    console.log("date: ", date);
  };
  const handleRangeChange = (range: DateRange | undefined) => {
    console.log("range: ", range);
  };
  return (
    <div className="flex h-full flex-col">
      <Card className="pb-0">
        <div>
          <FormGroup
            inline={inline}
            intent={intent}
            label={<div className="w-16">样式设置</div>}
          >
            <Switch
              inline
              label="disabled"
              checked={disabled}
              onChange={() => setDisabled(!disabled)}
            />
            <Switch
              inline
              label="inline"
              checked={inline}
              onChange={() => setInline(!inline)}
            />
            <Switch
              inline
              label="vertical"
              checked={vertical}
              onChange={() => setVertical(!vertical)}
            />
          </FormGroup>
        </div>
      </Card>
      <Card className="mt-3 overflow-y-auto">
        <div className="border border-indigo-500 p-5">
          <EnhancedInput
            control={control}
            formgroupProps={{
              helperText:
                "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位",
              inline,
              label: <div className="w-16">姓名</div>,
              labelInfo: <div className="w-16">(必填)</div>,
            }}
            childrenProps={{
              placeholder: "请输入用户名",
              disabled,
              name: "username",
            }}
          />
          <EnhancedSwitch
            control={control}
            formgroupProps={{
              helperText: "填写说明：",
              inline,
              label: <div className="w-16">身份设置</div>,
              labelInfo: <div className="w-16">(必填)</div>,
            }}
            childrenProps={{
              label: "管理员",
              disabled,
              inline,
              name: "admin",
            }}
          />
          <EnhancedCheckBoxGroup
            control={control}
            formgroupProps={{
              helperText: "填写说明：",
              inline,
              label: <div className="w-16">权限设置</div>,
              labelInfo: <div className="w-16">(必填)</div>,
            }}
            childrenProps={{
              name: "permission",
            }}
            childrenList={[
              {
                disabled,
                inline,
                label: "add",
              },
              {
                disabled,
                inline,
                label: "delete",
              },
              {
                disabled,
                inline,
                label: "edit",
              },
            ]}
          />
          <EnhancedRadioGroup
            control={control}
            formgroupProps={{
              helperText: "填写说明：",
              inline,
              label: <div className="w-16">权限设置</div>,
              labelInfo: <div className="w-16">(必填)</div>,
            }}
            childrenProps={{
              inline,
              name: "gender",
            }}
            childrenList={[
              {
                label: "男",
                value: "male",
              },
              {
                label: "女",
                value: "female",
              },
              {
                label: "不填",
                value: "none",
              },
            ]}
          />
          <FormGroup
            helperText={
              "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位"
            }
            inline={inline}
            intent={intent}
            label={<div className="w-16">年龄</div>}
            labelFor="username"
            labelInfo={<div className="w-16">(必填)</div>}
          >
            <Slider
              min={0}
              max={120}
              stepSize={1}
              labelStepSize={10}
              onChange={handleAgeChange}
              value={5}
              vertical={vertical}
              className="min-w-[450px]"
              handleHtmlProps={{ "aria-label": "example 1" }}
            />
          </FormGroup>
          <FormGroup
            helperText={
              "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位"
            }
            inline={inline}
            intent={intent}
            label={<div className="w-16">营业执照</div>}
            labelFor="username"
            labelInfo={<div className="w-16">(必填)</div>}
          >
            <FileInput
              text={"请选择要上传的文件"}
              buttonText={"点击选择"}
              small
            />
          </FormGroup>
          <FormGroup
            helperText={
              "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位"
            }
            inline={inline}
            intent={intent}
            label={<div className="w-16">份数</div>}
            labelFor="username"
            labelInfo={<div className="w-16">(必填)</div>}
          >
            <NumericInput
              placeholder="请输入审批的份数"
              onValueChange={handleFileNumChange}
            />
          </FormGroup>
          <FormGroup
            helperText={
              "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位"
            }
            inline={inline}
            intent={intent}
            label={<div className="w-16">标签</div>}
            labelFor="username"
            labelInfo={<div className="w-16">(必填)</div>}
          >
            <TagInput
              leftIcon={"user"}
              onChange={handleTagChange}
              placeholder="Separate values with commas..."
              rightElement={
                <Button disabled={false} icon={"cross"} minimal={true} />
              }
              tagProps={{
                intent: intent,
                large: false,
                minimal: true,
              }}
              values={[
                // supports single JSX elements
                <strong key="al">急件</strong>,
                // supports JSX "fragments" (don't forget `key` on elements in arrays!)
                [<em key="thol">未</em>, "审批"],
                // and supports simple strings
                "待审核",
                // falsy values are not rendered and ignored by the keyboard
                undefined,
              ]}
            />
          </FormGroup>
          {/* warning: datatime do not support react 18 */}
          {/* todo:wait for blueprint support react 18 */}
          {/* 1.run `npm uninstall react-day-picker date-fns`
            2.remove <~/components/temporary> dir
            3.adaptive official component */}
          <FormGroup
            helperText={
              "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位"
            }
            inline={inline}
            intent={intent}
            label={<div className="w-16">签约时间</div>}
            labelFor="username"
            labelInfo={<div className="w-16">(必填)</div>}
          >
            <DatePicker
              onChange={(date: Date | undefined) => handleDateChange(date)}
            />
          </FormGroup>
          <FormGroup
            helperText={
              "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位"
            }
            inline={inline}
            intent={intent}
            label={<div className="w-16">有效期</div>}
            labelFor="username"
            labelInfo={<div className="w-16">(必填)</div>}
          >
            <DateRangeInput
              onChange={(range: DateRange | undefined) =>
                handleRangeChange(range)
              }
            />
          </FormGroup>
          <FormGroup inline={inline} intent={intent}>
            <ControlGroup>
              <Button icon="refresh" text="清空" />
              <Button
                icon="tick"
                text="提交"
                onClick={handleSubmit(onSubmit)}
              />
            </ControlGroup>
          </FormGroup>
        </div>
      </Card>
    </div>
  );
};

export default BasicForm;
