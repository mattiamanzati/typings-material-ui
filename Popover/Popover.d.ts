import * as React from 'react'
import {origin} from '../propTypes'

export interface PopoverAnimationProps {
  open: boolean;
  style?: React.CSSProperties;
}

export type PopoverAnimationType =
  React.ComponentClass<PopoverAnimationProps> |
  React.StatelessComponent<PopoverAnimationProps>;

export type PopoverCloseReason = 'clickAway' | 'offScreen';

export interface PopoverProps {
  anchorEl?: React.ReactInstance;
  anchorOrigin?: origin;
  animated?: boolean;
  animation?: PopoverAnimationType;
  autoCloseWhenOffScreen?: boolean;
  canAutoPosition?: boolean;
  className?: string;
  onRequestClose?: (reason: PopoverCloseReason) => void;
  open?: boolean;
  style?: React.CSSProperties;
  targetOrigin?: origin;
  useLayerForClickAway?: boolean;
  zDepth?: number;
}

export default class Popover extends React.Component<PopoverProps, {}>{
}
