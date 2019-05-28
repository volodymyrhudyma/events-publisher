import React from 'react';
import Hint from 'src/ui-kit/Hint';
import { Wrapper } from './styled/Counter.styled';
import { useTranslation } from 'react-i18next';

interface ICounterProps {
  maxLength?: number;
  currentLength?: number;
}

const Counter = ({ maxLength, currentLength }: ICounterProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Hint>{t('general.maxLength', { number: maxLength })}</Hint>
      <Hint>
        {currentLength} / {maxLength}
      </Hint>
    </Wrapper>
  );
};

export default Counter;
