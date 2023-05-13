import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleAdmin = async () => {
    try {
      navigate('/adminPage');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleHome = async () => {
    try {
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>

      <button onClick={handleHome} className="border px-6 py-2 my-4">
        Home Page
      </button>

      {user.email === 'admin@gmail.com' && (
        <button onClick={handleAdmin} className="border px-6 py-2 my-4">
          Admin Page
        </button>
      )}
    </div>
  );
};

export default Account;
