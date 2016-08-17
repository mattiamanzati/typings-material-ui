import * as React from 'react'

export interface TableRowProps {
  // <tr/> is element that get the 'other' properties
  className?: string;
  displayBorder?: boolean;
  hoverable?: boolean;
  hovered?: boolean;
  rowNumber?: number;
  selectable?: boolean;
  selected?: boolean;
  striped?: boolean;
  style?: React.CSSProperties;
}

export default class TableRow extends React.Component<TableRowProps, {}> {
}
