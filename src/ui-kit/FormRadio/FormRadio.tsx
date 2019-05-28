import React from 'react';
import { IFormControlProps, ISelectOption } from 'src/types';
import FormControl from 'src/ui-kit/FormControl';
import Radio from 'src/ui-kit/Radio';
import { ChoiceContainer } from './styled/FormRadio.styled';

interface IFormRadioProps extends IFormControlProps {
	options: ISelectOption[];
	value: string;
	onChange: (value: string) => void;
}

const FormRadio = ({ options, value, onChange, ...rest }: IFormRadioProps) => (
	<FormControl {...rest}>
		<ChoiceContainer>
			{options.map((option) => (
				<Radio
					key={option.value}
					value={option.value}
					label={option.label}
					checked={option.value === value}
					onChange={onChange}
				/>
			))}
		</ChoiceContainer>
	</FormControl>
);

FormRadio.defaultProps = {
	required: false
};

export default FormRadio;
