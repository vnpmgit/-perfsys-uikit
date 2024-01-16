import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip, { ITooltipProps } from './Tooltip';

export default {
    title: 'Perfsys/Tooltip',
    component: Tooltip,
    argTypes: { // todo
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args: ITooltipProps | any) => {
    return (
        <Tooltip
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            style={{ marginLeft: '200px', marginTop: '60px' }}
            {...args}
        >
            Tooltip example
        </Tooltip>
    );
};

export const Default = Template.bind({});

export const onClickTooltip = Template.bind({});
onClickTooltip.args = {
    toolTipType:"onClick",
};

export const PositionBottom = Template.bind({});
PositionBottom.args = {
    position: 'bottom'
};

export const PositionLeft = Template.bind({});
PositionLeft.args = {
    position: 'left'
};

export const PositionRight = Template.bind({});
PositionRight.args = {
    position: 'right'
};
