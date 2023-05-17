/* eslint-disable */
import moment from 'moment/moment';
import { BiSearch } from 'react-icons/bi';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../Components/Organisms/Sidebar/Sidebar';
import AuthGuard from '../../Components/services/AuthGuard';
import './Dashboard.css';
import geek from './geekman.png.png';
import { useEffect, useState } from 'react';
import { getCurrentUser, getCurrentUsers } from '../../Api/auth';

function Dashboard() {
  const { pathname } = useLocation();
  const [user, setUser] = useState();
  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <div className="container">
      <Sidebar />

      {/* making the dashboard as the default route */}
      {pathname === '/' && <Navigate to="/board" />}

      <div className="dashboard">
        <div className="topBaseGradients">
          <div className="gradient-red" />
          <div className="gradient-orange" />
          <div className="gradient-blue" />
        </div>

        <div className="header">
          <span>{moment().format('dddd, Do MMM YYYY')}</span>

          <div className="searchBar">
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>

          <div className="profile">
            <img alt="person image" src={geek} />
            <div className="details">
              <span>{user?.name}</span>
              <span>{user?.emailAddress}</span>
            </div>
          </div>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
