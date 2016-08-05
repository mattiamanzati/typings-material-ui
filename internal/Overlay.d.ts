import * as __React from 'react'

export interface OverlayProps extends __React.Props<Overlay> {
    autoLockScrolling?: boolean;
    show: boolean;
    style?: __React.CSSProperties;
    transitionEnabled?: boolean;
}

export default class Overlay extends __React.Component<OverlayProps, {}> { }