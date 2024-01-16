import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import s from './Dropdown.module.scss';


export interface IDropdownOption {
    label: ReactNode;
    disabled?: boolean;
    clickHandler: Function;
}

export interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
    options: IDropdownOption[];
    children: ReactNode;
}


const Dropdown: React.FC<IDropdownProps> = ({ options, children, className, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const componentRef = React.useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = ({ target }: MouseEvent) => {
            if (!componentRef.current?.contains(target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const handleOptionClick = (event: any, option: IDropdownOption) => {
        event.stopPropagation();
        option?.clickHandler();
        setIsOpen(false);
    };


    return (
        <div className={`${s['dropdown']} ${className}`} ref={componentRef} {...props}>
            <div className={s['dropdown__toggle']} onClick={toggleDropdown}>
                {children}
            </div>

            {isOpen && (
                <div className={s['dropdown__menu']}>
                    {options.map((option: IDropdownOption, index: number) => (
                        <button
                            key={index}
                            disabled={option.disabled}
                            className={s['dropdown__option']}
                            onClick={(event) => handleOptionClick(event, option)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
