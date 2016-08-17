import * as React from 'react'
import {SharedEnhancedButtonProps} from '../internal/EnhancedButton'

export interface StepButtonProps extends SharedEnhancedButtonProps<StepButton> {
    active?: boolean;
    completed?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode | string | number;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    onTouchStart?: React.TouchEventHandler;
    style?: React.CSSProperties;
}
export default class StepButton extends React.Component<StepButtonProps, {}>{
}