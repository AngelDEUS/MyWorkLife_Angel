import './styleNavBarPorfolio.css'

const NavBarPorfolio = () => {
  return (
    <div className='mainNavBarPorfolio'>
      <div className="containerButtons">
        <div className="buttonCategory_NavBar">
          <span className='categoryText'>All projects web</span>
        </div>
        <div className="buttonCategory_NavBar">
          <span className='categoryText'>Projects mobile</span>
        </div>
        <div className="buttonCategory_NavBar">
          <span className='categoryText'>Web UI/UX</span>
        </div>
        <div className="buttonCategory_NavBar">
          <span className='categoryText'>Illustration</span>
        </div>
        <div className="buttonCategory_NavBar">
          <span className='categoryText'>Socialmedia Design</span>
        </div>
      </div>
    </div>
  )
}

export default NavBarPorfolio
