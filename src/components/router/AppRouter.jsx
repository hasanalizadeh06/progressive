import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from '../../pages/main/Main'

function AppRouter() {
  const location = useLocation()
  return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main/>}/>
        </Routes>
    )
}

export default AppRouter