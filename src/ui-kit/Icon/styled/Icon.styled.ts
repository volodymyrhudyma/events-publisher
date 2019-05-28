import styled from 'styled-components';

interface IWrapperProps {
	width: number;
	height: number;
}

export const Wrapper = styled.img`
    width: ${({ width }) => `${width}px`}
    height: ${({ height }) => `${height}px`}
`;
