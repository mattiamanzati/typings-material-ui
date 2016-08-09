import * as React from 'react'

export interface RadioButtonGroupProps {
    className?: string;
    defaultSelected?: any;
    labelPosition?: 'left' | 'right';
    name: string;
    onChange?: (event: React.FormEvent, value: any) => void;
    style?: React.CSSProperties;
    valueSelected?: any;
}

export default class RadioButtonGroup extends React.Component<RadioButtonGroupProps, {}> {
    clearValue(): void;
    getSelectedValue(): any;
    setSelectedValue(newSelectionValue: any): void;
}
