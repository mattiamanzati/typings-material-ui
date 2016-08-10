import * as React from 'react'

export type DrawerChangeReason = 'swipe' | 'clickaway' | 'escape';

export interface DrawerProps {
    className?: string;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    disableSwipeToOpen?: boolean;
    docked?: boolean;
    onRequestChange?: (opening: boolean, reason: DrawerChangeReason) => void;
    open?: boolean;
    openSecondary?: boolean;
    overlayClassName?: string;
    overlayStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    swipeAreaWidth?: number;
    width?: number;
    zDepth?: number;
}

export default class Drawer extends React.Component<DrawerProps, {}> {
}
