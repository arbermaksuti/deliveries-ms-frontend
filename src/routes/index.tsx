import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import React from 'react'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
