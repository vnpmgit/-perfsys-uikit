import s from './Modal.module.scss';
import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import IconButton from '../IconButton';


interface IModalCommonProps {
    isOpen: boolean;
    title?: string;
    message?: string;
    icon?: ReactNode;
    onClose: () => void;
    disableClose?: boolean;
    buttons?: ReactNode;
    header?: ReactNode;
    children?: ReactNode;
    size?: 'sm' | 'md' | 'lg' | '';
    maxWidth?: string;
    onArrowClick?:()=>void;
}

const modalRoot = document.getElementById('modal-root');

function Modal(
    {
        isOpen,
        title,
        message,
        icon,
        disableClose,
        header,
        buttons,
        children,
        size = '',
        maxWidth,
        onClose,
        onArrowClick
    }: IModalCommonProps
) {
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        modalRoot?.appendChild(el.current);
        document.addEventListener('keydown', onKeydown);

        return () => {
            modalRoot?.removeChild(el.current);
            document.removeEventListener('keydown', onKeydown);
        };
    }, []);


    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isOpen]);


    const onKeydown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
            onClose();
        }
    };

    return isOpen
           ? createPortal(
            <div className={`${s['modal-overlay']} ${isOpen && s['modal-overlay--active']}`}
                 onClick={() => !disableClose && onClose()}
            >
                <div className={`${s['modal']} ${s['modal--' + size]}`}
                     style={{ maxWidth }}
                     onClick={(e) => e.stopPropagation()}
                >
                    <div className={s['modal__header']}>
                        <IconButton icon="close" size="lg"
                                    className={s['modal__close']}
                                    disabled={disableClose}
                                    onClick={onClose}
                        />

                        {header
                         ?
                         <div className={s['custom-header']}>{header}</div>
                         :
                         <>
                             {icon && <div className={s['icon']}>{icon}</div>}
                             {title && onArrowClick && 
                                <div className={s['arrow-title']} onClick={onArrowClick}>
                                    <IconButton icon="arrowLeft"/>
                                    <h3 className={s['title']}>{title}</h3>
                                </div>
                             }
                             {title && !onArrowClick && <h3 className={s['title']}>{title}</h3>}
                             {message && <p className={s['message']}>{message}</p>}
                         </>
                        }
                    </div>

                    {children && <div className={s['modal__body']}>{children}</div>}

                    {
                        buttons &&
                            <div className={s['modal__footer']}>
                                <div className={s['buttons']}>{buttons}</div>
                            </div>
                    }
                </div>
            </div>,
            el.current
        )
           : null;
}

export default Modal;
