import * as React from 'react';
import Tab from './tab';

export interface TabTemplateExpectedProps {
    selected?: boolean;
}

export interface TabsProps {
    className?: string;
    contentContainerClassName?: string;
    contentContainerStyle?: React.CSSProperties;
    initialSelectedIndex?: number;
    inkBarStyle?: React.CSSProperties;
    onChange?: (value: any, e: React.FormEvent, tab: Tab) => void;
    style?: React.CSSProperties;
    tabItemContainerStyle?: React.CSSProperties;
    tabTemplate?: React.ComponentClass<any>;
    value?: any;
}

export default class Tabs extends React.Component<TabsProps, {}> { }
