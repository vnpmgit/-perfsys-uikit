import React, { CSSProperties, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select, { ISelectOption } from './Select';
import Icon from '../Icon';

const meta: Meta<typeof Select> = {
    title: 'Perfsys/Select',
    component: Select
};
export default meta;

type Story = StoryObj<typeof Select>;


// Example options for the select component
const responseCodeOptions: ISelectOption[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' },
];

export const Default: Story = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(responseCodeOptions[0]);

        return (
            <Select
                label="Example Select"
                options={responseCodeOptions}
                value={selectedOption}
                onChange={(data: any) => setSelectedOption(data)}
            />
        );
    }
};

export const WithError: Story = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(responseCodeOptions[0]);
        const error = { message: 'Error message' }; // Example error message

        return (
            <Select
                label="Example Select"
                options={responseCodeOptions}
                value={selectedOption}
                onChange={(data: any) => setSelectedOption(data)}
                error={error}
            />
        );
    }
};

export const Disabled: Story = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(responseCodeOptions[0]);

        return (
            <Select
                label="Example Select"
                options={responseCodeOptions}
                value={selectedOption}
                onChange={(data: any) => setSelectedOption(data)}
                isDisabled={true}
            />
        );
    }
};

export const Custom: Story = {
    render: () => {
        const flexRowStyle:CSSProperties = {
            display:"flex", 
            flexDirection:'row', 
            gap:"8px", 
            alignItems:"center",
            fontWeight:"bolder"
        }

        const customResponseCodeOptions: ISelectOption[] = [
            {   
                value: 1, 
                label: 
                    <div style={flexRowStyle}>
                        <Icon name='search'/>
                        <div>Custom component 1</div>
                    </div> 
            },
            {   
                value: 2, 
                label: 
                    <div style={flexRowStyle}>
                        <Icon name='fileCode'/>
                        <div>Custom component 2</div>
                    </div> 
            },
            {   
                value: 3, 
                label: 
                    <div style={flexRowStyle}>
                        <Icon name='file'/>
                        <div>Custom component 3</div>
                    </div> 
            },
            {   
                value: 4, 
                label: "Simple string 4"
            }
        ];
        const [selectedOption, setSelectedOption] = useState(customResponseCodeOptions[0]);

        return (
            <Select
                label={
                    <div style={flexRowStyle}>
                        <Icon name='search'/>
                        <div>Example</div>
                    </div>
                }
                options={customResponseCodeOptions}
                value={selectedOption}
                onChange={(data: any) => setSelectedOption(data)}
            />
        );
    }
};
