const SideNav = ({isNavOpen}) => {
  return (
    <div className={`sideNav ${isNavOpen && 'navToggle'}`}>
      <a href="#" className="sideNavLink">Home</a>
      <a href="#" className="sideNavLink">Categories</a>
      <a href="#" className="sideNavLink">Travel</a>
      <a href="#" className="sideNavLink">Food</a>
      <a href="#" className="sideNavLink">Technology</a>
      <a href="#" className="sideNavLink">Business</a>
    </div>
  )
}

export default SideNav