import * as React from 'react'
import {origin} from '../propTypes'
import {PopoverAnimationProps} from './Popover'

export interface PopoverAnimationVerticalProps extends PopoverAnimationProps {
  className?: string;
  targetOrigin?: origin;
  zDepth?: number;
}

export default class PopoverAnimationVertical extends React.Component<PopoverAnimationVerticalProps, {}>{
}
