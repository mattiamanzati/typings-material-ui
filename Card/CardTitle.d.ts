import * as React from 'react'

export interface CardTitleProps {
    actAsExpander?: boolean;
    expandable?: boolean;
    showExpandableButton?: boolean;
    style?: React.CSSProperties;
    subtitle?: React.ReactNode;
    subtitleColor?: string;
    subtitleStyle?: React.CSSProperties;
    title?: React.ReactNode;
    titleColor?: string;
    titleStyle?: React.CSSProperties;
}
export default class CardTitle extends React.Component<CardTitleProps, {}> {
}