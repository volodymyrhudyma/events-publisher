import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.error.backgroundColor};
  padding: 3px 6px;
  font-size: ${({ theme }) => theme.error.fontSize};
  color: ${({ theme }) => theme.error.color};
  position: relative;
  ${down('tablet')} {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -5px;
  top: 50%;
  margin-top: -5px;
  display: flex;
  ${down('tablet')} {
    display: none;
  }
`;
