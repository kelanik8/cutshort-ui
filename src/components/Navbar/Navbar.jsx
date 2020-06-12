import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg main-navbar bg-white border-bottom'>
        <form className='form-inline mr-auto'>
          <div className='title-element'>
            <p className='m-auto lead'>
              <strong>Dashboard</strong>
            </p>
           </div>
        </form>
        <ul className='navbar-nav navbar-right'>
          <li className='dropdown dropdown-list-toggle'>
            <select className="custom-select">
              <option>ENG</option>
              <option>FR</option>
            </select>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;