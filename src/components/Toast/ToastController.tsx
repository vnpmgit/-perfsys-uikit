import React, { ReactNode } from 'react';
import { toast } from 'react-toastify';
import ToastMessage from './components/ToastMessage';
import Icon from '../Icon';
import { ToastOptions } from 'react-toastify/dist/types';


export interface IToastContent {
    title?: string;
    description?: ReactNode;
    icon?: ReactNode;
    footer?: ReactNode;
    className?: string;
}


const ToastController = {
    ...toast,

    info: (content: IToastContent | string, options?: ToastOptions) => {
        return toast.info(<ToastMessage content={content} icon={<Icon name="infoCircle"/>}/>, options);
    },

    success: (content: IToastContent | string, options?: ToastOptions) => {
        return toast.success(<ToastMessage content={content} icon={<Icon name="checkCircle"/>}/>, options);
    },

    warning: (content: IToastContent | string, options?: ToastOptions) => {
        return toast.warning(<ToastMessage content={content} icon={<Icon name="alertTriangle"/>}/>, options);
    },

    error: (content: IToastContent | string, options?: ToastOptions) => {
        return toast.error(<ToastMessage content={content} icon={<Icon name="alertCircle"/>}/>, options);
    },

    dismiss: toast.dismiss
};

export default ToastController;
