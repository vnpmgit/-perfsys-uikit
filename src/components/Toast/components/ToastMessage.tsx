import './ToastMessage.scss';
import React from 'react';
import { IToastContent } from '../ToastController';
import Icon from '../../Icon';

const ToastMessage = ({ content, icon, ...props }: any) => {
    let data: IToastContent = {};

    if (typeof content === 'object') {
        data = content;
    }

    if (typeof content === 'string') {
        data.title = content;
    }

    return (
        <div className={`toast-message toast-message--${props.toastProps.type}`}>
            {icon && <span className="toast-message__icon">{content?.icon || icon}</span>}

            <div className="toast-message__content">
                <span className="toast-message__close" onClick={() => props?.closeToast()}>
                    <Icon name="close"/>
                </span>
                {data.title && <h3 className="toast-message__title">{data.title}</h3>}
                {data.description && <p className="toast-message__description">{data.description}</p>}
                {content.footer && <div className="toast-message__footer">{content.footer}</div>}
            </div>

        </div>
    );
};

export default ToastMessage;
