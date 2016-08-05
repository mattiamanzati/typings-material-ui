import * as React from 'react'

// ReactLink is from "react/addons"
export interface ReactLink<T> {
    value: T;
    requestChange(newValue: T): void;
}

// What's common between React.TouchEvent and React.MouseEvent
export interface TouchTapEvent extends React.SyntheticEvent {
    altKey: boolean;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

// What's common between React.TouchEventHandler and React.MouseEventHandler
export interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> { }