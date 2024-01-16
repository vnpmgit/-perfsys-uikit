import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.scss';

interface IBudgetProp extends HTMLAttributes<HTMLDivElement> {
    color?: 'gray' | 'primary' | 'error' | 'warning' | 'success' | 'blue';
    size?: 'sm' | 'md';
    outline?:boolean;
    children?: ReactNode;
}

const Badge = ({ children, color = 'gray', size = 'md', outline = false, className = '', ...props }: IBudgetProp) => {
    return (
        <div className={`
         ${styles.badge} 
         ${styles[`badge--${color}`]}
         ${styles[`badge--${size}`]} 
         ${outline ? styles[`badge--outline`] : ''}
         ${className}
         `}
             {...props}
        >
            {children}
        </div>
    );
};

export default Badge;
