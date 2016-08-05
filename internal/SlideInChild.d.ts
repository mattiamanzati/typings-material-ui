import * as __React from 'react'

export interface SlideInChildProps extends __React.Props<SlideInChild> {
    direction?: string,
    enterDelay?: number;
    getLeaveDirection: Function;
    style?: __React.CSSProperties;
}
export default class SlideInChild extends __React.Component<SlideInChildProps, {}> { }