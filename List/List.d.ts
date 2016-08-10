import * as React from 'react'

export interface ListProps {
  // <Paper/> is the element that get the 'other' properties
  /** @deprecated nest the Subheader component directly inside the List instead */
  insetSubheader?: boolean;
  style?: React.CSSProperties;
  /** @deprecated nest the Subheader component directly inside the List instead */
  subheader?: string;
  /** @deprecated nest the Subheader component directly inside the List instead */
  subheaderStyle?: React.CSSProperties;
  /** @deprecated wrap it in `Paper` or another component that provides zDepth instead */
  zDepth?: number;
}

export default class List extends React.Component<ListProps, {}> {
}
