import React, { ReactNode } from 'react';
import Select, { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';
import { Styles } from 'react-select/lib/styles';
import { ThemeConfig } from 'react-select/lib/theme';
import { ValueType } from 'react-select/lib/types';
import icons from 'src/constants/icons';
import { ISelectOption } from 'src/types';
import Icon from 'src/ui-kit/Icon';

// @ts-ignore
const DropdownIndicatorComponent: ReactNode<DropdownIndicatorComponent> =
  components.DropdownIndicator;

const customStyles: Styles = {
  indicatorSeparator: () => ({}),
  placeholder: base => ({
    ...base,
    color: 'rgb(214, 214, 214)',
  }),
  input: base => ({
    ...base,
    color: '#000',
  }),
  control: styles => ({ ...styles, borderWidth: 2 }),
};

const customTheme: ThemeConfig = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    neutral20: 'rgb(238, 238, 238)',
  },
});

const errorTheme: ThemeConfig = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    neutral20: 'rgb(253, 178, 178)',
  },
});

/* tslint:disable-next-line */
const DropdownIndicator = (props: IndicatorProps<any>) => (
  <DropdownIndicatorComponent {...props}>
    <Icon src={icons.arrow} />
  </DropdownIndicatorComponent>
);

interface ICustomSelectProps {
  placeholder: string;
  options: ISelectOption[] | Array<ValueType<ISelectOption>>;
  value: ISelectOption | ValueType<ISelectOption>;
  /* tslint:disable-next-line */
  onChange: (value: any) => void;
  error?: string;
}

const CustomSelect = ({
  placeholder,
  options,
  value,
  onChange,
  error,
}: ICustomSelectProps) => (
  <Select
    value={value}
    onChange={onChange}
    options={options}
    styles={customStyles}
    components={{
      DropdownIndicator,
    }}
    placeholder={placeholder}
    theme={error ? errorTheme : customTheme}
  />
);

CustomSelect.defaultProps = {};

export default CustomSelect;
