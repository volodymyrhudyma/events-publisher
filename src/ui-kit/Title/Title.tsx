import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Title.styled';

interface ITitleProps {
	children: ReactNode;
}

const Title = ({ children }: ITitleProps) => <Wrapper>{children}</Wrapper>;

export default Title;
