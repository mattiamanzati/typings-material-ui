 import * as React from 'react'
 
 export default function muiThemeable<TComponent extends React.Component<P, S>, P, S>(): (component: TComponent) => TComponent;