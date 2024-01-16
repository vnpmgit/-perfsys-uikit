import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
	title: 'Perfsys/ProgressBar',
	component: ProgressBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	percent: 43
};
