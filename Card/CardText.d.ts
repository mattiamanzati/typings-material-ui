import * as React from 'react'

export interface CardTextProps {
    actAsExpander?: boolean;
    color?: string;
    expandable?: boolean;
    style?: React.CSSProperties;
}
export default class CardText extends React.Component<CardTextProps, {}> {
}