import * as React from 'react'
import {SharedEnhancedButtonProps} from './internal/EnhancedButton'

export interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
    // <EnhancedButton/> is the element that get the 'other' properties
    backgroundColor?: string;
    className?: string;
    disabled?: boolean;
    disabledBackgroundColor?: string;
    disabledLabelColor?: string;
    fullWidth?: boolean;
    href?: string;
    icon?: React.ReactNode;
    label?: React.ReactNode;
    labelColor?: string;
    labelPosition?: "before" | "after";
    labelStyle?: React.CSSProperties;
    linkButton?: boolean;
    onMouseDown?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onTouchEnd?: React.TouchEventHandler;
    onTouchStart?: React.TouchEventHandler;
    primary?: boolean;
    rippleStyle?: React.CSSProperties;
    secondary?: boolean;
    style?: React.CSSProperties;
}
export default class RaisedButton extends React.Component<RaisedButtonProps, {}> {
}