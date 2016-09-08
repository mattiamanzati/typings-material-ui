import * as React from 'react'
import {CommonEnhancedSwitchProps} from '../internal/EnhancedSwitch'

export interface RadioButtonProps extends CommonEnhancedSwitchProps<RadioButton> {
    // <EnhancedSwitch/> is element that get the 'other' properties
    checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
    disabled?: boolean;
    iconStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
    value?: any;
    label?: string;
}

export default class RadioButton extends React.Component<RadioButtonProps, {}> {
    isChecked(): boolean;
    getValue(): any;
}
