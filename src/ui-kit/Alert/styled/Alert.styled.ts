import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.alert.backgroundColor};
  padding: 2rem 4rem;
  border: 1px solid ${({ theme }) => theme.alert.borderColor};
  box-shadow: ${({ theme }) => theme.alert.boxShadow};
`;

export const PrimaryText = styled.div`
  font-size: ${({ theme }) => theme.alert.primaryText.fontSize};
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.alert.primaryText.color};
`;

export const SecondaryText = styled.div``;
