import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Perfsys/Textarea',
    component: Textarea
};
export default meta;


type Story = StoryObj<typeof Textarea>;


export const Regular: Story = {
    render: () => {
        return <Textarea label="Label Text" id="id" rows={5} register={() => {}}/>;
    }
};
