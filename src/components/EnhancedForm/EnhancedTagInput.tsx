import {
  FormGroup,
  FormGroupProps,
  TagInputProps,
  TagInput,
  TagProps,
} from "@blueprintjs/core";
import { Control, FieldValues, useController } from "react-hook-form";

const EnhancedTagInput = (props: {
  control: Control<FieldValues> | undefined;
  name: string;
  formgroupProps: FormGroupProps;
  childrenProps: TagInputProps;
}) => {
  const { name, formgroupProps, childrenProps, control } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
    rules: {
      required: true,
      minLength: {
        value: 5,
        message: "最小长度为5",
      },
      maxLength: {
        value: 10,
        message: "最大长度为10",
      },
    },
  });
  const handleChange = (values: React.ReactNode[]) => {
    console.log("values", values);
  };
  return (
    <FormGroup
      {...formgroupProps}
      intent={field.value ? (error ? "danger" : "success") : "none"}
    >
      <TagInput
        {...childrenProps}
        ref={field.ref}
        onChange={handleChange}
        tagProps={{
          intent: field.value ? (error ? "danger" : "success") : "none",
          large: (childrenProps.tagProps as TagProps).large || false,
          minimal: (childrenProps.tagProps as TagProps).minimal || true,
        }}
      />
    </FormGroup>
  );
};

export default EnhancedTagInput;
