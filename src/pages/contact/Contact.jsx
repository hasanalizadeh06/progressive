import React from 'react'
import './Contact.css'
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'

function Contact() {
  return (
    <div>
      <Rotation>
        home <IoArrowForward /> contact
      </Rotation>
      Contact
    </div>
  )
}

export default Contact