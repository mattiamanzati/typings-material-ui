import * as React from 'react'

export interface BeforeAfterWrapperProps {
    afterElementType?: string;
    afterStyle?: React.CSSProperties;
    beforeElementType?: string;
    beforeStyle?: React.CSSProperties;
    elementType?: string;
    style?: React.CSSProperties;
}
export default class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps, {}> {
}