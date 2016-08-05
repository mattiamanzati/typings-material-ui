import * as React from 'react'
import {TouchTapEventHandler} from './commons'

export interface MenuItemProps extends React.HTMLAttributes, React.Props<MenuItem> {
    // <ListItem/> is the element that get the 'other' properties
    checked?: boolean;
    desktop?: boolean;
    disabled?: boolean;
    focusState?: string; // 'none', 'focused', or 'keyboard-focused'
    innerDivStyle?: React.CSSProperties;
    insetChildren?: boolean;
    leftIcon?: React.ReactElement<any>;
    menuItems?: React.ReactNode;
    onTouchTap?: TouchTapEventHandler;
    rightIcon?: React.ReactElement<any>;
    secondaryText?: React.ReactNode;
    style?: React.CSSProperties;
    value?: any;

    // useful attributes passed to <ListItem/>
    primaryText?: React.ReactNode;
    secondaryTextLines?: number; // 1 or 2
}
export default class MenuItem extends React.Component<MenuItemProps, {}>{
}