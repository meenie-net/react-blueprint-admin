import {
  FormGroup,
  FormGroupProps,
  NumericInput,
  HTMLInputProps,
  NumericInputProps,
} from "@blueprintjs/core";
import { Control, FieldValues, useController } from "react-hook-form";

const EnhancedNumericInput = (props: {
  control: Control<FieldValues> | undefined;
  name: string;
  formgroupProps: FormGroupProps;
  childrenProps: HTMLInputProps & NumericInputProps;
}) => {
  const { name, formgroupProps, childrenProps, control } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: 0,
    rules: {
      required: true,
      min: {
        value: 5,
        message: "最小长度为5",
      },
      max: {
        value: 10,
        message: "最大长度为10",
      },
    },
  });
  const handleChange = (value: number) => {
    field.onChange(value);
  };

  return (
    <FormGroup
      {...formgroupProps}
      helperText={error?.message ? error?.message : formgroupProps.helperText}
      intent={field.value ? (error ? "danger" : "success") : "none"}
    >
      <NumericInput
        {...childrenProps}
        ref={field.ref}
        value={field.value}
        onValueChange={handleChange}
      />
    </FormGroup>
  );
};

export default EnhancedNumericInput;
