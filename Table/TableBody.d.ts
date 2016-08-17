import * as React from 'react'

export interface TableBodyProps {
  className?: string;
  deselectOnClickaway?: boolean;
  displayRowCheckbox?: boolean;
  preScanRows?: boolean;
  showRowHover?: boolean;
  stripedRows?: boolean;
  style?: React.CSSProperties;
}

export default class TableBody extends React.Component<TableBodyProps, {}> {
}
