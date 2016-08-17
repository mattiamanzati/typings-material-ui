import * as React from 'react'
import {TouchTapEvent} from './commons'

export interface SelectFieldProps {
  // <DropDownMenu/> is the element that get the 'other' properties
  autoWidth?: boolean;
  disabled?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  floatingLabelFixed?: boolean;
  floatingLabelStyle?: React.CSSProperties;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  hintStyle?: React.CSSProperties;
  hintText?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  id?: string;
  labelStyle?: React.CSSProperties;
  onBlur?: React.FocusEventHandler;
  onChange?: (event: TouchTapEvent, key: number, payload: any) => void;
  onFocus?: React.FocusEventHandler;
  style?: React.CSSProperties;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineStyle?: React.CSSProperties;
  value?: any;

  // useful attributes passed to <DropDownMenu/>
  className?: string;
  maxHeight?: number;
  menuStyle?: any;
  openImmediately?: boolean;
}

export default class SelectField extends React.Component<SelectFieldProps, {}> {
}
