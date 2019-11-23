import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const MainTabs = ({selectedTab, setSelectedTab}) => {
  return (
    <Tabs value={selectedTab} onChange={(e, item) => setSelectedTab(item)} aria-label='simple tabs example'>
      <Tab label='Personal' id='personal' />
      <Tab label='Work' id='work' />
    </Tabs>
  )
}

export default MainTabs
