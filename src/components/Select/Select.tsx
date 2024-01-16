import { ReactNode } from 'react';
import './Select.scss';
import ReactSelect, { ActionMeta, SingleValue } from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/stateManager';
import { GroupBase } from 'react-select/dist/declarations/src/types';

export interface ISelectOption {
    value: string | number | boolean;
    label: string | ReactNode;
    isDisabled?: boolean;
}

interface SelectProps extends StateManagerProps<ISelectOption, false, GroupBase<ISelectOption>> {
    error?: { message?: string };
    label?: string | ReactNode;
    id?: string;
    className?: string;
    onChange?: (data: SingleValue<ISelectOption>, action: ActionMeta<ISelectOption>) => void;
}


function Select({ label, id, error, className, ...props }: SelectProps) {

    const getControlClassNames = (): string => {
        const result = [];

        error && result.push('form-control--error');
        className && result.push(className);

        return result.join(' ');
    };

    return (
        <div className={`form-control ${getControlClassNames()}`}>
            {label && <label className="." htmlFor={id}>{label}</label>}

            <ReactSelect
                className="form-select form-select--default"
                classNamePrefix="form-select"
                id={id}
                {...props}
            />

            {error && <div className="control__hint control__hint--error">{error?.message}</div>}
        </div>
    );
}

export default Select;
