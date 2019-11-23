import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const MainTabs = ({selectedTab, setSelectedTab, TabItems = []}) => {
  return (
    <Tabs value={selectedTab} onChange={(e, item) => setSelectedTab(item)} aria-label='simple tabs example'>
      {TabItems.map(tabItem => <Tab key={tabItem} label={tabItem} id={tabItem} />)}
    </Tabs>
  )
}

export default MainTabs
