import React, { ReactNode } from 'react';
// @ts-ignore
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './NavBtn.module.scss';

interface NavBtnProps {
    to: string;
    children: ReactNode;
    disabled?: boolean;
    className?: string;
    fullMatch?: boolean;
}

const NavBtn = ({ to, children, disabled, className, fullMatch = true }: NavBtnProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = decodeURI(location.pathname.replace(/\/$/, ''));
    const match = fullMatch ? pathname === to : pathname.startsWith(to);

    const classNames = [
        styles['button'],
        (match && styles['button--active']),
        (disabled && styles['button--disabled']),
        className
    ].filter(item => !!item).join(' ');

    const handleClick = () => {
        if (disabled) return;
        navigate(to);
    };

    return (
        <h2 className={classNames} onClick={handleClick}>
            {children}
        </h2>
    );
};


export default NavBtn;
