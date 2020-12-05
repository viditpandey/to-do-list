/* global fetch */
import React, { useState, useEffect } from 'react'
import Additem from '../AddItem'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab'
import ListItems from '../ListItems'
import MainTabs from '../MainTabs'

import { makeStyles } from '@material-ui/core/styles'
import { DEFAULT_BACKEND_URI } from '../../constants/constants'

const useFloatingButtonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    float: 'right',
    position: 'relative',
    minHeight: 200,
  },
  // fab: {
  //   position: 'absolute',
  //   bottom: theme.spacing(2),
  //   right: theme.spacing(2),
  // },
  customColorOpen: {
    color: theme.palette.common.white,
    backgroundColor: 'lightskyblue',
    '&:hover': {
      backgroundColor: 'skyblue',
    },
  },
  customColorClose: {
    color: theme.palette.common.white,
    backgroundColor: 'lightpink',
    '&:hover': {
      backgroundColor: 'pink',
    },
  },
}))

const TabItems = ['Personal', 'Work']

const fetchUserListItems = (selectedTab) => {
  return fetch(`${DEFAULT_BACKEND_URI}/api/list/${TabItems[selectedTab]}`)
  .then(res => res.json())
  .then(res => res)
  .catch(() => [])
}

function AppBody (props) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [items, updateItems] = useState([])
  const [renderAddItem, setRenderAddItem] = useState(false)

  useEffect(() => {
    fetchUserListItems(selectedTab)
    .then(response => updateItems(response.data))
  }, [selectedTab])

  return (
    <div key='app-body' style={{'margin': '15px 50px', height: '90%'}}>
      <MainTabs
        TabItems={TabItems}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab} />

      <div style={{'margin': '15px'}} />


      {renderAddItem && <Additem items={items} updateItems={updateItems} listId={TabItems[selectedTab]} />}

      <ListItems items={items} updateItems={updateItems} />

      <ToggleAddItemActionButton open={renderAddItem} onClick={e => setRenderAddItem(!renderAddItem)} />
    </div>
  )
}

const ToggleAddItemActionButton = props => {
  const classes = useFloatingButtonStyles()
  const IconToRender = props.open ? CloseIcon : AddIcon
  const classForIcon = props.open ? classes.customColorClose : classes.customColorOpen
  return (
    <div className={classes.root} styles={{ float: 'right' }}>
      <Fab color="inherit" className={classForIcon} aria-label="add">
        <IconToRender onClick={props.onClick} />
      </Fab> 
  </div>
  )
}

export default AppBody
