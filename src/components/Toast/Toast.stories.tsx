import React, { ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ToastContainer from './index';
import toastController, { IToastContent } from './ToastController';
import { ToastOptions } from 'react-toastify/dist/types';
import Button from '../Button';


const meta: Meta<any> = {
    title: 'Perfsys/Toast'
};
export default meta;

type Story = StoryObj<any>;


interface IToastProps {
    content: IToastContent | string;
    options?: ToastOptions;
    children?: ReactNode;
}

const Toast = ({ content, options, children }: IToastProps) => {
    return (
        <>
            <Button onClick={() => toastController.info(content, options)}>{children}</Button>
            <Button onClick={() => toastController.success(content, options)}>{children}</Button>
            <Button onClick={() => toastController.error(content, options)}>{children}</Button>
            <Button onClick={() => toastController.warning(content, options)}>{children}</Button>
            <ToastContainer/>
        </>
    );
};


export const Info: Story = {
    render: () => {
        const content: any = {
            title: 'New Global Update is available',
            description: 'This update will affect whole Tibica Platform.',
            // icon: <span>icon</span>,
            footer: <Button variant="ghost" size="sm" style={{ marginLeft: '-14px' }}>UPDATE</Button>
        };

        const options: ToastOptions = {
            autoClose: false
        };

        return <Toast content={content} options={options}>Info with icon and footer</Toast>;
    }
};
