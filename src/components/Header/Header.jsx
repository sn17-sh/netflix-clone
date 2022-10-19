import React from 'react'
import '../Home/Home.scss'
import logo from './images/netflix.png'
import {Link} from 'react-router-dom'
import {CgSearch} from 'react-icons/cg'

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="menu">
        <Link to='/tvshows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recent'>Recently Added</Link>
        <Link to='/mylist'>My List</Link>
      </div>
      
      <CgSearch />

    </nav>
  )
}

export default Header;