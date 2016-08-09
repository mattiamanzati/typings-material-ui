import * as React from 'react'

export interface DialogProps extends React.DOMAttributes {
    actions?: React.ReactElement<any> | React.ReactElement<any>[];
    actionsContainerClassName?: string;
    actionsContainerStyle?: React.CSSProperties;
    autoDetectWindowHeight?: boolean;
    autoScrollBodyContent?: boolean;
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
    className?: string;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    modal?: boolean;
    onRequestClose?: (buttonClicked: boolean) => void;
    open: boolean;
    overlayClassName?: string;
    overlayStyle?: React.CSSProperties;
    repositionOnUpdate?: boolean;
    style?: React.CSSProperties;
    title?: React.ReactNode;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
}

export default class Dialog extends React.Component<DialogProps, {}> {
}
