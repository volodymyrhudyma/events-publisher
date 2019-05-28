import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 1.5rem;
`;

export const StyledRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 24px;
    cursor: pointer;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    width: 15px;
    height: 15px;
    border: 1px solid ${({ theme }) => theme.radio.color};
    border-radius: 100%;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.radio.color};
    position: absolute;
    top: 3px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
