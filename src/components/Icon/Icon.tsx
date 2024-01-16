import React from 'react';
import styles from './Icon.module.scss';
import classNames from '../../utils/classNames';
import iconComponents from './icon-components';


interface IconButtonProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}


const Icon: React.FC<IconButtonProps> = ({ name, size = 'sm', className, ...props }) => {
    const IconComponent = iconComponents[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent className={classNames(
            `${styles['icon']} ${styles[`icon--${size}`]}`,
            { [`${className}`]: className }
        )} {...props}/>
    );
};

export default Icon;
