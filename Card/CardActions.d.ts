import * as React from 'react'

export interface CardActionsProps {
    actAsExpander?: boolean;
    expandable?: boolean;
    showExpandableButton?: boolean;
    style?: React.CSSProperties;
}
export default class CardActions extends React.Component<CardActionsProps, {}> {
}