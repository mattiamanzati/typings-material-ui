import * as React from 'react';
import {SharedEnhancedButtonProps} from '../internal/EnhancedButton';

export interface TabProps extends SharedEnhancedButtonProps<Tab> {
    className?: string;
    icon?: React.ReactNode;
    label?: React.ReactNode;
    onActive?: (tab: Tab) => void;
    style?: React.CSSProperties;
    value?: any;
    disabled?: boolean;
}

export default class Tab extends React.Component<TabProps, {}> { }
