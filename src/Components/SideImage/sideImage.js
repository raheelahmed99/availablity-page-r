import React, { useState } from 'react'
import calendarImg from '../../Images/Group 308.png'
import headingImg from '../../Images/Group 310.png'
import smileyTeacherImg from '../../Images/smiley-teacher-holding-tablet 1.png'
import messageImg from '../../Images/Group 278.png' 
import './sideImage.css'
const SideImage = () => {

  return (
    <>
      <div className='main'>
        <div className='sideImageDiv'>

          <div className='headingImgDiv'>
            <img src={headingImg} width={'200px'} height={'70px'} />
          </div>
          <div className='calendarImg'>
            <img src={calendarImg} width={'400px'} height={'370px'} />
          </div>
          <div className="messageImg">
            <img src={messageImg} width={'130px'} height={'130px'}/>
          </div>
          <div className='smileyTeacherImg'>
            <img src={smileyTeacherImg} width={'400px'} height={'500px'} />
          </div>

        </div>

        <div className='availability-sec'>
          <h2>Availability</h2>
          <p>Control your availability by selecting these slots.</p>
          <div className='selection'>
            <form>
              <div className="timeSeletion">
                <label for="mon-time">
                  <label class="switch">
                  <input type="checkbox" checked/>
                  <span class="slider round"></span>
                </label> Monday</label>
                <select name='mon-time' id='time' multiple >
                  <option>09:00 AM - 12:00 PM</option>
                  <option>12:00 AM - 03:00 PM</option>
                  <option>03:00 AM - 06:00 PM</option>
                </select>
              </div>
              <div className="timeSeletion">
                <label for="tue-time">
                <label class="switch">
                  <input type="checkbox" checked/>
                  <span class="slider round"></span>
                  </label> 
                  Tuesday</label>
                <select name='tue-time' id='time' multiple >
                  <option>09:00 AM - 12:00 PM</option>
                  <option>12:00 AM - 03:00 PM</option>
                  <option>03:00 AM - 06:00 PM</option>
                </select>
              </div>

              <div className="timeSeletion">
                <label for="wed-time">
                <label class="switch">
                  <input type="checkbox" checked/>
                  <span class="slider round"></span>
                  </label> 
                  Wednesday</label>
                <select name='wed-time' id='time' multiple >
                  <option>09:00 AM - 12:00 PM</option>
                  <option>12:00 AM - 03:00 PM</option>
                  <option>03:00 AM - 06:00 PM</option>
                </select>
              </div>
              <div className="timeSeletion">
                <label for="thr-time">
                <label class="switch">
                  <input type="checkbox" checked/>
                  <span class="slider round"></span>
                  </label>      Thursday</label>
                <select name='thr-time' className="select" id='time' multiple >
                  <option>09:00 AM - 12:00 PM</option>
                  <option>12:00 AM - 03:00 PM</option>
                  <option>03:00 AM - 06:00 PM</option>
                </select>
              </div>
              <div className="timeSeletion">
                  <label for="fri-time">
                <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                  </label> 
                  Friday</label>
                  <p className="select">- Not Available</p>
              </div>
               <div className="icon" style={{width: '100%'}}>
                <span style={{float: 'left', margin: '20px'}}><i class="fa-solid fa-circle-arrow-left fa-lg" style={{color: 'rgba(56, 182, 255, 1);', marginRight: '10px'}}></i> Back
                </span>
                <span style={{float: 'right', margin: '20px'}}> Next <i class="fa-solid fa-circle-arrow-right fa-lg" style={{color: 'rgba(56, 182, 255, 1);', marginLeft: '10px'}}></i>
                </span>
               </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default SideImage
