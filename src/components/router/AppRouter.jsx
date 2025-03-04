import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from '../../pages/main/Main'

function AppRouter() {
  const location = useLocation()
  return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main/>}/>
          <Route path="/about-us" element={<Main/>}/>
          <Route path="/services" element={<Main/>}/>
          <Route path="/blog" element={<Main/>}/>
          <Route path="/faq" element={<Main/>}/>
          <Route path="/contact" element={<Main/>}/>
          <Route path="/register" element={<Main/>}/>
          <Route path="*" element={<>404 Not Found</>}/>
        </Routes>
    )
}

export default AppRouter