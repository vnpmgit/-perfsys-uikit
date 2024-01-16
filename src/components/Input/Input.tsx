import './Input.scss';
import React, { InputHTMLAttributes, ReactNode, useState } from 'react';
import Icon from '../Icon';


export interface TInputProps extends InputHTMLAttributes<any> {
    register: Function;
    error?: { message?: string };
    label?: ReactNode;
    id?: string;
    prefix?: string;
    customPrefix?: ReactNode;
    postfix?: string;
    type?: string;
}

export const Input = ({
                          register,
                          error,
                          label,
                          className,
                          id,
                          prefix,
                          postfix,
                          customPrefix,
                          type = 'text',
                          ...props
                      }: TInputProps) => {
    const [hidePassword, setHidePassword] = useState(true);

    const getControlClassNames = (): string => {
        const result = [];

        error && result.push('form-control--error');
        postfix && result.push('form-control--postfix');

        if (type === 'password') {
            result.push('form-control--password');
            hidePassword && result.push('form-control--password-hidden');
        }

        className && result.push(className);

        return result.join(' ');
    };

    const getInputType = (): string => {
        if (type === 'password') {
            return hidePassword ? 'password' : 'text';
        }
        return type;
    };

    const onClickIcon = () => {
        if (type === 'password') {
            setHidePassword(!hidePassword);
        }
    };

    return (
        <div className={`form-control ${getControlClassNames()}`}>
            {label && <label className="control__label" htmlFor={id}>{label}</label>}

            <div className="control__field">
                {customPrefix && <div className="control__prefix custom">{customPrefix}</div>}
                {prefix && <div className="control__prefix">{prefix}</div>}
                {postfix && <div className="control__postfix">{postfix}</div>}

                <input
                    className="control__input"
                    id={id}
                    type={getInputType()}
                    {...register(props.name)}
                    {...props}
                />

                <div className="control__icon" onClick={onClickIcon}>
                    {type === 'password' && (hidePassword ? <Icon name="eye"/> : <Icon name="eyeOff"/>)}
                    {error && type !== 'password' && <Icon name="alertCircle"/>}
                </div>
            </div>

            {error && <div className="control__hint control__hint--error">{error?.message}</div>}
        </div>
    );
};

export default Input;
