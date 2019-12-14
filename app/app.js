import AppTitleBar from './client/components/home/AppTitleBar'
import AppBody from './client/components/home/AppBody'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 12,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
class App extends React.Component {
  render () {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <AppTitleBar />
          <AppBody />
        </ThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
  )
