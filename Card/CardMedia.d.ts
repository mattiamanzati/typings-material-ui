import * as React from 'react'


export interface CardMediaProps extends React.Props<CardMedia> {
    actAsExpander?: boolean;
    expandable?: boolean;
    mediaStyle?: React.CSSProperties;
    overlay?: React.ReactNode;
    overlayContainerStyle?: React.CSSProperties;
    overlayContentStyle?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}
export default class CardMedia extends React.Component<CardMediaProps, {}> {
}