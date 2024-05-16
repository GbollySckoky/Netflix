import React from 'react';
import Nav from '../HomeScreen/Nav';

const Profile = ({user}) => {

  return (
    <div className='profile'>
      <Nav />
      <div className='profile_body'>
        <h1>Edit Profile</h1>
        <div  className='profile_info'>
          <img
            className='nav_avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
          />
          <div className='profile_details'>
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
            </div>
          </div>
          <div className="profile_btn">
            {/* <button onClick={() => auth.signOut}>Sign Out</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
