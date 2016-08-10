import * as React from 'react'

export interface GridListProps {
  cellHeight?: number;
  cols?: number;
  padding?: number;
  style?: React.CSSProperties;
}

export default class GridList extends React.Component<GridListProps, {}>{
}
