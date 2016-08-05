import * as __React from 'react'


export interface RenderToLayerProps extends __React.Props<RenderToLayer> {
    componentClickAway?: Function;
    open: boolean;
    render: Function;
    useLayerForClickAway?: boolean;
}
export default class RenderToLayer extends __React.Component<RenderToLayerProps, {}> { }