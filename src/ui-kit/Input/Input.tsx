import React, { ChangeEvent } from 'react';
import { Wrapper } from './styled/Input.styled';

interface IInputProps {
  type: string;
  placeholder: string;
  width?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  error?: string;
}

const Input = (props: IInputProps) => <Wrapper {...props} />;

Input.defaultProps = {
  type: 'text',
};

export default Input;
