import React from 'react';
import Dropdown, { IDropdownOption } from './Dropdown';
import Button from '../Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
    title: 'Perfsys/Dropdown',
    component: Dropdown
};
export default meta;

type Story = StoryObj<typeof Dropdown>;


export const Basic: Story = {
    render: () => {
        const options: IDropdownOption[] = [
            {
                label: 'Option 1',
                clickHandler: () => console.log('Option 1 clicked')
            },
            {
                label: 'Option 2',
                clickHandler: () => console.log('Option 2 clicked'),
                disabled: true
            }
        ];

        return (
            <Dropdown options={options} style={{ display: 'inline-flex' }}>
                <Button>Open Dropdown</Button>
            </Dropdown>
        );
    }
};
