import * as React from 'react'
import {TextFieldCommonProps} from '../TextField'

export interface DatePickerProps extends TextFieldCommonProps {
  // <TextField/> is the element that get the 'other' properties
  DateTimeFormat?: Intl.DateTimeFormat;
  autoOk?: boolean;
  cancelLabel?: React.ReactNode;
  container?: 'dialog' | 'inline';
  defaultDate?: Date;
  disableYearSelection?: boolean;
  disabled?: boolean;
  firstDayOfWeek?: number;
  formatDate?: (date: Date) => string;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  mode?: 'portrait' | 'landscape';
  okLabel?: React.ReactNode;
  onChange?: (e: void, date: Date) => void; // e is always null
  onDismiss?: () => void;
  onShow?: () => void;
  shouldDisableDate?: (day: Date) => boolean;
  textFieldStyle?: React.CSSProperties;
  value?: Date;
  /** @deprecated use cancelLabel and okLabel instead */
  wordings?: { ok: string, cancel: string };
}

export default class DatePicker extends React.Component<DatePickerProps, {}> {
}
