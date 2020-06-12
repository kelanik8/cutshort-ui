/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='main-sidebar sidebar-style-2 border-right'>
        <aside id='sidebar-wrapper'>
          <div className='sidebar-brand border-bottom'>
                <i className='fas fa-home h3 dashboard-icon'></i>
          </div>
          <div className='sidebar-brand sidebar-brand-sm'>
            <i className='fas fa-home h3 dashboard-icon'></i>
          </div>
          <div className='row justify-content-center'>
            <div className='col-6 col-sm-6 col-lg-6 mb-4 mb-md-0 justify-content-center'>
                <div className='avatar-item mb-0'>
                    <img alt='image' src='assets/img/avatar/avatar-4.png' className='img-fluid' />
                    <div className='avatar-badge'><i className='fas fa-cog'></i></div>
                </div>
                <div className='mt-0 mb-1 font-weight-bold text-center mt-1'>Martha Blair <i className="fas fa-circle" style={{
                  fontSize: '8px',
                  color: '#63ed7a'
                }}></i></div>
                <p className='text-center'>
                  Developer 
                </p>
            </div>
          </div>
          <ul className='sidebar-menu'>
            <li className='dropdown active border border-right-0 border-left-0'>
              <a href='#' className='nav-link has-dropdown' data-toggle='dropdown'>
                <i className='fas fa-columns'></i><span>Dashboard</span>
              </a>
              <ul className='dropdown-menu'>
                <li><a className='nav-link' href='#'>Page Visitors</a></li>
                <li><a className='nav-link' href='#'>Post Performance</a></li>
                <li><a className='nav-link' href='#'>Team Overall</a></li>
              </ul>
            </li>
            <li className='border-bottom drop-icon'>
              <a href='#' className='nav-link'>
                <i className='fas fa-calendar-week'></i><span>Calender</span>
              </a>
            </li>
            <li className='border-bottom'>
              <a href='#' className='nav-link'>
                <i className='fas fa-inbox'></i><span>Inbox</span>
              </a>
            </li>
            <li className='border-bottom'>
              <a href='#' className='nav-link'>
                <i className='fas fa-vial'></i><span>Lab / Experimental</span>
              </a>
            </li>
            <li className='menu-header'>Recently Viewed</li>
            <li className='p-0'>
              <a href='#' className='nav-link h-0'>
                <span>Overall Performance</span> <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </li>
            <li className='p-0'>
              <a href='#' className='nav-link h-0'>
                <span>Invoice #940</span> <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </li>
            <li className='p-0'>
              <a href='#' className='nav-link h-0'>
                <span>Customer: Minerva Viewer</span> <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </li>
          </ul>
          
          <div className="mt-4 mb-4 p-3 border-top">
            <a href="#" className='text-dark'>
              Page: dribble.com/janlosert
            </a>
            <p className='text-muted'>
                575840-1811
            </p>
          </div> 
        </aside>
      </div>
    );
}

export default Sidebar;