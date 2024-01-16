import React from 'react';
import Badge from './Badge';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
    title: 'Perfsys/Badge',
    component: Badge
};
export default meta;

type Story = StoryObj<typeof Badge>;


const colors: Array<'gray' | 'primary' | 'error' | 'warning' | 'success' | 'blue'> = ['gray', 'primary', 'error', 'warning', 'success', 'blue'];
const sizes: Array<'sm' | 'md'> = ['md', 'sm'];

const BadgesGroup = () => {
    return (
        <>
            {sizes.map((size) => (
                <div key={size} style={{ marginBottom: '20px' }}>
                    {colors.map((color) => (
                        <Badge
                            key={`${size}-${color}`}
                            color={color}
                            size={size}
                            outline={false}
                            style={{ marginRight: '20px' }}
                        >
                            {color.charAt(0).toUpperCase() + color.slice(1)} {size}
                        </Badge>
                    ))}
                </div>
            ))}
        </>
    );
};

export const FilledBadges: Story = {
    render: () => <BadgesGroup/>
};

export const OutlinedBadges:Story = {
    render: ()=> {
        return (
            <>
                {sizes.map((size) => (
                    <div key={size} style={{ marginBottom: '20px' }}>
                        {colors.map((color) => (
                            <Badge
                                key={`${size}-${color}`}
                                color={color}
                                size={size}
                                outline={true}
                                style={{ marginRight: '20px' }}
                            >
                                {color.charAt(0).toUpperCase() + color.slice(1)} {size}
                            </Badge>
                        ))}
                    </div>
                ))}
            </>
        )
    }
}