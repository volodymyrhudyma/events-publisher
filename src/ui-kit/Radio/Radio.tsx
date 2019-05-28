import React, { PureComponent, ReactNode } from 'react';
import Label from 'src/ui-kit/Label';
import { StyledRadio, Wrapper } from './styled/Radio.styled';

interface IRadioProps {
  value: string;
  label: string | ReactNode;
  checked: boolean;
  /* tslint:disable-next-line */
  onChange: (value: any) => void;
}

class Radio extends PureComponent<IRadioProps> {
  public render() {
    const { value, label, checked, onChange } = this.props;
    return (
      <Wrapper>
        <StyledRadio
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <Label
          uppercase={false}
          color="secondary"
          onClick={onChange.bind(this, value)}
        >
          {label}
        </Label>
      </Wrapper>
    );
  }
}

export default Radio;
