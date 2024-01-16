import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconBadge from './IconBadge';
import Icon from '../Icon';

const meta: Meta<typeof IconBadge> = {
    title: 'Perfsys/IconBadge',
    component: IconBadge
};
export default meta;


type Story = StoryObj<typeof IconBadge>;


const colors: any = ['gray', 'primary', 'error', 'warning', 'success'];

const gridStyles = {
    display: 'flex',
    gap: '16px'
};


export const RoundRegular: Story = {
    render: () => {
        return (
            <div style={gridStyles}>
                {
                    colors.map((color: any) => (
                        <IconBadge color={color}>
                            <Icon name="folder"/>
                        </IconBadge>
                    ))
                }
            </div>
        );
    }
};

export const RoundDouble: Story = {
    render: () => {
        return (
            <div style={gridStyles}>
                {
                    colors.map((color: any) => (
                        <IconBadge color={color} double>
                            <Icon name="folder"/>
                        </IconBadge>
                    ))
                }
            </div>
        );
    }
};

export const Outline: Story = {
    render: () => {
        return (
            <IconBadge variant="outline" style={{ display: 'inline-flex' }}>
                <Icon name="folder"/>
            </IconBadge>
        );
    }
};
