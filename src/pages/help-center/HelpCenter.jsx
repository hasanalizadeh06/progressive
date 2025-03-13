import React from 'react'
import "./HelpCenter.css"
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'

function HelpCenter() {
  return (
    <div>
      <Rotation>
        home <IoArrowForward /> help center
      </Rotation>
      HelpCenter
    </div>
  )
}

export default HelpCenter