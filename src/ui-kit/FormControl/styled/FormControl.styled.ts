import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  ${down('tablet')} {
    flex-direction: column;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.form.control.label.width};
  height: auto;
  max-height: ${({ theme }) => theme.form.control.label.maxHeight};
  ${down('tablet')} {
    margin-bottom: 1rem;
  }
`;

export const RequiredWrapper = styled.div`
  color: ${({ theme }) => theme.form.control.label.requiredMarkColor};
  margin-left: 0.25rem;
`;

export const ContentWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

export const ErrorWrapper = styled.div`
  flex: 1;
  min-width: ${({ theme }) => theme.form.control.error.maxWidth};
  height: auto;
  max-height: ${({ theme }) => theme.form.control.error.maxHeight};
  display: flex;
  align-items: center;
`;
