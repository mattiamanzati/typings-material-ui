import * as React from 'react'
import {TouchTapEventHandler} from '../commons'
import {SharedEnhancedButtonProps} from '../internal/EnhancedButton'

export interface ListItemProps extends SharedEnhancedButtonProps<ListItem> {
  // <EnhancedButton/> is the element that get the 'other' properties
  autoGenerateNestedIndicator?: boolean;
  disableKeyboardFocus?: boolean;
  disabled?: boolean;
  initiallyOpen?: boolean;
  innerDivStyle?: React.CSSProperties;
  insetChildren?: boolean;
  leftAvatar?: React.ReactElement<any>;
  leftCheckbox?: React.ReactElement<any>;
  leftIcon?: React.ReactElement<any>;
  nestedItems?: React.ReactElement<ListItemProps>[];
  nestedLevel?: number;
  nestedListStyle?: React.CSSProperties;
  onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onNestedListToggle?: (item: ListItem) => void;
  onTouchStart?: React.TouchEventHandler;
  onTouchTap?: TouchTapEventHandler;
  primaryText?: React.ReactNode;
  primaryTogglesNestedList?: boolean;
  rightAvatar?: React.ReactElement<any>;
  rightIcon?: React.ReactElement<any>;
  rightIconButton?: React.ReactElement<any>;
  rightToggle?: React.ReactElement<any>;
  secondaryText?: React.ReactNode;
  secondaryTextLines?: number; // 1 or 2
  style?: React.CSSProperties;
}

export default class ListItem extends React.Component<ListItemProps, {}> {
}
