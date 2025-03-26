import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Address from './components/Address'
import Settings from './components/Settings'

function App() {
  const [activeTab, setActiveTab] = useState(0)


  const multiTabs = [
    {
      tabId: 1,
      tabName: 'Profile',
      tabComponent: <Profile activeTab={activeTab} setActiveTab={setActiveTab} />
    },
    {
      tabId: 2,
      tabName: 'Address',
      tabComponent: <Address />
    },
    {
      tabId: 3,
      tabName: 'Settings',
      tabComponent: <Settings />
    }
  ]

  return (
    <div className="multi-form-tabs">
      <div className="tabs">
        {multiTabs.map((data, index) => (
          <div className="tabs-heading" key={data.tabId}>
            <div>{index + 1}</div>
            <div>{data.tabName}</div>
          </div>
        ))}
      </div>
      <div className="tab-content">{multiTabs[activeTab].tabComponent}</div>
    </div>
  )
}

export default App
