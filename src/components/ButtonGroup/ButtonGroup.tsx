import './ButtonGroup.scss';
import { Children, ReactNode } from 'react';

interface ButtonGroupProps {
    children: ReactNode;
    className?: string;
}

function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
    const buttons = Children.toArray(children);

    return (
        <div className={`button-group ${className}`}>
            {buttons.map((button: ReactNode) => button)}
        </div>
    );
}

export default ButtonGroup;
