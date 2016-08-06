import * as React from 'react'

export interface CardTextProps extends React.Props<CardText> {
    actAsExpander?: boolean;
    color?: string;
    expandable?: boolean;
    style?: React.CSSProperties;
}
export default class CardText extends React.Component<CardTextProps, {}> {
}