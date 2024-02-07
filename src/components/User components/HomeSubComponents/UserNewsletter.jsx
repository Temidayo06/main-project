import React from 'react'
import UserNewsValidation from './UserNewsValidation';
import "../../../styles/User Styles/Newsletter.css"

const UserNewsletter = () => {
  return (
    <div className='user-news-wrapper py-5 d-flex flex-md-row flex-column '   > 
        <div className='user-news-text'>
            <h2 className=''>Find A Home That Truly Suits You</h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor</p>
        </div>

        <div className='user-validation'>
            <UserNewsValidation />
        </div>
    </div>
  )
}

export default UserNewsletter