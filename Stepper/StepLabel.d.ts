import * as React from 'react'

export interface StepLabelProps {
    active?: boolean;
    completed?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode | string | number;
    style?: React.CSSProperties;
}
export default class StepLabel extends React.Component<StepLabelProps, {}>{
}