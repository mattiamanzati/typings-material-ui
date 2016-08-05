import * as React from 'react'
import {TouchTapEvent, ReactLink} from './commons'
import * as propTypes from './propTypes'
import MenuItem from './MenuItem'

export interface MenuProps extends React.Props<Menu> {
    // <List/> is the element that get the 'other' properties
    /** @deprecated Instead, use a Popover */
    animated?: boolean;
    autoWidth?: boolean;
    desktop?: boolean;
    disableAutoFocus?: boolean;
    initiallyKeyboardFocused?: boolean;
    listStyle?: React.CSSProperties;
    maxHeight?: number;
    multiple?: boolean;
    onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
    onEscKeyDown?: React.KeyboardEventHandler;
    onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
    onKeyDown?: React.KeyboardEventHandler;
    /** @deprecated Instead, use a Popover */
    openDirection?: propTypes.corners;
    selectedMenuItemStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    value?: any | any[];
    /** @deprecated valueLink is a bad thing bro. */
    valueLink?: ReactLink<any | any[]>;
    width?: string | number;
    /** @deprecated wrap it in `Paper` or another component that provides zDepth instead */
    zDepth?: number;
}
export default class Menu extends React.Component<MenuProps, {}>{
}