import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import WizardV2 from './WizardV2';

export default {
	title: 'Perfsys/WizardV2',
	component: WizardV2,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof WizardV2>;


const Template: StoryFn<typeof WizardV2> = (args) => <WizardV2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	current: 0,
	items: [
		{
			title: 'Step super23',
			content: 'Content 1',
		},
		{
			title: 'Step2 234234',
			content: 'Content 2',
		},
		{
			title: 'Step 344 23',
			content: 'Content 3',
		},
	],
};
