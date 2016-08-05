import Spacing from './spacing'
import zIndex from './zIndex'

export interface RawTheme {
    spacing?: Spacing;
    fontFamily?: string;
    palette?: ThemePalette;
}
export var lightBaseTheme: RawTheme;
export var darkBaseTheme: RawTheme;

export interface ThemePalette {
    primary1Color?: string;
    primary2Color?: string;
    primary3Color?: string;
    accent1Color?: string;
    accent2Color?: string;
    accent3Color?: string;
    textColor?: string;
    alternateTextColor?: string;
    canvasColor?: string;
    borderColor?: string;
    disabledColor?: string;
    pickerHeaderColor?: string;
    clockCircleColor?: string;
    shadowColor?: string;
}
export interface MuiTheme {
    spacing?: Spacing;
    fontFamily?: string;
    palette?: ThemePalette;
    isRtl?: boolean;
    userAgent?: string;
    zIndex?: zIndex;
    baseTheme?: RawTheme;
    rawTheme?: RawTheme;
    appBar?: {
        color?: string;
        textColor?: string;
        height?: number;
        titleFontWeight?: number;
        padding?: number;
    };
    avatar?: {
        color?: string;
        backgroundColor?: string;
        borderColor?: string;
    };
    badge?: {
        color?: string;
        textColor?: string;
        primaryColor?: string;
        primaryTextColor?: string;
        secondaryColor?: string;
        secondaryTextColor?: string;
        fontWeight?: number;
    };
    button?: {
        height?: number;
        minWidth?: number;
        iconButtonSize?: number;
    };
    card?: {
        titleColor?: string;
        subtitleColor?: string;
        fontWeight?: number;
    };
    cardMedia?: {
        color?: string;
        overlayContentBackground?: string;
        titleColor?: string;
        subtitleColor?: string;
    };
    cardText?: {
        textColor?: string;
    };
    checkbox?: {
        boxColor?: string;
        checkedColor?: string;
        requiredColor?: string;
        disabledColor?: string;
        labelColor?: string;
        labelDisabledColor?: string;
    };
    chip?: {
        backgroundColor?: string;
        deleteIconColor?: string;
        textColor?: string;
        fontSize?: number;
        fontWeight?: number;
        shadow?: string;
    };
    datePicker?: {
        color?: string;
        textColor?: string;
        calendarTextColor?: string;
        selectColor?: string;
        selectTextColor?: string;
        calendarYearBackgroundColor?: string;
    };
    dialog?: {
        titleFontSize?: number;
        bodyFontSize?: number;
        bodyColor?: string;
    };
    dropDownMenu?: {
        accentColor?: string;
    };
    enhancedButton?: {
        tapHighlightColor?: string;
    };
    flatButton?: {
        color?: string;
        buttonFilterColor?: string;
        disabledTextColor?: string;
        textColor?: string;
        primaryTextColor?: string;
        secondaryTextColor?: string;
        fontSize?: number;
        fontWeight?: number;
    };
    floatingActionButton?: {
        buttonSize?: number;
        miniSize?: number;
        color?: string;
        iconColor?: string;
        secondaryColor?: string;
        secondaryIconColor?: string;
        disabledTextColor?: string;
        disabledColor?: string;
    };
    gridTile?: {
        textColor?: string;
    };
    icon?: {
        color?: string;
        backgroundColor?: string;
    };
    inkBar?: {
        backgroundColor?: string;
    };
    drawer?: {
        width?: number;
        color?: string;
    };
    listItem?: {
        nestedLevelDepth?: number;
        secondaryTextColor?: string;
        leftIconColor?: string;
        rightIconColor?: string;
    };
    menu?: {
        backgroundColor?: string;
        containerBackgroundColor?: string;
    };
    menuItem?: {
        dataHeight?: number;
        height?: number;
        hoverColor?: string;
        padding?: number;
        selectedTextColor?: string;
        rightIconDesktopFill?: string;
    };
    menuSubheader?: {
        padding?: number;
        borderColor?: string;
        textColor?: string;
    };
    overlay?: {
        backgroundColor?: string;
    };
    paper?: {
        color?: string;
        backgroundColor?: string;
        zDepthShadows?: string[];
    };
    radioButton?: {
        borderColor?: string;
        backgroundColor?: string;
        checkedColor?: string;
        requiredColor?: string;
        disabledColor?: string;
        size?: number;
        labelColor?: string;
        labelDisabledColor?: string;
    };
    raisedButton?: {
        color?: string;
        textColor?: string;
        primaryColor?: string;
        primaryTextColor?: string;
        secondaryColor?: string;
        secondaryTextColor?: string;
        disabledColor?: string;
        disabledTextColor?: string;
        fontSize?: number;
        fontWeight?: number;
    };
    refreshIndicator?: {
        strokeColor?: string;
        loadingStrokeColor?: string;
    };
    ripple?: {
        color?: string;
    };
    slider?: {
        trackSize?: number;
        trackColor?: string;
        trackColorSelected?: string;
        handleSize?: number;
        handleSizeDisabled?: number;
        handleSizeActive?: number;
        handleColorZero?: string;
        handleFillColor?: string;
        selectionColor?: string;
        rippleColor?: string;
    };
    snackbar?: {
        textColor?: string;
        backgroundColor?: string;
        actionColor?: string;
    };
    subheader?: {
        color?: string;
        fontWeight?: number;
    };
    stepper?: {
        backgroundColor?: string;
        hoverBackgroundColor?: string;
        iconColor?: string;
        hoveredIconColor?: string;
        inactiveIconColor?: string;
        textColor?: string;
        disabledTextColor?: string;
        connectorLineColor?: string;
    };
    table?: {
        backgroundColor?: string;
    };
    tableFooter?: {
        borderColor?: string;
        textColor?: string;
    };
    tableHeader?: {
        borderColor?: string;
    };
    tableHeaderColumn?: {
        textColor?: string;
        height?: number;
        spacing?: number;
    };
    tableRow?: {
        hoverColor?: string;
        stripeColor?: string;
        selectedColor?: string;
        textColor?: string;
        borderColor?: string;
        height?: number;
    };
    tableRowColumn?: {
        height?: number;
        spacing?: number;
    };
    tabs?: {
        backgroundColor?: string;
        textColor?: string;
        selectedTextColor?: string;
    };
    textField?: {
        textColor?: string;
        hintColor?: string;
        floatingLabelColor?: string;
        disabledTextColor?: string;
        errorColor?: string;
        focusColor?: string;
        backgroundColor?: string;
        borderColor?: string;
    };
    timePicker?: {
        color?: string;
        textColor?: string;
        accentColor?: string;
        clockColor?: string;
        clockCircleColor?: string;
        headerColor?: string;
        selectColor?: string;
        selectTextColor?: string;
    };
    toggle?: {
        thumbOnColor?: string;
        thumbOffColor?: string;
        thumbDisabledColor?: string;
        thumbRequiredColor?: string;
        trackOnColor?: string;
        trackOffColor?: string;
        trackDisabledColor?: string;
        labelColor?: string;
        labelDisabledColor?: string;
        trackRequiredColor?: string;
    };
    toolbar?: {
        color?: string;
        hoverColor?: string;
        backgroundColor?: string;
        height?: number;
        titleFontSize?: number;
        iconColor?: string;
        separatorColor?: string;
        menuHoverColor?: string;
    };
    tooltip?: {
        color?: string;
        rippleBackgroundColor?: string;
    };
}