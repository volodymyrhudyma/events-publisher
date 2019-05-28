import React from 'react';
import { PrimaryText, SecondaryText, Wrapper } from './styled/Alert.styled';

interface IAlertProps {
	primaryText: string;
	secondaryText: string;
}

const Alert = ({ primaryText, secondaryText }: IAlertProps) => (
	<Wrapper>
		<PrimaryText>{primaryText}</PrimaryText>
		<SecondaryText>{secondaryText}</SecondaryText>
	</Wrapper>
);

export default Alert;
