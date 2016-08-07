import * as React from 'react'
import {CommonEnhancedSwitchProps} from './internal/EnhancedSwitch'
import {ReactLink} from './commons'

export interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
    // <EnhancedSwitch/> is element that get the 'other' properties
    checked?: boolean;
    checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
    defaultChecked?: boolean;
    disabled?: boolean;
    iconStyle?: React.CSSProperties;
    labelPosition?: "left" | "right";
    labelStyle?: React.CSSProperties;
    onCheck?: (event: React.MouseEvent, checked: boolean) => void;
    style?: React.CSSProperties;
    uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
    valueLink?: ReactLink<boolean>;
}
export default class Checkbox extends React.Component<CheckboxProps, {}> {
}