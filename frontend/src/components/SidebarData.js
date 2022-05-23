import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Calculator',
    path: '/',
    icon: <FaIcons.FaCalculator />,
    cName: 'nav-text'
  },
  {
    title: 'My Grades',
    path: '/mygrades',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'De-stress',
    path: '/motivation',
    icon: <FaIcons.FaHandHoldingHeart />,
    cName: 'nav-text'
  }
];

export const SidebarData2 = [
    {
      title: 'Logout',
      path: '/login',
      icon: <FaIcons.FaSignOutAlt />,
      cName: 'nav-text'
    },  
    {
      title: 'Register',
      path: '/register',
      icon: <FaIcons.FaClipboard />,
      cName: 'nav-text'
    },  
    {
      title: 'Calculator',
      path: '/',
      icon: <FaIcons.FaCalculator />,
      cName: 'nav-text'
    },
    {
      title: 'My Grades',
      path: '/mygrades',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'De-stress',
      path: '/motivation',
      icon: <FaIcons.FaHandHoldingHeart />,
      cName: 'nav-text'
    }
  ];