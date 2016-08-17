import * as React from 'react'

export interface TableProps {
  allRowsSelected?: boolean;
  bodyStyle?: React.CSSProperties;
  className?: string;
  fixedFooter?: boolean;
  fixedHeader?: boolean;
  footerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  height?: string;
  multiSelectable?: boolean;
  onCellClick?: (row: number, column: number) => void;
  onCellHover?: (row: number, column: number) => void;
  onCellHoverExit?: (row: number, column: number) => void;
  onRowHover?: (row: number) => void;
  onRowHoverExit?: (row: number) => void;
  onRowSelection?: (selectedRows: number[] | string) => void;
  selectable?: boolean;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export default class Table extends React.Component<TableProps, {}> {
}
