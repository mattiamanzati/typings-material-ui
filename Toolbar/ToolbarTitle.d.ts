import * as React from 'react';

export interface ToolbarTitleProps extends React.HTMLAttributes {
    className?: string;
    style?: React.CSSProperties;
    text?: string;
}

export default class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> { }
