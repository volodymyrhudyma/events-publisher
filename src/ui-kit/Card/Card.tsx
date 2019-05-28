import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Card.styled';

interface ICardProps {
	children: ReactNode;
}

const Card = ({ children }: ICardProps) => <Wrapper>{children}</Wrapper>;

export default Card;
