import * as React from 'react'
import * as propTypes from './propTypes'
import {SharedEnhancedButtonProps} from './internal/EnhancedButton'

export interface IconButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<IconButton> {
    // <EnhancedButton/> is the element that get the 'other' properties
    className?: string;
    disableTouchRipple?: boolean;
    disabled?: boolean;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    onBlur?: React.FocusEventHandler;
    onFocus?: React.FocusEventHandler;
    onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onMouseOut?: React.MouseEventHandler;
    style?: React.CSSProperties;
    tooltip?: string;
    tooltipPosition?: propTypes.cornersAndCenter;
    tooltipStyles?: React.CSSProperties;
    touch?: boolean;
}
export default class IconButton extends React.Component<IconButtonProps, {}> {
}