import * as React from 'react'

export interface DividerProps {
    className?: string;
    inset?: boolean;
    style?: React.CSSProperties;
}
export default class Divider extends React.Component<DividerProps, {}>{
}