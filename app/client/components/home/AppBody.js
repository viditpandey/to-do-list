import React, { useState } from 'react'
import Additem from '../AddItem'
import ListItems from '../ListItems'
import MainTabs from '../MainTabs'

function AppBody (props) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [items, updateItems] = useState([])
  return (
    <div style={{'margin': '15px 50px'}}>
      <MainTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div style={{'margin': '15px'}} />

      <Additem items={items} updateItems={updateItems} />

      <ListItems items={items} updateItems={updateItems} />

    </div>
  )
}

export default AppBody
