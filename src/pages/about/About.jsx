import React from 'react'
import "./About.css"
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'
import img1 from "../../assets/about/1.png"

function About() {
  return (
    <div>
      <Rotation>
        home <IoArrowForward /> about us
      </Rotation>
      <div className="who-we-are">
        <div className="leftSide">
          <div className="textBlock">
            WHO WE ARE
          </div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="rightSide">
          <div className="header">
            Our Journey of Personal Growth and Development
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
          </div>
          <div className="statistics">
            <div className="stat">
              <div className="number">238+</div>
              <div className="text">HAPPY CLIENT</div>
            </div>
            <div className="stat">
              <div className="number">10+</div>
              <div className="text">YEAR EXPERIENCE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About