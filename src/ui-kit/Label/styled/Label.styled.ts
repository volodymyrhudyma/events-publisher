import styled, { css } from 'styled-components';

interface IWrapperProps {
  uppercase: boolean;
  color: string;
}

export const Wrapper = styled.label<IWrapperProps>`
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
  color: ${({ color, theme }) =>
    color === 'primary'
      ? theme.label.primaryColor
      : color === 'secondary'
      ? theme.label.secondaryColor
      : color === 'error'
      ? theme.label.errorColor
      : null};
`;
