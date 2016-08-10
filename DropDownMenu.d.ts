import * as React from 'react'
import {TouchTapEvent} from './commons'

export interface DropDownMenuProps {
    // <div/> is the element that gets the 'other' properties
    animated?: boolean;
    animation?: React.ReactType;
    autoWidth?: boolean;
    className?: string;
    disabled?: boolean;
    iconStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    maxHeight?: number;
    menuStyle?: React.CSSProperties;
    onChange?: (event: TouchTapEvent, key: number, payload: any) => void;
    openImmediately?: boolean;
    style?: React.CSSProperties;
    underlineStyle?: React.CSSProperties;
    value?: any;
}

export default class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
}
