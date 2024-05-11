import React, { useEffect, useState } from 'react';


const Nav = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <div className={`nav ${show && 'nav_black'}`}>
        <div>
          <img 
              className='nav_logo'
              src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
              alt="Netflix Logo"
          />
        </div>
       <div>
        <img 
            className='nav_avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Netflix Avatar" 
          />
       </div>
      
      </div>
    </div>
  );
};

export default Nav;
