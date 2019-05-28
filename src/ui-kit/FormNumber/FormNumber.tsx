import React, { ChangeEvent } from 'react';
import { IFormControlProps } from 'src/types';
import FormControl from 'src/ui-kit/FormControl';
import Input from 'src/ui-kit/Input';
import Label from 'src/ui-kit/Label';
import { TipWrapper, Wrapper } from './styled/FormNumber.styled';

interface IFormNumberProps extends IFormControlProps {
  placeholder: string;
  tip: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormNumber = ({
  placeholder,
  tip,
  value,
  onChange,
  ...rest
}: IFormNumberProps) => (
  <FormControl {...rest}>
    <Wrapper>
      <Input
        type="number"
        placeholder={placeholder}
        width={90}
        value={value}
        onChange={onChange}
      />
      <TipWrapper>
        <Label color="secondary" uppercase={false}>
          {tip}
        </Label>
      </TipWrapper>
    </Wrapper>
  </FormControl>
);

FormNumber.defaultProps = {
  required: false,
};

export default FormNumber;
