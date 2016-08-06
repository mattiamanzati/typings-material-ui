import * as React from 'react'
import * as propTypes from './propTypes'
import {TouchTapEvent, TouchTapEventHandler, ReactLink} from './commons'
import MenuItem from './MenuItem'
import {IconButtonProps} from './IconButton'

export interface IconMenuProps {
    // <Menu/> is the element that get the 'other' properties
    anchorOrigin?: propTypes.origin;
    className?: string;
    iconButtonElement: React.ReactElement<IconButtonProps>;
    iconStyle?: React.CSSProperties;
    menuStyle?: React.CSSProperties;
    onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
    onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
    onMouseDown?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onRequestChange?: (opening: boolean, reason: string) => void;
    onTouchTap?: TouchTapEventHandler;
    open?: boolean;
    style?: React.CSSProperties;
    targetOrigin?: propTypes.origin;
    touchTapCloseDelay?: number;
    useLayerForClickAway?: boolean;

    animated?: boolean;
    autoWidth?: boolean;
    desktop?: boolean;
    listStyle?: React.CSSProperties;
    maxHeight?: number;
    multiple?: boolean;
    onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
    onKeyDown?: React.KeyboardEventHandler;
    /** @deprecated Instead, use a Popover */
    openDirection?: string;
    selectedMenuItemStyle?: React.CSSProperties;
    value?: any | any[];
    valueLink?: ReactLink<any | any[]>;
    width?: string | number;
}
export default class IconMenu extends React.Component<IconMenuProps, {}> {
}