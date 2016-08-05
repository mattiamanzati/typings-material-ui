import * as __React from 'react'
import * as propTypes from '../propTypes'

export interface SlideInProps extends __React.Props<SlideIn> {
    childStyle?: __React.CSSProperties;
    direction?: propTypes.direction;
    enterDelay?: number;
    style?: __React.CSSProperties;
}
export default class SlideIn extends __React.Component<SlideInProps, {}> { }