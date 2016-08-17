import * as React from 'react'

export interface TableHeaderProps {
  adjustForCheckbox?: boolean;
  className?: string;
  displaySelectAll?: boolean;
  enableSelectAll?: boolean;
  style?: React.CSSProperties;
}

export default class TableHeader extends React.Component<TableHeaderProps, {}> {
}