import * as React from 'react'

export interface CardExpandableProps {
    expanded?: boolean;
    onExpanding?: (isExpanded: boolean) => void;
    style?: React.CSSProperties;
}
export default class CardExpandable extends React.Component<CardExpandableProps, {}> {
}