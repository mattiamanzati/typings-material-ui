import * as React from 'react';

export interface ToolbarProps {
    className?: string;
    noGutter?: boolean;
    style?: React.CSSProperties;
}

export default class Toolbar extends React.Component<ToolbarProps, {}> { }
