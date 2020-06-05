import React from 'react'

import '../styles.css';

function NavBar() {
    return (    
    <nav className="navbar navbar-light" style={{backgroundColor: 'orangered'}}>
      <a class="navbar-brand text-light" href="#">
        <i className='fab fa-hacker-news fa-2x d-inline-block align-top' />
         Hacker News
      </a>
    </nav>
    )
}

export default NavBar