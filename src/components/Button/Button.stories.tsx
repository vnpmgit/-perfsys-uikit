import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button, { TColor, TSize, TVariant } from './Button';
import Icon from '../Icon';

const meta: Meta<typeof Button> = {
    title: 'Perfsys/Button',
    component: Button
};
export default meta;


type Story = StoryObj<typeof Button>;

const variants: TVariant[] = ['regular', 'outline', 'ghost'];

const colors: TColor[] = ['primary', 'error', 'warning', 'secondary', 'gray'];

const sizes: TSize[] = ['sm', 'md', 'lg', 'xl', '2xl'].reverse() as TSize[];

interface IButtonsGroupProps {
    variant: TVariant;
}

const ButtonsGroup = ({ variant }: IButtonsGroupProps) => {
    return (
        <>
            {
                sizes.map((size: TSize) => (
                    <div key={size} style={{ marginBottom: '20px' }}>
                        {
                            colors.map((color: TColor) => (
                                <Button
                                    key={color}
                                    variant={variant}
                                    color={color}
                                    size={size}
                                    style={{ marginRight: '20px' }}
                                >
                                    {color.charAt(0).toUpperCase()}{color.substring(1)} {size}
                                </Button>
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
};

const ButtonsGroupDisabled = () => {
    return (
        <>
            {
                variants.map((variant: TVariant) => (
                    <div key={variant} style={{ marginBottom: '20px' }}>
                        {
                            colors.map((color: TColor) => (
                                <Button
                                    key={color}
                                    variant={variant}
                                    color={color}
                                    size="md"
                                    disabled
                                    style={{ marginRight: '20px' }}
                                >
                                    {color.charAt(0).toUpperCase()}{color.substring(1)} {variant}
                                </Button>
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
};


export const Regular: Story = {
    render: () => {
        return <ButtonsGroup variant="regular"/>;
    }
};

export const Outline: Story = {
    render: () => {
        return <ButtonsGroup variant="outline"/>;
    }
};

export const Ghost: Story = {
    render: () => {
        return <ButtonsGroup variant="ghost"/>;
    }
};

export const Disabled: Story = {
    render: () => {
        return <ButtonsGroupDisabled/>;
    }
};

export const StartIcon: Story = {
    args: {
        children: 'Button',
        size: 'md',
        startIcon: <Icon name="folder"/>
    }
};

export const EndIcon: Story = {
    args: {
        children: 'Button',
        size: 'md',
        endIcon: <Icon name="folder"/>
    }
};

export const BothIcons: Story = {
    args: {
        children: 'Button',
        size: 'md',
        startIcon: <Icon name="folder"/>,
        endIcon: <Icon name="folder"/>
    }
};

export const LoadingButton: Story = {
    args: {
        children: 'Button',
        size: 'md',
        startIcon: <Icon name="folder"/>,
        loading: true
    }
};
