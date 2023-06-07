import {
  FormGroup,
  FormGroupProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from "@blueprintjs/core";
import { Control, FieldValues, useController } from "react-hook-form";
import { handleStringChange } from "../../utils";

const EnhancedRadioGroup = (props: {
  control: Control<FieldValues> | undefined;
  formgroupProps: FormGroupProps;
  childrenProps: Omit<RadioGroupProps, "onChange">;
  childrenList: RadioProps[];
}) => {
  const { formgroupProps, childrenProps, control, childrenList } = props;
  const { field } = useController({
    name: childrenProps.name!,
    control,
    defaultValue: childrenList[0].value,
  });
  const handleChange = handleStringChange((gender) => {
    field.onChange(gender);
  });
  return (
    <FormGroup {...formgroupProps}>
      <RadioGroup
        {...childrenProps}
        selectedValue={field.value}
        onChange={handleChange}
      >
        {childrenList.map((radio: RadioProps) => (
          <Radio {...radio} key={radio.label} />
        ))}
      </RadioGroup>
    </FormGroup>
  );
};

export default EnhancedRadioGroup;
