import { useState, useRef } from "react"
import SideNav from './SideNav'
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navWrapper = useRef()
  function openNav() {
    setIsNavOpen(!isNavOpen)
    navWrapper.classList.toggle('is-nav-open')
  }
  return (
    <header>
      <nav>
        <div ref={navWrapper} className="navLogo">News<span className="navLogoColor">Media</span></div>
        {/*  */}
        <div className="navContentDetails">
        {/*  */}
        <form className="searchForm">
          <i className="ri-search-line"></i>
          <input type="search" placeholder="search" className="searchInput" />
        </form>
          {/*  */}
          <div className="navIconsHamburger">
          {/*  */}
        <div className="navIcons">
            <i className="ri-twitter-fill navIcon"></i>
            <i className="ri-facebook-fill navIcon"></i>
            <i className="ri-instagram-line navIcon"></i>
        </div>
        {/*  */}
        <div className="hamburger" onClick={openNav}>
          <div className="burger burgerOne"></div>
          <div className="burger burgerTwo"></div>
          <div className="burger burgerThree"></div>
            </div>
            {/*  */}
            </div>
          {/*  */}
        </div>
        {isNavOpen ?
          <SideNav />
          :
          false}
      </nav>
    </header>
  )
}

export default Header