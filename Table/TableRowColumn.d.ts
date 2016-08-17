import * as React from 'react'

export interface TableRowColumnProps {
  // <td/> is element that get the 'other' properties
  className?: string;
  style?: React.CSSProperties;

  // useful attributes passed to <td/>
  colSpan?: number;
}

export default class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
}
