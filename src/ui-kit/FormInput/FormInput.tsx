import React, { ChangeEvent } from 'react';
import { IFormControlProps } from 'src/types';
import FormControl from 'src/ui-kit/FormControl';
import Input from 'src/ui-kit/Input';

interface IFormInputProps extends IFormControlProps {
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ placeholder, value, onChange, ...rest }: IFormInputProps) => (
	<FormControl {...rest}>
		<Input value={value} onChange={onChange} placeholder={placeholder} />
	</FormControl>
);

FormInput.defaultProps = {
	required: false
};

export default FormInput;
