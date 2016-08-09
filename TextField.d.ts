import * as React from 'react'
import {TouchTapEventHandler} from './commons'

export interface TextFieldCommonProps {
  className?: string;
  disabled?: boolean;
  errorStyle?: React.CSSProperties;
  errorText?: React.ReactNode;
  floatingLabelFixed?: boolean;
  floatingLabelFocusStyle?: React.CSSProperties;
  floatingLabelStyle?: React.CSSProperties;
  floatingLabelText?: React.ReactNode;
  fullWidth?: boolean;
  hintStyle?: React.CSSProperties;
  hintText?: React.ReactNode;
  id?: string;
  inputStyle?: React.CSSProperties;
  name?: string;
  onBlur?: React.FocusEventHandler;
  /** @deprecated Use onKeyDown and check for keycode instead. */
  onEnterKeyDown?: React.KeyboardEventHandler;
  onFocus?: React.FocusEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onTouchTap?: TouchTapEventHandler;
  style?: React.CSSProperties;
  underlineDisabledStyle?: React.CSSProperties;
  underlineFocusStyle?: React.CSSProperties;
  underlineShow?: boolean;
  underlineStyle?: React.CSSProperties;
}

export interface TextFieldProps extends TextFieldCommonProps {
  defaultValue?: string | number;
  onChange?: React.FormEventHandler;
  max?: any;
  maxLength?: number;
  min?: any;
  multiLine?: boolean;
  rows?: number,
  rowsMax?: number,
  textareaStyle?: React.CSSProperties;
  type?: string;
  value?: string | number;
}

export default class TextField extends React.Component<TextFieldProps, {}> {
  blur(): void;
  focus(): void;
  select(): void;
  getValue(): string;
  getInputNode(): Element;
}
