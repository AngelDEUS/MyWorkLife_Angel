import CardP_Best from '../../components/Cards/CardP_Best'

const MainPortfolio = () => {
  return (
    <div className='mainPorfolio_Page' style={{ display: 'flex'}}>
      <div className="contentMainPorfolio_page" style={{ display: 'flex', padding: '30px', gap: '30px' }}>
        <CardP_Best />
        <CardP_Best />
      </div>
    </div>
  )
}

export default MainPortfolio
