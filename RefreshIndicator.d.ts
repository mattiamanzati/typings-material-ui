import * as React from 'react'

export interface RefreshIndicatorProps {
    color?: string;
    left: number;
    loadingColor?: string;
    percentage?: number;
    size?: number;
    status?: 'ready' | 'loading' | 'hide';
    style?: React.CSSProperties;
    top: number;
}

export default class RefreshIndicator extends React.Component<RefreshIndicatorProps, {}> {
}
