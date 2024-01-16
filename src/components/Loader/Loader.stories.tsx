import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'Perfsys/Loader',
    component: Loader
};
export default meta;


type Story = StoryObj<typeof Loader>;


export const Basic: Story = {
    render: () => {
        return (
            <Loader text="Loading..."/>
        );
    }
};

export const CenterAbsolute: Story = {
    render: () => {
        return (
            <Loader center/>
        );
    }
};

export const CenterGlobal: Story = {
    render: () => {
        return (
            <Loader global/>
        );
    }
};
