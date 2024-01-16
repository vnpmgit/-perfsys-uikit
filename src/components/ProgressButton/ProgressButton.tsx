import React, { ReactNode } from 'react';
import styles from './ProgressButton.module.scss';
import Icon from '../Icon/Icon';


export interface IProgressButtonProps {
    size?: 'md' | 'lg';
    statusPoint?: number | null;
    children: ReactNode;
}

const ProgressButton = ({ size = 'lg', statusPoint = null, children }: IProgressButtonProps) => {
    const transform = typeof statusPoint === 'number' ? `translateX(${statusPoint}%)` : 'none';

    return (
        <div className={`${styles['progress']} ${styles[`progress--${size}`]}`}>
            <div className={styles['progress__filler']} style={{ transform }}/>
            <Icon className={styles['progress__icon']} name="loader"/>
            <p className={styles['progress__text']}>{children}</p>
        </div>
    );
};

export default ProgressButton;
