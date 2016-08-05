import * as __React from 'react'

export interface ExpandTransitionProps extends __React.Props<ExpandTransition> {
    enterDelay?: number;
    loading?: boolean;
    open?: boolean;
    style?: __React.CSSProperties;
    transitionDelay?: number;
    transitionDuration?: number;
}
export default class ExpandTransition extends __React.Component<ExpandTransitionProps, {}> { }