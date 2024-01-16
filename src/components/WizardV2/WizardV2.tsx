import React from 'react';
import './WizardV2.scss';
import Icon from '../Icon';

export interface WizardV2Item {
	title: string;
	content: string | React.ReactNode;
}

export interface WizardV2ItemProps extends WizardV2Item {
	current: number;
	index: number;
}

export interface WizardV2Props {
    current: number;
	items: WizardV2Item[];
	className?: string;
}

const getStepHeaderClassName = (index: number, current: number) => {
	if (index < current) {
		return 'wizardv2-previews-step-header text-sm';
	} else if (index === current) {
		return 'wizardv2-current-step-header text-sm';
	} else {
		return 'wizardv2-next-step-header text-sm';
	}
}

function WizardV2Item({title, current, index}: WizardV2ItemProps) {
	return (
		<div className='wizardv2-step'>
			<div className="wizardv2-step-header">
				{index < current && <Icon name="checkCircleFilled" className="wizardv2-step-icon wizardv2-previews-step-icon"/>}
				{index === current && <Icon name="wizardStep" className="wizardv2-step-icon wizardv2-current-step-icon"/>}
				{index > current && <Icon name="wizardStep" className="wizardv2-step-icon wizardv2-next-step-icon"/>}
				<span className={getStepHeaderClassName(index, current)}>{title}</span>
			</div>
			<div className={`wizardv2-step-line ${current >= index ? 'wizardv2-step-line-done' : ''}`}></div>
		</div>
	);
}

function WizardV2({current, items, className = ''}: WizardV2Props) {
    return (
        <>
			<div className={`wizardv2-steps ${className}`}>
				{items.map((item, index) => (
					<WizardV2Item key={index} {...item} current={current} index={index}/>
				))}
			</div>
			{items[current]?.content ?? <p>Step does not exist</p>}
		</>
    );
}

export default WizardV2;
