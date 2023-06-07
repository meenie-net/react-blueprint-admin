import {
  FormGroup,
  FormGroupProps,
  SwitchProps,
  Switch,
} from "@blueprintjs/core";
import { Control, FieldValues, useController } from "react-hook-form";
import { handleBooleanChange } from "../../utils";

const EnhancedSwitch = (props: {
  control: Control<FieldValues> | undefined;
  name: string;
  formgroupProps: FormGroupProps;
  childrenProps: SwitchProps;
}) => {
  const { name, formgroupProps, childrenProps, control } = props;
  const { field } = useController({
    name,
    control,
    defaultValue: false,
  });
  const handleChange = handleBooleanChange((value: boolean) => {
    field.onChange(value);
  });
  return (
    <FormGroup {...formgroupProps}>
      <Switch {...childrenProps} inputRef={field.ref} onChange={handleChange} />
    </FormGroup>
  );
};

export default EnhancedSwitch;
