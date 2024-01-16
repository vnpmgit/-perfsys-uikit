import React from 'react';
import style from './ProgressBar2.module.scss';


interface ProgressBarProps {
    color?: 'success' | 'primary'
    completed: number;
    className?: string;
}

function ProgressBar2({ completed, color = 'success', className }: ProgressBarProps) {
    const classNames = [
        style['wrapper'],
        style[`wrapper--${color}`],
        className
    ]
        .filter(item => !!item)
        .join(' ');

    return (
        <div className={classNames}>
            <div className={style['filler-container']}>
                <div className={style['filler']} style={{ 'width': `${completed}%` }}/>
            </div>
            <span className={style['label']}>{`${completed}%`}</span>
        </div>
    );
}

export default ProgressBar2;
