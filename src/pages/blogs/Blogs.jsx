import React from 'react'
import './Blogs.css'
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'


function Blogs() {
  return (
    <div>
      <Rotation>
        home <IoArrowForward /> blogs
      </Rotation>      
      Blogs
    </div>
  )
}

export default Blogs