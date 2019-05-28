import React, { ChangeEvent } from 'react';
import { Wrapper } from './styled/Textarea.styled';

interface ITextareaProps {
  placeholder: string;
  rows: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const Textarea = (props: ITextareaProps) => <Wrapper {...props} />;

Textarea.defaultProps = {
  rows: 10,
};

export default Textarea;
