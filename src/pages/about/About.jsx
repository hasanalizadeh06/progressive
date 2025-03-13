import React from 'react'
import "./About.css"
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'


function About() {
  return (
    <div>
      <Rotation>
        home <IoArrowForward /> about us
      </Rotation>
      About
    </div>
  )
}

export default About