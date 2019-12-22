import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const RenderItems = ({items, updateItems}) => items.map((i, index, allItems) => <ListItem button key={`${index}_${i.text}_${i.date}`}>

  <ListItemText
    primary={i.text}
    secondary={`${i.date}`} />

  <Avatar
    onClick={e => updateItems(allItems.filter(a => a.text !== i.text || a.date !== i.date))}>
    <DeleteIcon />
  </Avatar>

</ListItem>)

const ListItems = ({items = [], updateItems = () => {}}) => {
  return (
    <List component='nav' aria-label='secondary mailbox folders'>

      <RenderItems items={items} updateItems={updateItems} />

    </List>
  )
}

export default ListItems
