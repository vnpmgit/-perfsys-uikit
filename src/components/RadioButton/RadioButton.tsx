import './RadioButton.scss';
import React, { InputHTMLAttributes } from 'react';


export interface TInputProps extends InputHTMLAttributes<any> {
    register: Function;
    error?: { message?: string };
    label?: string;
    id?: string;
}

export const RadioButton = ({ register, error, label, className, id, ...props }: TInputProps) => {
    return (
        <label className="radio">
            {label}
            <input type="radio" {...register(props.name)} {...props}/>
            <span className="radio__checkmark"/>
        </label>
    );
};

export default RadioButton;
