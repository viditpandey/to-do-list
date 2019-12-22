/* global fetch */
import React, { useState, useEffect } from 'react'
import Additem from '../AddItem'
import ListItems from '../ListItems'
import MainTabs from '../MainTabs'

const TabItems = ['Personal', 'Work']

const fetchUserListItems = (selectedTab) => {
  return fetch(`/api/list/${TabItems[selectedTab]}`)
  .then(res => res.json())
  .then(res => res)
  .catch(() => [])
}

function AppBody (props) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [items, updateItems] = useState([])

  useEffect(() => {
    fetchUserListItems(selectedTab)
    .then(response => updateItems(response.data))
  }, [selectedTab])

  return (
    <div style={{'margin': '15px 50px'}}>
      <MainTabs
        TabItems={TabItems}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab} />

      <div style={{'margin': '15px'}} />

      <Additem items={items} updateItems={updateItems} listId={TabItems[selectedTab]} />

      <ListItems items={items} updateItems={updateItems} />

    </div>
  )
}

export default AppBody
