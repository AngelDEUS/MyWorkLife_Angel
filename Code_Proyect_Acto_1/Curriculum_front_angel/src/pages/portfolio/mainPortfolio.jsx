import CardP_Best from '../../components/Cards/CardP_Best'
import NavBarPorfolio from '../../components/NavBar/NavbarPorfolio/NavBarPorfolio'

const MainPortfolio = () => {
  return (
    <div className='mainPorfolio_Page' style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="navBar__Portfolio">
        <NavBarPorfolio />
      </div>
      <div className="contentMainPorfolio_page" style={{ display: 'flex', padding: '30px', gap: '30px' }}>
        <CardP_Best />
        <CardP_Best />
      </div>
    </div>
  )
}

export default MainPortfolio
