import React, { HTMLAttributes, ReactNode } from 'react';
import s from './Alert.module.scss';

interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'warning' | 'error' | 'success';
    icon?: ReactNode;
    alertTitle?: ReactNode;
    alertContent?: ReactNode;
    description?: ReactNode;
    buttons?: ReactNode;
}

const Alert = ({ type, icon, alertTitle, description, buttons, alertContent, className, ...props }: IAlertProps) => {
    const classNames = [
        s['alert'],
        (type && s[`alert--${type}`]),
        className
    ].filter(item => !!item).join(' ');

    return (
        <div className={classNames} {...props}>
            {icon && <span className={s['alert__icon']}>{icon}</span>}

            {alertContent
             ?
             alertContent
             :
             <div className={s['alert__content']}>
                 {alertTitle && <p className={s['alert__title']}>{alertTitle}</p>}
                 {description && <p className={s['alert__description']}>{description}</p>}
                 {buttons && <div className={s['alert__buttons']}>{buttons}</div>}
             </div>
            }
        </div>
    );
};

export default Alert;
