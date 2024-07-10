import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import Mobilenav from './Mobilenav';

function Header({ showlogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navitems = ["Home", "Courses", "About Us", "Join Us","Contact"];

  const onToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <div className='max-[900px]:hidden '>
        <DesktopNav menu={navitems} showlogin={showlogin} />
      </div>
      <div className='min-[900px]:hidden '>
        <Mobilenav menu={navitems} onToggle={onToggle} isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}

export default Header;
