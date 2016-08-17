import * as React from 'react'

export interface StepProps {
    active?: boolean;
    completed?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
}
export default class Step extends React.Component<StepProps, {}>{
}