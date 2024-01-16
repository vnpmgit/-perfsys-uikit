import React from 'react';
import s from './IconButton.module.scss';
import Icon from '../Icon/Icon';
import classNames from '../../utils/classNames';

interface IconButtonProps extends React.SVGProps<SVGSVGElement> {
    icon: string;
    size?: 'sm' | 'md' | 'lg';
}

const IconButton: React.FC<IconButtonProps | any> = ({ icon, size = 'md', className, ...props }) => {
    const classList = classNames(`${s['button']} ${s[`button--${size}`]}`, { [className]: !!className });

    return (
        <button className={classList} {...props}>
            <Icon name={icon}/>
        </button>
    );
};

export default IconButton;
