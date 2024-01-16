import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
    title: 'Perfsys/IconButton',
    component: IconButton
};
export default meta;


type Story = StoryObj<typeof IconButton>;


export const Regular: Story = {
    render: () => {
        return (
            <div>
                <IconButton icon="close" size="lg"/>
                <IconButton icon="close" size="md"/>
                <IconButton icon="close" size="sm"/>
            </div>
        );
    }
};

export const Disabled: Story = {
    render: () => {
        return (
            <div>
                <IconButton icon="close" size="lg" disabled/>
                <IconButton icon="close" size="md" disabled/>
                <IconButton icon="close" size="sm" disabled/>
            </div>
        );
    }
};

