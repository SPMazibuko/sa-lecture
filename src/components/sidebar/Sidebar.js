import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <nav>
            <ul>
                <li>
                    <div className='logo'>
                        <h1>SA_System</h1>
                    </div>
                </li>
                <li>
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
                <li>
                <div className='a'>
                <BarChartIcon  className='sidebar__icon'/>
                    <span className='nav-item'>Attendance</span>
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

/*
import React, {useState} from 'react';
import './sidebar.css';
import {MdOutlineDashboard} from 'react-icons/md';
import {GoBook} from 'react-icons/go';
import {MdOutlineSchool} from 'react-icons/md';
import {BiHelpCircle} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {Link,useNavigate } from 'react-router-dom'
import { Students } from '../students/Students';

export const Sidebar = () => {
    const [activeNav, setActiveNav]= useState('#');
    const navigate = useNavigate();

    const toDashboard=()=>{
        setActiveNav('/dashboard');
        navigate('/dashboard');
    }

    const toStudents=()=>{
        setActiveNav('/students');
        navigate('/students');
    }

    const toLectures=()=>{
        setActiveNav('/lectures');
        navigate('/lectures');
    } 

  return (
    <div className='side-menu'>
        <div className='sidebar__logo'>
            <h1>SA_System</h1>
        </div>

        <ul>
            <li onClick={toDashboard} className={activeNav === '/dashboard' ? 'active' : ''}>
              <MdOutlineDashboard /> &nbsp; Dashboard
            </li>
            <li onClick={toStudents} className= {activeNav === '/students' ? 'active' : ''}>
              <GoBook /> &nbsp; Students
            </li>
            <li onClick={toLectures} className={activeNav === '/lectures' ? 'active' : ''}>
                <MdOutlineSchool /> &nbsp; Lectures
            </li>
            <li onClick={() => setActiveNav('#help')} className={activeNav === '#help' ? 'active' : ''}>
                <BiHelpCircle /> &nbsp; Help
            </li>
            <li onClick={() => setActiveNav('#settings')} className={activeNav === '#settings' ? 'active' : ''}>
                <FiSettings /> &nbsp; Settings
            </li>
        </ul>
    </div>
  )
}
*/