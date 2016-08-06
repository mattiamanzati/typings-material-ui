import * as React from 'react'

export interface CardHeaderProps {
    actAsExpander?: boolean;
    avatar?: React.ReactNode;
    expandable?: boolean;
    showExpandableButton?: boolean;
    style?: React.CSSProperties;
    subtitle?: React.ReactNode;
    subtitleColor?: string;
    subtitleStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    title?: React.ReactNode;
    titleColor?: string;
    titleStyle?: React.CSSProperties;
}
export default class CardHeader extends React.Component<CardHeaderProps, {}> {
}