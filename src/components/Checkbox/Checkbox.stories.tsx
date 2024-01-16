import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof Checkbox> = {
    title: 'Perfsys/Checkbox',
    component: Checkbox
};
export default meta;

type Story = StoryObj<typeof Checkbox>;


// Story for the Checkbox with register prop
export const WithRegister: Story = {
    render: () => {
        const { register, formState: { errors } } = useForm();
        return (
            <Checkbox
                name="exampleCheckbox"
                label="With Register"
                register={register}
                disabled={false}
                error={errors.exampleCheckbox}
            />
        );
    }
};

// Story for the Checkbox with controlled value and onChange
export const ControlledCheckbox: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Checkbox
                value={checked}
                onChange={handleOnChange}
                label="Example Controlled Checkbox"
                // error={...} // add error handling if needed
            />
        );
    }
};
