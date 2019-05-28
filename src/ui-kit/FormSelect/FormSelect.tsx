import React from 'react';
import { ValueType } from 'react-select/lib/types';
import { IFormControlProps, ISelectOption } from 'src/types';
import FormControl from 'src/ui-kit/FormControl';
import Select from 'src/ui-kit/Select';

interface IFormSelectProps extends IFormControlProps {
  placeholder: string;
  options: ISelectOption[] | Array<ValueType<ISelectOption>>;
  value: ISelectOption | ValueType<ISelectOption>;
  onChange: (value: ISelectOption) => void;
}

const FormSelect = ({
  placeholder,
  options,
  value,
  onChange,
  ...rest
}: IFormSelectProps) => (
  <FormControl {...rest}>
    <Select
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={onChange}
      error={rest.error}
    />
  </FormControl>
);

FormSelect.defaultProps = {
  required: false,
};

export default FormSelect;
