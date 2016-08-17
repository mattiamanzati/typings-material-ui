import * as React from 'react'

export interface StepContentProps {
    active?: boolean;
    last?: boolean;
    style?: React.CSSProperties;
}
export default class StepContent extends React.Component<StepContentProps, {}>{
}