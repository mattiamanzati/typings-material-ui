import * as React from 'react'

export interface AvatarProps extends React.Props<Avatar> {
    backgroundColor?: string;
    className?: string;
    color?: string;
    icon?: React.ReactElement<any>;
    size?: number;
    src?: string;
    style?: React.CSSProperties;
}
export default class Avatar extends React.Component<AvatarProps, {}> {
}