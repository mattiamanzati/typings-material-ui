import * as React from 'react'

export interface LinearProgressProps extends React.Props<LinearProgress> {
    color?: string;
    max?: number;
    min?: number;
    mode?: 'determinate' | 'indeterminate';
    style?: React.CSSProperties;
    value?: number;
}

export default class LinearProgress extends React.Component<LinearProgressProps, {}> {
}
