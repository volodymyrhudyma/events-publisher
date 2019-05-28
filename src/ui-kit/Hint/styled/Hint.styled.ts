import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.hint.color};
  font-style: italic;
  font-size: ${({ theme }) => theme.hint.fontSize};
  margin-top: 0.5rem;
`;
