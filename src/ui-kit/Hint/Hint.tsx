import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Hint.styled';

interface IHintProps {
	children: ReactNode;
}

const Hint = ({ children }: IHintProps) => <Wrapper>{children}</Wrapper>;

export default Hint;
