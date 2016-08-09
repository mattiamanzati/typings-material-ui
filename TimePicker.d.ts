import * as React from 'react'
import {TextFieldCommonProps} from './TextField'

export interface TimePickerProps extends TextFieldCommonProps {
  // <TextField/> is element that get the 'other' properties
  autoOk?: boolean;
  cancelLabel?: React.ReactNode;
  defaultTime?: Date;
  dialogBodyStyle?: React.CSSProperties;
  dialogStyle?: React.CSSProperties;
  format?: 'ampm' | '24hr';
  okLabel?: React.ReactNode;
  onChange?: (e: void, time: Date) => void;
  onDismiss?: () => void;
  onShow?: () => void;
  pedantic?: boolean;
  textFieldStyle?: React.CSSProperties;
  value?: Date;
}

export default class TimePicker extends React.Component<TimePickerProps, {}> {
  /** @deprecated Use defaultTime instead. */
  getTime(): Date;
  /** @deprecated Use defaultTime instead. */
  setTime(time: Date): void;
  focus(): void;
  openDialog(): void;
}
