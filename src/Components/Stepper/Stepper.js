import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const StepperStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
   
    padding: '10px',
    width: '800px',
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10px',
    flex: '1',
    position: 'relative',
  },
  stepLine: (isCompleted) => ({
    height: '4px',
    backgroundColor: isCompleted ? '#3b82f6' : '#d3d3d3',
    width: '100%',
    transition: 'background-color 0.3s ease',
  }),
  stepNumber: {
    position: 'absolute',
    top: '-25px',
    fontSize: '12px',
    color: '#9ca3af',
  },
  arrowContainer: {
    marginTop: '20px',
    cursor: 'pointer',
  },
  arrow: {
    display: 'inline-block',
    width: '0',
    height: '0',
    marginLeft: '10px',
    verticalAlign: 'middle',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: '6px solid #3b82f6',
  },
};

const Stepper = () => {
    var  totalSteps=4;
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const steps = [];

  for (let i = 1; i <= totalSteps; i++) {
    steps.push(
      <div key={i} style={StepperStyles.step}>
        <div style={StepperStyles.stepNumber}>{`Step ${i} of ${totalSteps}`}</div>
        <div style={StepperStyles.stepLine(i <= currentStep)} />
      </div>
    );
  }

  return (
    <div>
    <h1>Stepper</h1>
      <div style={StepperStyles.container}>{steps}</div>
      <div style={StepperStyles.arrowContainer} onClick={handleNextStep}>
        <span>Next Step</span>
        <div style={StepperStyles.arrow}></div>
      </div>
    </div>
  );
};
export default Stepper