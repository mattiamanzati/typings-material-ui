import * as __React from 'react'
import * as propTypes from '../propTypes'

export interface TooltipProps extends __React.Props<Tooltip> {
    className?: string;
    horizontalPosition?: propTypes.horizontal;
    label: any;
    show?: boolean;
    style?: __React.CSSProperties;
    touch?: boolean;
    verticalPosition?: propTypes.vertical;
}
export default class Tooltip extends __React.Component<TooltipProps, {}> { }