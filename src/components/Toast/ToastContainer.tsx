import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';
import 'react-toastify/dist/ReactToastify.css';
import './ToastContainer.scss';

const propsDefault: ToastContainerProps = {
    closeButton: false,
    icon: false,
    hideProgressBar: true
};

const CustomToastContainer = ({ ...props }: ToastContainerProps) => {
    const options = { ...propsDefault, ...props };

    return (
        <ToastContainer className="toast-container" {...options}/>
    );
};

export default CustomToastContainer;
