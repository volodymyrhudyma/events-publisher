import React from 'react';
import { Wrapper } from './styled/Icon.styled';

export interface IIconProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const Icon = (props: IIconProps) => <Wrapper {...props} />;

Icon.defaultProps = {
	alt: 'Icon',
	width: 10,
	height: 10
};

export default Icon;
