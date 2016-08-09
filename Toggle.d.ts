import * as React from 'react'
import {CommonEnhancedSwitchProps} from './internal/EnhancedSwitch'
import {ReactLink} from './commons'

export interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
    // <EnhancedSwitch/> is element that get the 'other' properties
    defaultToggled?: boolean;
    disabled?: boolean;
    elementStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    label?: string;
    labelPosition?: 'left' | 'right';
    labelStyle?: React.CSSProperties;
    onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
    rippleStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    thumbStyle?: React.CSSProperties;
    toggled?: boolean;
    trackStyle?: React.CSSProperties;
    valueLink?: ReactLink<boolean>;
}

export default class Toggle extends React.Component<ToggleProps, {}> {
    isToggled(): boolean;
    setToggled(newToggledValue: boolean): void;
}
