import * as React from 'react'
import {TouchTapEventHandler} from './commons'

export interface SharedEnhancedButtonProps<T> extends React.Props<T> {
    centerRipple?: boolean;
    disableFocusRipple?: boolean;
    disableKeyboardFocus?: boolean;
    disableTouchRipple?: boolean;
    focusRippleColor?: string;
    focusRippleOpacity?: number;
    keyboardFocused?: boolean;
    linkButton?: boolean;
    onBlur?: React.FocusEventHandler;
    onFocus?: React.FocusEventHandler;
    onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
    onKeyDown?: React.KeyboardEventHandler;
    onKeyUp?: React.KeyboardEventHandler;
    onTouchTap?: TouchTapEventHandler;
    onClick?: React.MouseEventHandler;
    style?: React.CSSProperties;
    tabIndex?: number;
    touchRippleColor?: string;
    touchRippleOpacity?: number;
    type?: string;
    containerElement?: React.ReactNode | string;
}