import styled from 'styled-components';

interface IWrapperProps {
  error?: string;
}

export const Wrapper = styled.textarea<IWrapperProps>`
  padding: 1rem;
  resize: none;
  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.textarea.errorBorderColor}`
      : `2px solid ${theme.textarea.borderColor}`};
  font-size: ${({ theme }) => theme.textarea.fontSize};
`;
