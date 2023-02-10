const Header = () => {
  return (
    <header>
      <nav>
        <div className="navLogo">News<span className="navLogoColor">Media</span></div>
        {/*  */}
        <form className="searchForm">
          <i className="ri-search-line"></i>
          <input type="search" placeholder="search" className="searchInput" />
        </form>
        {/*  */}
        <div className="navIcons">
            <i className="ri-twitter-fill navIcon"></i>
            <i className="ri-facebook-fill navIcon"></i>
            <i className="ri-instagram-line navIcon"></i>
        </div>
        {/*  */}
        <div className="hamburger">
          <div className="burger burgerOne"></div>
          <div className="burger burgerTwo"></div>
          <div className="burger burgerThree"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header