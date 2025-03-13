import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from '../../pages/main/Main'
import Blogs from '../../pages/blogs/Blogs'
import About from '../../pages/about/About'
import Services from '../../pages/services/Services'
import Faq from '../../pages/faq/Faq'
import Contact from '../../pages/contact/Contact'
import Register from '../../pages/register/Register'
import PrivacyPolicy from '../../pages/privacy-policy/PrivacyPolicy'
import HelpCenter from '../../pages/help-center/HelpCenter'
import TermConditions from '../../pages/terms-conditions/TermConditions'

function AppRouter() {
  const location = useLocation()
  return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/help-center" element={<HelpCenter/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/terms-conditions" element={<TermConditions/>}/>
          <Route path="*" element={<>404 Not Found</>}/>
        </Routes>
    )
}

export default AppRouter