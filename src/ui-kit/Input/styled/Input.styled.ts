import styled from 'styled-components';

interface IWrapperProps {
  width?: number;
  error?: string;
}

export const Wrapper = styled.input<IWrapperProps>`
  height: ${({ theme }) => theme.input.height};
  padding: 0 1rem;
  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.input.errorBorderColor}`
      : `2px solid ${theme.input.borderColor}`};
  font-size: ${({ theme }) => theme.input.fontSize};
  ${({ width }) => width && `width: ${width}px;`};
  box-sizing: border-box;
`;
