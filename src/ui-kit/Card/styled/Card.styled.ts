import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 3rem 0.5rem 3rem;
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  margin-bottom: 3rem;
`;
