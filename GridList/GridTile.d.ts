import * as React from 'react'

export interface GridTileProps {
  actionIcon?: React.ReactElement<any>;
  actionPosition?: 'left' | 'right';
  cols?: number;
  containerElement?: React.ReactType | React.ReactElement<any>;
  rows?: number;
  style?: React.CSSProperties;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  titleBackground?: string;
  titlePosition?: 'top' | 'bottom';
}

export default class GridTile extends React.Component<GridTileProps, {}>{
}
