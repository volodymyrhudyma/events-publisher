import styled from 'styled-components';

export const Wrapper = styled.header`
  height: ${({ theme }) => theme.header.height};
  font-size: ${({ theme }) => theme.header.fontSize};
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.color};
  padding: 0 3rem;
  display: flex;
  align-items: center;
  font-weight: 100;
`;
