import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Label.styled';

interface ILabelProps {
  children: ReactNode;
  uppercase: boolean;
  color: string;
  /* tslint:disable-next-line */
  onClick?: (value: any) => void;
}

const Label = ({ uppercase, color, children, onClick }: ILabelProps) => (
  <Wrapper uppercase={uppercase} color={color} onClick={onClick}>
    {children}
  </Wrapper>
);

Label.defaultProps = {
  uppercase: true,
  color: 'primary',
};

export default Label;
