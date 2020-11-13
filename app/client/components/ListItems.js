import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { DEFAULT_BACKEND_URI } from '../constants/constants'

const removeListItems = (item={}) => {
  return fetch(`${DEFAULT_BACKEND_URI}/api/list/${item.listId}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
    body: JSON.stringify(item)
  })
  .then(res => res.json())
  .then(res => res)
  .catch(() => [])
}

const handleDeleteClick = ({updateItemMethod, allItems, item}) => {
  const updatedList = []
  let deletedItem
  allItems.forEach(a => {
    if (a.text === item.text && a.date === item.date) deletedItem = item
    else updatedList.push(a)
  })
  removeListItems(deletedItem)
  updateItemMethod(updatedList)
}

const RenderItems = ({items, updateItems}) => items.map((i, index, allItems) => <ListItem button key={`${index}_${i.text}_${i.date}`}>

  <ListItemText
    primary={i.text}
    secondary={`${i.date}`} />

  <Avatar
    onClick={e => handleDeleteClick({allItems, updateItemMethod: updateItems, item: i})}>
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
