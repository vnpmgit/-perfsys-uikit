import React from 'react';
import RadioButton from './RadioButton';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof RadioButton> = {
    title: 'Perfsys/RadioButton',
    component: RadioButton
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const WithRegister: Story = {
    render: () => {
        const { register } = useForm();

        return (
            <form>
                <RadioButton
                    id="static"
                    name="static"
                    label="Radio 1"
                    register={register}
                    value="true"
                    defaultChecked
                />

                <RadioButton
                    id="dynamic"
                    name="static"
                    label="Radio 2"
                    register={register}
                    value="false"
                />
            </form>
        );
    }
};
