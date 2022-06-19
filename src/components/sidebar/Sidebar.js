import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import './sidebar.css';
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();

    const toDashboard=()=>{
        navigate('/dashboard');
    }

    const toStudents=()=>{
        navigate('/students');
    }

    const toAttendance=()=>{
        navigate('/attendance');
    }

  return (
    <div className='sidebar__container'>
        <nav>
            <ul>
                <li onClick={toDashboard}>
                    <div className='logo'>
                        <h1>SA_System</h1>
                    </div>
                </li>
                <li onClick={toDashboard}>
                    <div className='a'>
                    <DashboardIcon className='sidebar__icon'/>
                    <span className='nav-item'>Dashboard</span>
                    </div>
                </li>
                <li>
                <div className='a'>
                <MapsUgcIcon className='sidebar__icon'/>
                    <span className='nav-item'>Message</span>
                    </div>
                </li>
                <li  onClick={toAttendance}>
                <div className='a'>
                <BarChartIcon  className='sidebar__icon'/>
                    <span className='nav-item'>Attendance</span>
                    </div>
                </li>
                <li  onClick={toStudents}>
                <div className='a'>
                <StorageIcon  className='sidebar__icon'/>
                    <span className='nav-item'>Students</span>
                    </div>
                </li>
                <li>
                <div className='a'>
                    <SettingsIcon className='sidebar__icon' />
                    <span className='nav-item'>Settings</span>
                    </div>
                </li>
                <li>
                <div className='a'>
                    <div className='logout'>
                        <LogoutIcon className='sidebar__icon' />
                        <span className='nav-item'>Log out</span>
                    </div>
                </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar