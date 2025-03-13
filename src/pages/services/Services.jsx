import React from 'react'
import "./Services.css"
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'

function Services() {
  return (
    <div>
      <Rotation>
        home <IoArrowForward /> services
      </Rotation>
      Services
    </div>
  )
}

export default Services