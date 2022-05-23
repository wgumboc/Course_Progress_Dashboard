import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import { SidebarData2 } from './SidebarData.js';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {useSelector,useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {user ? (
                <li>
                    <button className='btn' onClick={onLogout}>
                    <FaIcons.FaSignOutAlt /> Logout
                    </button>
                </li>
            ) : (
                <>
                    <li className='nav-text'>
                      <Link to='/login'>
                      <FaIcons.FaSignInAlt />
                        <span>Login</span>
                      </Link>
                    </li>
                    <li className='nav-text'>
                      <Link to='/register'>
                      <FaIcons.FaClipboard />
                        <span>Register</span>
                      </Link>
                    </li>
                </>
            )}



            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;