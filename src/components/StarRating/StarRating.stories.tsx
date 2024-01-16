import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import StarRating from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'Perfsys/StarRating',
    component: StarRating
};
export default meta;

type Story = StoryObj<typeof StarRating>;

const colors: Array<'gray' | 'primary' | 'error' | 'warning' | 'success'> = ['gray', 'primary', 'error', 'warning', 'success'];


export const Default: Story = {
    render: () => (
        <StarRating currentRate={4.6}/>
    )
};

export const Editable: Story = {
    render: () => (
        <StarRating currentRate={2.5} disabled={false}/>
    )
};

export const AllColors: Story = {
    render: () => (
        <div>
            {colors.map(color => (
                <div key={color} style={{ marginBottom: '10px' }}>
                    <StarRating currentRate={3.5} color={color}/>
                </div>
            ))}
        </div>
    )
};

export const CustomTotal: Story = {
    render: () => (
        <StarRating currentRate={3.5} total={10}/>
    )
};
