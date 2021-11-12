import React from 'react';
import useAuth from '../../hooks/useAuth';
import './DashboardHome.css'

const DashboardHome = () => {
  const {user} = useAuth()
  return (
    <div className="dashboard-home">
      <div className="my-auto">
        <h1 className="dasboard-title mb-4">Welcome To Dashboard, {user.displayName}!</h1>
        <img src="https://i.imgur.com/rN1it0N.png" alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default DashboardHome;