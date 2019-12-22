import React, { useState } from 'react'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const addItemToList = (item={}) => {
  return fetch(`/api/list/${item.listId}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(item)
  })
  .then(res => res.json())
  .then(res => res)
  .catch(() => [])
}

const AddItem = ({updateItems, items, listId}) => {

  const [item, setItem] = useState('')

  const handleAddItem = (e) => {
    if (item && item.trim() !== '') {
      // save to db
      const createdItem = {text: item.toString(), listId}
      addItemToList(createdItem)
      items.push({text: item, date: new Date()})
      updateItems([...items])
      setItem('')
    }
  }

  return (
    <Paper style={{'backgroundColor': 'lightskyblue'}}>

      <List>
        <ListItem button>
          <ListItemText>
            <form onSubmit={(e) => {e.preventDefault(); handleAddItem(e)}}>
            <TextField
              autoFocus
              value={item}

              onChange={e => setItem(e.target.value)}
              label='item' />
            </form>
          </ListItemText>

          <Avatar onClick={handleAddItem}>
            <AddCircleTwoToneIcon />
          </Avatar>

        </ListItem>
      </List>

    </Paper>
  )
}

export default AddItem
