import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Wizard, { StepProps } from './Wizard';

export default {
	title: 'Perfsys/Wizard',
	component: Wizard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Wizard>;

const step1 = (props: StepProps) => {
	return (
		<div style={{"border" : "1px solid black"}}>123</div>
	)
}
const step2 = (props: StepProps) => {
	console.log(props);

	return (
		<div style={{"border" : "1px solid black"}}>
			<button onClick={() => props.setData({data:1111})}>321</button>
		</div>
		
	)
}

const step3 = (props: StepProps) => {
	return (
		<div style={{"border" : "1px solid black"}}>
			<button onClick={() => props.setIndex(0)}>To first page</button>
		</div>
	)
}


const Template: StoryFn<typeof Wizard> = (args) => <Wizard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	headers: ["Register", "Pay", "Confirm", "Test"],
	initialData: {data: 12345},
	steps: [step1, step2, step3, step3],
	onDataChange: (data) => console.log(data)
};
