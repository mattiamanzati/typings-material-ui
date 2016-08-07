import * as React from 'react';

export interface ToolbarGroupProps {
    className?: string;
    firstChild?: boolean;
    float?: "left" | "right";
    lastChild?: boolean;
    style?: React.CSSProperties;
}

export default class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> { }
