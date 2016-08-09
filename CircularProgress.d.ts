import * as React from 'react'

export interface CircularProgressProps extends React.Props<CircularProgress> {
    color?: string;
    innerStyle?: React.CSSProperties;
    max?: number;
    min?: number;
    mode?: 'determinate' | 'indeterminate';
    size?: number;
    style?: React.CSSProperties;
    value?: number;
}

export default class CircularProgress extends React.Component<CircularProgressProps, {}> {
}
