import * as React from 'react'

export interface DatePickerDialogProps {
  DateTimeFormat?: Intl.DateTimeFormat;
  animation?: React.ReactType;
  autoOk?: boolean;
  cancelLabel?: React.ReactNode;
  container?: 'dialog' | 'inline';
  containerStyle?: React.CSSProperties;
  disableYearSelection?: boolean;
  firstDayOfWeek?: number;
  initialDate?: Date;
  locale?: string;
  maxDate?: Date;
  minDate?: Date;
  mode?: 'portrait' | 'landscape';
  okLabel?: React.ReactNode;
  onAccept?: (d: Date) => void;
  onDismiss?: () => void;
  onShow?: () => void;
  open?: boolean;
  shouldDisableDate?: (day: Date) => boolean;
  style?: React.CSSProperties;
  wordings?: { ok: string, cancel: string };
}

export default class DatePickerDialog extends React.Component<DatePickerDialogProps, {}> {
}
