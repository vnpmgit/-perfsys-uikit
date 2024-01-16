import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import iconComponents from './icon-components';

const meta: Meta<typeof Icon> = {
    title: 'Perfsys/Icon',
    component: Icon
};

export default meta;


type Story = StoryObj<typeof Icon>;

const gridStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    fontFamily: 'Inter'
};

export const AllIcons: Story = {
    render: () => {
        return (
            // @ts-ignore
            <div style={gridStyles}>
                {
                    Object.keys(iconComponents).map((name: string) => (
                        <div style={{ textAlign: 'center' }}>
                            <Icon name={name} key={name}/>
                            <br/>
                            <div style={{ fontSize: '12px', color: 'grey' }}>
                                {name}
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
};
