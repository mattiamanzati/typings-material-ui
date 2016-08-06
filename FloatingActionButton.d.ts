import * as React from 'react'
import {SharedEnhancedButtonProps} from './internal/EnhancedButton'

export interface FloatingActionButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<FloatingActionButton> {
    // <EnhancedButton/> is the element that get the 'other' properties
    backgroundColor?: string;
    className?: string;
    disabled?: boolean;
    disabledColor?: string;
    href?: string;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    linkButton?: boolean;
    mini?: boolean;
    onMouseDown?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onTouchEnd?: React.TouchEventHandler;
    onTouchStart?: React.TouchEventHandler;
    secondary?: boolean;
    style?: React.CSSProperties;
    zDepth?: number;
}
export default class FloatingActionButton extends React.Component<FloatingActionButtonProps, {}> {
}