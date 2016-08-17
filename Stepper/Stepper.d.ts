import * as React from 'react'

export interface StepperProps {
    activeStep?: number;
    linear?: boolean;
    orientation?: "horizontal" | "vertical";
    style?: React.CSSProperties;
}
export default class Stepper extends React.Component<StepperProps, {}>{
}