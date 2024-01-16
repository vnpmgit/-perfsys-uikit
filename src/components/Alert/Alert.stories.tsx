import React, { CSSProperties } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';
import Icon from '../Icon';
import IconBadge from '../IconBadge';
import Button from '../Button';

const meta: Meta<typeof Alert> = {
    title: 'Perfsys/Alert',
    component: Alert
};
export default meta;


type Story = StoryObj<typeof Alert>;


const types: any = ['warning', 'error', 'success'];

const gridStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
};


export const Alerts: Story = {
    render: () => {
        return (
            <div style={gridStyles}>
                {
                    types.map((type: any) => (
                        <Alert type={type}
                               icon={<IconBadge color={type} double><Icon name="save"/></IconBadge>}
                               title="Some title"
                               description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                        />
                    ))
                }
            </div>
        );
    }
};

export const AlertsWithButton: Story = {
    render: () => {
        return (
            <div style={gridStyles}>
                {
                    types.map((type: any) => (
                        <Alert type={type}
                               icon={<Icon name="alertCircle"/>}
                               title="Some title"
                               description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                               buttons={
                                   <Button variant="ghost" color="gray" size="md" endIcon={<Icon name="chevronDown"/>}>
                                       READ MORE
                                   </Button>
                               }
                        />
                    ))
                }
            </div>
        );
    }
};
