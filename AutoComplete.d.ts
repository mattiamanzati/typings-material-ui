import * as React from 'react'
import * as propTypes from './propTypes'
import Divider from './Divider'
import * as Menus from './Menus'

export type AutoCompleteDataItem = { text: string, value: React.ReactNode } | string;
export type AutoCompleteDataSource = { text: string, value: React.ReactNode }[] | string[];
export interface AutoCompleteProps {
    anchorOrigin?: propTypes.origin;
    animated?: boolean;
    dataSource: AutoCompleteDataSource;
    disableFocusRipple?: boolean;
    errorStyle?: React.CSSProperties;
    errorText?: string;
    filter?: (searchText: string, key: string, item: AutoCompleteDataItem) => boolean;
    floatingLabelText?: string;
    fullWidth?: boolean;
    hintText?: string;
    listStyle?: React.CSSProperties;
    maxSearchResults?: number;
    menuCloseDelay?: number;
    menuProps?: any;
    menuStyle?: React.CSSProperties;
    onBlur?: React.FocusEventHandler;
    onFocus?: React.FocusEventHandler;
    onKeyDown?: React.KeyboardEventHandler;
    onNewRequest?: (chosenRequest: string, index: number) => void;
    onUpdateInput?: (searchText: string, dataSource: AutoCompleteDataSource) => void;
    open?: boolean;
    openOnFocus?: boolean;
    searchText?: string;
    style?: React.CSSProperties;
    targetOrigin?: propTypes.origin;
    /** @deprecated Instead, use openOnFocus */
    triggerUpdateOnFocus?: boolean;
}
export default class AutoComplete extends React.Component<AutoCompleteProps, {}> {
    static noFilter: () => boolean;
    static defaultFilter: (searchText: string, key: string) => boolean;
    static caseSensitiveFilter: (searchText: string, key: string) => boolean;
    static caseInsensitiveFilter: (searchText: string, key: string) => boolean;
    static levenshteinDistanceFilter(distanceLessThan: number): (searchText: string, key: string) => boolean;
    static fuzzyFilter: (searchText: string, key: string) => boolean;
    static Item: Menus.MenuItem;
    static Divider: Divider;
}