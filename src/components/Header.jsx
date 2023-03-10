import { useState } from "react"
import SideNav from './SideNav'
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  function openNav() {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <header>
      <nav>
        <div className="navLogo">News<span className="navLogoColor">Media</span></div>
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
          <SideNav isNavOpen={isNavOpen} />
      </nav>
    </header>
  )
}

export default Header