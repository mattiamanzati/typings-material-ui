import * as React from 'react'

export interface DividerProps extends React.Props<Divider> {
    className?: string;
    inset?: boolean;
    style?: React.CSSProperties;
}
export default class Divider extends React.Component<DividerProps, {}>{
}