import React, { ComponentType, Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Wizard.scss';

export interface WizardProps {
    headers: string[];
    initialData?: object;
    steps: ComponentType<StepProps>[];
    onDataChange?: (data: unknown) => void;
    onChangeStep?: () => void;
    currentIndex?: number;
    isDone?: boolean;
    hideNavigationButtons?: boolean;
    mobileScreen?: number;
}

export interface StepProps {
    setData: (fields: object) => void;
    setIndex: Dispatch<SetStateAction<number>>;
    disableNext: Dispatch<SetStateAction<boolean>>;
    disablePrev: Dispatch<SetStateAction<boolean>>;
}

function Wizard({
                    headers,
                    initialData,
                    steps,
                    currentIndex,
                    hideNavigationButtons,
                    isDone,
                    onDataChange,
                    onChangeStep,
                    mobileScreen = 768
                }: WizardProps) {
    const [data, setData] = useState(initialData || {});
    const [currentStepIndex, setCurrentStepIndex] = useState(currentIndex || 0);
    const [disableNext, setDisableNext] = useState(false);
    const [disablePrev, setDisablePrev] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= mobileScreen);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (currentIndex !== undefined) {
            setCurrentStepIndex(currentIndex);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (onChangeStep) {
            onChangeStep();
        }
    }, [currentStepIndex]);

    const isLastStep = currentStepIndex === steps.length - 1;
    const isFirstStep = currentStepIndex === 0;

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        });
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i;
            return i - 1;
        });
    }

    function updateData(fields: object) {
        // console.log(fields, data);
        setData(prev => {
            return { ...prev, ...fields };
        });
        if (onDataChange) {
            onDataChange(data);
        }
    }

    const Step = steps[currentStepIndex];

    // console.log(currentStepIndex, steps.length, isDone);

    const getClassName = (index: number) => {
        return `wizard-header-item ${index < currentStepIndex || (currentStepIndex === steps.length - 1 && isDone) ? 'wizard-header-item-done ' : ''}${index === currentStepIndex ? ' wizard-header-item-active' : ''}`;
    };

    return (
        <div className={`wizard ${isMobile ? 'wizard--mobile' : ''}`}
             style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}>
            {headers.map((header: string, index: number) => {
                return (
                    <div className={getClassName(index)} key={index} style={{order: index}}>
                        <span className="wizard-header-step">STEP {index + 1}:&nbsp;</span>
                        <span className="wizard-header-step-text">{header}</span>
                        {index === currentStepIndex && <div className={`wizard-header-arrow-down ${(currentStepIndex === steps.length - 1 && isDone) ? 'wizard-header-arrow-down-done' : ''}`}/>}
                    </div>
                );
            })}

            <div className="wizard-content" style={{ gridColumn: `1 / span ${headers.length}`, order: isMobile ? currentStepIndex : headers.length}}>
                <Step
                    setIndex={setCurrentStepIndex}
                    setData={updateData}
                    disableNext={setDisableNext}
                    disablePrev={setDisablePrev}
                />
                {!hideNavigationButtons &&
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
                      {!isFirstStep && <button disabled={disablePrev} onClick={back}>Back</button>}
                    <button disabled={disableNext} onClick={next}>{isLastStep ? 'Finish' : 'Next'}</button>
                  </div>
                }
            </div>
        </div>
    );
}

export default Wizard;
