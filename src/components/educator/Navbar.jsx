import React from 'react';
import { dummyEducatorData } from '../../assets/educatorData';
import { Link } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react'; 
const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="WebDemy Logo"
            className="h-10"
          />
        </Link>
      </div>

      {/* User Info Section */}
      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-medium">
          Hi! {user ? user.fullName : 'Developer'}
        </p>

        {/* Conditional Rendering */}
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <img
            src={educatorData.imageUrl}
            alt="Default Profile"
            className="h-10 w-10 rounded-full border"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
