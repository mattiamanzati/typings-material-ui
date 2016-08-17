import * as React from 'react'
import {origin} from '../propTypes'
import {PopoverAnimationProps} from './Popover'

export interface PopoverAnimationDefaultProps extends PopoverAnimationProps {
  className?: string;
  targetOrigin?: origin;
  zDepth?: number;
}

export default class PopoverAnimationDefault extends React.Component<PopoverAnimationDefaultProps, {}>{
}
