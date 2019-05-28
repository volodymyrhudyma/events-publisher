import styled from 'styled-components';

export const Wrapper = styled.button`
  width: ${({ theme }) => theme.button.width};
  height: ${({ theme }) => theme.button.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.button.backgroundColor};
  color: ${({ theme }) => theme.button.color};
  text-transform: uppercase;
  border: none;
  font-size: ${({ theme }) => theme.button.fontSize};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  &:disabled {
    background-color: ${({ theme }) => theme.button.disabled.backgroundColor};
    opacity: ${({ theme }) => theme.button.disabled.opacity};
  }
`;
