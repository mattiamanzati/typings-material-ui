import * as React from 'react'

export type SnackbarCloseReason = 'timeout' | 'clickaway';

export interface SnackbarProps {
  action?: React.ReactNode;
  autoHideDuration?: number;
  bodyStyle?: React.CSSProperties;
  className?: string;
  message: React.ReactNode;
  onActionTouchTap?: React.TouchEventHandler;
  onRequestClose: (reason: SnackbarCloseReason) => void;
  open: boolean;
  style?: React.CSSProperties;
}

export default class Snackbar extends React.Component<SnackbarProps, {}> {
}
