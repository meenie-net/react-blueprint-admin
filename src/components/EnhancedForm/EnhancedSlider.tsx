import {
  FormGroup,
  FormGroupProps,
  SliderProps,
  Slider,
} from "@blueprintjs/core";
import { Control, FieldValues, useController } from "react-hook-form";

const EnhancedSlider = (props: {
  control: Control<FieldValues> | undefined;
  name: string;
  formgroupProps: FormGroupProps;
  childrenProps: SliderProps;
}) => {
  const { name, formgroupProps, childrenProps, control } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: childrenProps.min,
  });
  const handleChange = (value: number) => {
    field.onChange(value);
  };

  return (
    <FormGroup
      {...formgroupProps}
      intent={field.value ? (error ? "danger" : "success") : "none"}
    >
      <Slider
        {...childrenProps}
        ref={field.ref}
        value={field.value}
        onChange={handleChange}
        intent={field.value ? (error ? "danger" : "success") : "none"}
      />
    </FormGroup>
  );
};

export default EnhancedSlider;
