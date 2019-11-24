import AppTitleBar from './client/components/home/AppTitleBar'
import AppBody from './client/components/home/AppBody'
var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')

class App extends React.Component {
  render () {
    return (
      <div>
        <AppTitleBar />
        <AppBody />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
  )
