import React from 'react'
import './Blogs.css'
import Rotation from '../../components/rotation/Rotation'
import { IoArrowForward } from 'react-icons/io5'
import { RxArrowTopRight } from 'react-icons/rx'


function Blogs() {
  return (
    <div className='blogs-page'>
      <Rotation>
        home <IoArrowForward /> blogs
      </Rotation>      
      <div className="header">
        LOREM IMPUS
      </div>
      <div className="content">
        <div className="psychologists">
          <div className="psychologist-card">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className='linker'/>
            </div>
          </div>
          <div className="psychologist-card small">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className='linker'/>
              </div>
          </div>
          <div className="psychologist-card">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className='linker'/>
              </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="psychologists">
          <div className="psychologist-card small">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className='linker'/>
            </div>
          </div>
          <div className="psychologist-card">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className='linker'/>
              </div>
          </div>
          <div className="psychologist-card small">
            <div className="info">
              <div className="name">LOREM IPSUM</div>
              <div className="title">27.02.2025</div>
              <RxArrowTopRight className='linker'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs