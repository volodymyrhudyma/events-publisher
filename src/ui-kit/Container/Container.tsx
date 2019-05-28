import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Container.styled';

interface IContainerProps {
	children: ReactNode;
}

const Container = ({ children }: IContainerProps) => <Wrapper>{children}</Wrapper>;

export default Container;
