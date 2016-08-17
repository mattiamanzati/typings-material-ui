import * as React from 'react'

export interface TableHeaderColumnProps {
  // <th/> is element that get the 'other' properties
  className?: string;
  columnNumber?: number;
  style?: React.CSSProperties;
  tooltip?: string;
  tooltipStyle?: React.CSSProperties;

  // useful attributes passed to <th/>
  colSpan?: number;
}

export default class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
}
