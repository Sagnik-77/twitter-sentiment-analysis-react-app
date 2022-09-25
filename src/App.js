import React from 'react'

import {BrowserRouter ,Route, Routes } from 'react-router-dom'
//import Nav from './components/Nav'
import SignInOutContainer from './container'
import Dashboard from './components/DASHBOARD/dashboard'
import Admin from './components/USERMANAGEMENT/admin'
import Management from './components/USERMANAGEMENT/management'
function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
            <div>
                <Routes>
                    <Route eaxct path="/" element={<SignInOutContainer/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/admin/management" element={<Management/>} />
                </Routes>
            </div>
        </BrowserRouter>
        
    </div>
  )
}

export default App