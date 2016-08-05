import {MuiTheme} from './MuiTheme'
import * as React from 'react'

interface MuiThemeProviderProps extends React.Props<MuiThemeProvider> {
    muiTheme?: MuiTheme;
}
export default class MuiThemeProvider extends React.Component<MuiThemeProviderProps, {}>{
}