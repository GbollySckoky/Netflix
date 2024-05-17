import React from 'react';
import Nav from '../HomeScreen/Nav';
import Avatar from '@mui/material/Avatar';
import Footer from '../Footer/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import david from '../../assets/david.jpg'
const Profile = ({user}) => {

  return (
    <div className='profis'>
      <div className='profile'>
        <Nav />
        <div className='profile_body'>
          <h1>Edit Profile</h1>
          <div  className='profile_info'>
          <Avatar alt="Remy Sharp" src={david} />
            <div className='profile_details'>
              <h2>{user.email}</h2>
              <div className="profile_plans">
              </div>
            </div>
          </div>
          <div className="">
          <div  className='profile_acct'>
            <h1>Account</h1>
            <p>Membership Details</p>
          </div>
          <div className='profile_member'>
            <p>Member since May 2024</p>
            <div className='plan'>
              <h3>Mobile Plan</h3>
              <p>Next Payment: Unlimited Subscription</p>
              <p id="yu">{user.email}</p>
            </div>
            <hr />
            <div className='meb'>
              <h3>Manage Membership</h3>
              <span> <MdKeyboardArrowRight /> </span>
            </div>
          </div>
          <div className='prof_btn'>
            <button>Sign Out</button>
          </div>
        </div>
        </div>
        <div className="profile_footer">
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
