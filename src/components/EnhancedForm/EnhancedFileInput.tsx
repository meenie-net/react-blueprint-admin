import {
  FormGroup,
  FormGroupProps,
  FileInputProps,
  FileInput,
} from "@blueprintjs/core";
import { Control, FieldValues, useController } from "react-hook-form";

const EnhancedFileInput = (props: {
  control: Control<FieldValues> | undefined;
  name: string;
  formgroupProps: FormGroupProps;
  childrenProps: FileInputProps;
}) => {
  const { name, formgroupProps, childrenProps, control } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
  });
  // const handleChange = (value: number) => {
  //   field.onChange(value);
  // };

  return (
    <FormGroup
      {...formgroupProps}
      helperText={error?.message ? error?.message : formgroupProps.helperText}
      intent={field.value ? (error ? "danger" : "success") : "none"}
    >
      <FileInput {...childrenProps} />
    </FormGroup>
  );
};

export default EnhancedFileInput;
