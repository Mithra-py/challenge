import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import sideBarBG from '../assets/images/bg-sidebar-desktop.svg';


const SideBar = () => {
  return (
    <div className='sideBar' style={{
      backgroundImage: `url(${sideBarBG})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div>
        <div className='sideBarText'>
          <div className='sideBarNumber' to="PersonalInfo">1</div>
          <div className='sideBarTextRight'>
            <h3 className='sideBarTitle'>STEP 1</h3>
            <p className='sideBarp'>YOUR INFO</p>
          </div>
        </div>

        <div className='sideBarText'>
          <div className='sideBarNumber' to="SelectPlan">2</div>
          <div className='sideBarTextRight'>
            <h3 className='sideBarTitle'>STEP 2</h3>
            <p className='sideBarp'>SELECT PLAN</p>
          </div>
        </div>

        <div className='sideBarText'>
          <div className='sideBarNumber' to="AddOns">3</div>
          <div className='sideBarTextRight'>
            <h3 className='sideBarTitle'>STEP 3</h3>
            <p className='sideBarp'>ADD-ONS</p>
          </div>
        </div>

        <div className='sideBarText'>
          <div className='sideBarNumber' to="Finishing">4</div>
          <div className='sideBarTextRight'>
            <h3 className='sideBarTitle'>STEP 4</h3>
            <p className='sideBarp'>SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar