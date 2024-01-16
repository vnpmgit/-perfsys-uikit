import React from 'react';
import './ProgressBar.scss';

export interface ProgressBarProps {
    percent: number;
    className?: string;
}

function ProgressBar({ percent, className }: ProgressBarProps) {
    return (
        <div className={`progress-bar ${className || ''}`}>
            <div className="filler" style={{ width: `${percent}%` }}>
                <span className="label">{`${percent}%`}</span>
            </div>
        </div>
    );
}

export default ProgressBar;
