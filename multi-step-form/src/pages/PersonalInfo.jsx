import React from 'react'
import { Link } from 'react-router-dom'

const PersonalInfo = () => {
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email adress, and phone number.</p>
      <div>
        <p>Name</p>
      <input type="text" placeholder='e.g. Stephen King' />
      </div>
      
      <div>
        <p>Email Adress</p>
        <input type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com'/>
      </div>

      <div>
        <p>Phone Number</p>
        <input type="number" name="phone" id="phone" placeholder='e.g. +1 655 265 454'/>
      </div>

      <Link to="SelectPlan">Next Plan</Link>
    </div>
  )
}

export default PersonalInfo