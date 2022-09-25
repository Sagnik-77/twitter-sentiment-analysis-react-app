import React from 'react'
import Navbar from '../navbar'
import Statistics from './statistics'
import Graphs from './graphs'

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <Statistics/>
      <Graphs/>
    </div>
  )
}

export default Dashboard