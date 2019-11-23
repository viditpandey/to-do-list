import React, { useState } from 'react'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const AddItem = ({updateItems, items}) => {
  const [item, setItem] = useState('')
  const handleAddItem = (e) => {
    if (item.trim() !== '') {
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

            <TextField
              autoFocus
              value={item}
              onChange={e => setItem(e.target.value)}
              label='item' />

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
