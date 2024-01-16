import React, { TextareaHTMLAttributes } from 'react';


export interface TTextareaProps extends TextareaHTMLAttributes<any> {
    register: Function;
    error?: { message?: string };
    label?: string;
    id?: string;
}

export const Textarea = ({ register, error, label, className, id, ...props }: TTextareaProps) => {
    const getControlClassNames = (): string => {
        const result = [];

        error && result.push('form-control--error');

        className && result.push(className);

        return result.join(' ');
    };

    return (
        <div className={`form-control ${getControlClassNames()}`}>
            {label && <label className="control__label" htmlFor={id}>{label}</label>}

            <div className="control__field">
                <textarea
                    className="control__input"
                    id={id}
                    {...register(props.name)}
                    {...props}
                />
            </div>

            {error && <div className="control__hint control__hint--error">{error?.message}</div>}
        </div>
    );
};

export default Textarea;
