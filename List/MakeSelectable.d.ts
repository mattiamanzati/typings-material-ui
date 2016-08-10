import * as React from 'react'
import {TouchTapEvent} from '../commons'

export interface SelectableProps {
  onChange?: (e: TouchTapEvent, value: any) => void;
  selectedItemStyle?: React.CSSProperties;
  value?: any;
  /** @deprecated use the value and onChange property instead */
  valueLink?: { value: any; requestChange: (e: TouchTapEvent, value: any) => void };
}

export default function MakeSelectable<P extends {}>(
  component: React.ComponentClass<P>
): React.ComponentClass<P & SelectableProps>;
