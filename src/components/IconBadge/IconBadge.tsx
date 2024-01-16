import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './IconBadge.module.scss';

interface IIconBadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'regular' | 'outline'
    color?: 'gray' | 'primary' | 'error' | 'warning' | 'success';
    round?: boolean,
    double?: boolean;
    className?: string;
    children?: ReactNode;
}

const IconBadge = (
    {
        variant = 'regular',
        color = 'primary',
        round = true,
        double,
        className,
        children,
        ...props
    }: IIconBadgeProps
) => {
    const classNames = [
        styles['badge'],
        styles[`badge--${color}`],
        styles[`badge--${variant}`],
        (round && styles['badge--round']),
        (double && styles['badge--double']),
        className
    ]
        .filter(item => !!item)
        .join(' ');

    return (
        <div className={classNames} {...props}>{children}</div>
    );
};

export default IconBadge;
