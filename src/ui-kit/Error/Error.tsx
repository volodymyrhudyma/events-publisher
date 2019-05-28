import React from 'react';
import icons from 'src/constants/icons';
import Icon from 'src/ui-kit/Icon';
import { IconWrapper, Wrapper } from './styled/Error.styled';

interface IErrorProps {
	children: string;
}

const Error = ({ children }: IErrorProps) => (
	<Wrapper>
		<IconWrapper>
			<Icon src={icons.triangle} width={5} height={10} />
		</IconWrapper>
		{children}
	</Wrapper>
);

export default Error;
