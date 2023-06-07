import {
  FormGroup,
  FormGroupProps,
  InputGroup,
  InputGroupProps2,
} from "@blueprintjs/core";
import { handleStringChange } from "../../utils";
import { Control, FieldValues, useController } from "react-hook-form";

const EnhancedInput = (props: {
  control: Control<FieldValues> | undefined;
  formgroupProps: FormGroupProps;
  childrenProps: InputGroupProps2;
}) => {
  const { formgroupProps, childrenProps, control } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name: childrenProps.name!,
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
  const handleChange = handleStringChange((value) => {
    field.onChange(value);
    console.log("error", error);
  });
  return (
    <FormGroup
      {...formgroupProps}
      helperText={error?.message ? error?.message : formgroupProps.helperText}
      intent={field.value ? (error ? "danger" : "success") : "none"}
    >
      <InputGroup
        {...childrenProps}
        inputRef={field.ref}
        onChange={handleChange}
        intent={field.value ? (error ? "danger" : "success") : "none"}
      />
    </FormGroup>
  );
};

export default EnhancedInput;
