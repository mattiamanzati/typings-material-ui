import * as React from 'react'

export interface CardProps {
    actAsExpander?: boolean;
    containerStyle?: React.CSSProperties;
    expandable?: boolean;
    expanded?: boolean;
    initiallyExpanded?: boolean;
    onExpandChange?: (isExpanded: boolean) => void;
    showExpandableButton?: boolean;
    style?: React.CSSProperties;
}
export default class Card extends React.Component<CardProps, {}> {
}