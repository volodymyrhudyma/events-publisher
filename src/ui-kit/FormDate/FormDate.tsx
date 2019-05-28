import React, { ChangeEvent } from 'react';
import { IFormControlProps } from 'src/types';
import FormControl from 'src/ui-kit/FormControl';
import Input from 'src/ui-kit/Input';
import Label from 'src/ui-kit/Label';
import Radio from 'src/ui-kit/Radio';
import { getCurrentDate } from 'src/utils/date';
import { TimeTypeWrapper, TipWrapper, Wrapper } from './styled/FormDate.styled';

interface IFormDateProps extends IFormControlProps {
  placeholder: string;
  tip: string;
  dateValue: string;
  timeValue: string;
  timeTypeValue: string;
  onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTimeTypeChange: (type: string) => void;
}

const FormDate = ({
  placeholder,
  tip,
  dateValue,
  timeValue,
  timeTypeValue,
  onDateChange,
  onTimeChange,
  onTimeTypeChange,
  ...rest
}: IFormDateProps) => (
  <FormControl {...rest}>
    <Wrapper>
      <Input
        type="date"
        placeholder={placeholder}
        width={180}
        value={dateValue}
        onChange={onDateChange}
        min={getCurrentDate()}
        error={rest.error}
      />
      <TipWrapper>
        <Label color="secondary" uppercase={false}>
          {tip}
        </Label>
      </TipWrapper>
      <Input
        type="time"
        placeholder={placeholder}
        width={100}
        value={timeValue}
        onChange={onTimeChange}
        min="00:00"
        max="12:00"
        error={rest.error}
      />
      <TimeTypeWrapper>
        <Radio
          value="am"
          label="AM"
          checked={timeTypeValue === 'am'}
          onChange={onTimeTypeChange}
        />
        <Radio
          value="pm"
          label="PM"
          checked={timeTypeValue === 'pm'}
          onChange={onTimeTypeChange}
        />
      </TimeTypeWrapper>
    </Wrapper>
  </FormControl>
);

FormDate.defaultProps = {
  required: false,
};

export default FormDate;
