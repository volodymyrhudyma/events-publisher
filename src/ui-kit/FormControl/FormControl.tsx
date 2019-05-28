import { isEmpty } from 'lodash';
import React, { Children, cloneElement } from 'react';
import { IFormControlProps } from 'src/types';
import Counter from 'src/ui-kit/Counter';
import Error from 'src/ui-kit/Error';
import Label from 'src/ui-kit/Label';
import {
  ContentWrapper,
  ErrorWrapper,
  LabelWrapper,
  RequiredWrapper,
  Wrapper,
} from './styled/FormControl.styled';

const FormControl = ({
  children,
  label,
  required,
  hint,
  error,
  maxLength,
  currentLength,
}: IFormControlProps) => {
  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, { error: !isEmpty(error) })
  );
  return (
    <Wrapper>
      <LabelWrapper>
        <Label color={error ? 'error' : 'primary'}>{label}</Label>
        {required && <RequiredWrapper>*</RequiredWrapper>}
      </LabelWrapper>
      <ContentWrapper>
        {childrenWithProps}
        {hint}
        {maxLength && (
          <Counter maxLength={maxLength} currentLength={currentLength} />
        )}
      </ContentWrapper>
      <ErrorWrapper>{error && <Error>{error}</Error>}</ErrorWrapper>
    </Wrapper>
  );
};

FormControl.defaultProps = {
  required: false,
};

export default FormControl;
