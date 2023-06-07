import { FormGroup, ControlGroup, Button } from "@blueprintjs/core";
import EnhancedCheckBoxGroup from "./EnhancedCheckBoxGroup";
import EnhancedDatePicker from "./EnhancedDatePicker";
import EnhancedDateRangeInput from "./EnhancedDateRangeInput";
import EnhancedFileInput from "./EnhancedFileInput";
import EnhancedInput from "./EnhancedInput";
import EnhancedNumericInput from "./EnhancedNumericInput";
import EnhancedRadioGroup from "./EnhancedRadioGroup";
import EnhancedSlider from "./EnhancedSlider";
import EnhancedSwitch from "./EnhancedSwitch";
import EnhancedTagInput from "./EnhancedTagInput";
import { useForm } from "react-hook-form";

const EnhancedForm = (props: { inline: boolean }) => {
  const { inline } = props;
  const { handleSubmit, control } = useForm({ mode: "all" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <EnhancedInput
        control={control}
        name="username"
        formgroupProps={{
          helperText:
            "填写说明：用户名为用户登录时的账号，英文数字，不得以符号开头，长度5-10位",
          label: <div className="w-16">姓名</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{
          placeholder: "请输入用户名",
        }}
      />
      <EnhancedSwitch
        control={control}
        name="admin"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">身份设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{
          label: "管理员",
        }}
      />
      <EnhancedCheckBoxGroup
        control={control}
        name="permission"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenList={[
          {
            label: "add",
          },
          {
            label: "delete",
          },
          {
            label: "edit",
          },
        ]}
      />
      <EnhancedRadioGroup
        control={control}
        name="gender"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{}}
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
      <EnhancedSlider
        control={control}
        name="age"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{
          min: 0,
          max: 120,
          stepSize: 2,
          labelStepSize: 20,
          className: "min-w-[450px]",
          handleHtmlProps: { "aria-label": "example 1" },
        }}
      />
      <EnhancedFileInput
        control={control}
        name="file"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{
          text: "请选择要上传的文件",
          buttonText: "点击选择",
          small: true,
        }}
      />
      <EnhancedNumericInput
        control={control}
        name="fileCount"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{
          placeholder: "请输入审批的份数",
        }}
      />
      <EnhancedTagInput
        control={control}
        name="tag"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{
          leftIcon: "user",
          placeholder: "请选择标签",
          rightElement: (
            <Button disabled={false} icon={"cross"} minimal={true} />
          ),

          tagProps: {
            large: false,
            minimal: true,
          },
          values: [
            // supports single JSX elements
            <strong key="al">急件</strong>,
            // supports JSX "fragments" (don't forget `key` on elements in arrays!)
            [<em key="thol">未</em>, "审批"],
            // and supports simple strings
            "待审核",
            // falsy values are not rendered and ignored by the keyboard
            undefined,
          ],
        }}
      />
      <EnhancedDatePicker
        control={control}
        name="date"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{}}
      />
      <EnhancedDateRangeInput
        control={control}
        name="range"
        formgroupProps={{
          helperText: "填写说明：",
          label: <div className="w-16">权限设置</div>,
          labelInfo: <div className="w-16">(必填)</div>,
        }}
        childrenProps={{}}
      />
      <FormGroup inline={inline}>
        <ControlGroup>
          <Button icon="refresh" text="清空" />
          <Button icon="tick" text="提交" onClick={handleSubmit(onSubmit)} />
        </ControlGroup>
      </FormGroup>
    </div>
  );
};

export default EnhancedForm;
