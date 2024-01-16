import s from './Checkbox.module.scss';
import React from 'react';


type TCheckboxProps = {
    label?: string;
    value?: boolean | null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    register?: Function;
    error?: { message?: string };
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'value'>;


const Checkbox: React.FC<TCheckboxProps> = ({ label, value, onChange, register, error, className, ...props }) => {
    if (register) {
        return (
            <label className={s['wrapper'] + ` ${className || ''} ${props.disabled ? s['disabled'] : ''}`}>
                <input
                    className={s['input']}
                    type="checkbox"
                    {...register(props.name)}
                    {...props}
                />

                <span className={s['checkmark']}/>

                {label && <div className={s['label']}>{label}</div>}
                {error && <div>{error?.message}</div>}
            </label>
        );
    }
    return (
        <label className={s['wrapper'] + ` ${className || ''}`}>
            <input
                className={s['input']}
                type="checkbox"
                checked={value === true}
                onChange={onChange}
                ref={(input) => {
                    if (input) {
                        input.indeterminate = value === null;
                    }
                }}
                {...props}
            />

            <span className={s['checkmark']}/>

            {label && <div className={s['label']}>{label}</div>}
            {error && <div>{error?.message}</div>}
        </label>
    );
};

export default Checkbox;
