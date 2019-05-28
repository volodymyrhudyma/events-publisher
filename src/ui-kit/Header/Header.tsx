import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Header.styled';

interface IHeaderProps {
	children: ReactNode;
}

const Header = ({ children }: IHeaderProps) => <Wrapper>{children}</Wrapper>;

export default Header;
