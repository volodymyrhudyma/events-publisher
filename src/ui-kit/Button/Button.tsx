import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Button.styled';

interface IButtonProps {
  children: ReactNode;
  disabled: boolean;
}

const Button = ({ children, ...rest }: IButtonProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

Button.defaultProps = {
  disabled: false,
};

export default Button;
