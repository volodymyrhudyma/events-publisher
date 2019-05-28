import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.title.fontSize};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.title.borderColor};
  color: ${({ theme }) => theme.title.color};
  line-height: 1;
`;
