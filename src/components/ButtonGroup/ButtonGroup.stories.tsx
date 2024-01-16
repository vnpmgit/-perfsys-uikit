import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button';
import Icon from '../Icon';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Perfsys/ButtonGroup',
    component: ButtonGroup
};
export default meta;


type Story = StoryObj<typeof ButtonGroup>;


export const Outline: Story = {
    render: () => {
        return (
            <ButtonGroup>
                <Button variant="outline" color="gray">Button 1</Button>
                <Button variant="outline" color="gray">Button 2</Button>
                <Button variant="outline" color="gray">Button 3</Button>
            </ButtonGroup>
        );
    }
};


export const Disabled: Story = {
    render: () => {
        return (
            <ButtonGroup>
                <Button variant="outline" color="gray">Button 1</Button>
                <Button variant="outline" color="gray" disabled>Button 2</Button>
                <Button variant="outline" color="gray" disabled>Button 3</Button>
                <Button variant="outline" color="gray">Button 4</Button>
                <Button variant="outline" color="gray" disabled>Button 5</Button>
                <Button variant="outline" color="gray">Button 6</Button>
            </ButtonGroup>
        );
    }
};


export const WithIcons: Story = {
    render: () => {
        return (
            <ButtonGroup>
                <Button variant="outline" color="gray" startIcon={<Icon name="edit"/>}>Button 1</Button>
                <Button variant="outline" color="gray" startIcon={<Icon name="edit"/>}>Button 2</Button>
                <Button variant="outline" color="gray" startIcon={<Icon name="edit"/>}>Button 3</Button>
            </ButtonGroup>
        );
    }
};

export const Icons: Story = {
    render: () => {
        return (
            <ButtonGroup>
                <Button variant="outline" color="gray"><Icon name="edit"/></Button>
                <Button variant="outline" color="gray"><Icon name="edit"/></Button>
                <Button variant="outline" color="gray"><Icon name="edit"/></Button>
            </ButtonGroup>
        );
    }
};

export const Different: Story = {
    render: () => {
        return (
            <ButtonGroup>
                <Button variant="outline" color="gray">Button 1</Button>
                <Button variant="regular" color="secondary">Button 2</Button>
                <Button variant="regular" color="primary">Button 3</Button>
                <Button variant="regular" color="primary" disabled>Button 4</Button>
                <Button variant="regular" color="secondary">Button 5</Button>
                <Button variant="outline" color="gray">Button 6</Button>
                <Button variant="outline" color="gray">Button 7</Button>
            </ButtonGroup>
        );
    }
};
