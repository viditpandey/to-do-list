import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: { flexGrow: 1 },
  flex: { flex: 1 },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function AppTitleBar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <div className={classes.flex}>to-do's</div>
          <a href='/logout'>logout</a>
          {/* <SearchIcon /> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppTitleBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppTitleBar)
