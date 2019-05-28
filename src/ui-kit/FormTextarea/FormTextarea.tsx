import React, { ChangeEvent, PureComponent } from 'react';
import { IFormControlProps } from 'src/types';
import FormControl from 'src/ui-kit/FormControl';
import Textarea from 'src/ui-kit/Textarea';

interface IFormTextareaProps extends IFormControlProps {
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface IFormTextareaState {
	length: number;
}

class FormTextarea extends PureComponent<IFormTextareaProps, IFormTextareaState> {
	public static defaultProps = {
		required: false
	};
	constructor(props: IFormTextareaProps) {
		super(props);
		this.state = {
			length: 0
		};
	}
	public onLengthChange = (length: number) => {
		this.setState({
			...this.state,
			length
		});
	};
	public onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { onChange, maxLength } = this.props;
		if (maxLength) {
			const { length } = e.target.value;
			if (length <= maxLength) {
				this.onLengthChange(length);
				onChange(e);
			}
		} else {
			onChange(e);
		}
	};
	public render() {
		const { placeholder, value, ...rest } = this.props;
		const { length } = this.state;
		return (
			<FormControl {...rest} currentLength={length}>
				<Textarea value={value} onChange={this.onChange} placeholder={placeholder} />
			</FormControl>
		);
	}
}

export default FormTextarea;
