import * as React from 'react'

export interface FontIconProps extends React.HTMLAttributes {
    // <span/> is the element that get the 'other' properties
    color?: string;
    hoverColor?: string;
    style?: React.CSSProperties;
}

export default class FontIcon extends React.Component<FontIconProps, {}> {
}
