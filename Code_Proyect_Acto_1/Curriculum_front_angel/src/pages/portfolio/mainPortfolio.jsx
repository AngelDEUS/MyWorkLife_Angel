import CardP_Best from '../../components/Cards/CardP_Best'
import NavBarPorfolio from '../../components/NavBar/NavbarPorfolio/NavBarPorfolio'
import projectsData from '../../inf_testing/Projects_array'

const MainPortfolio = () => {
  const { projects } = projectsData;
  return (
    <div className='mainPorfolio_Page' style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="navBar__Portfolio">
        <NavBarPorfolio />
      </div>
      <div className="contentMainPorfolio_page" style={{ display: 'flex', padding: '30px', gap: '30px' }}>
      <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {projects.map((project) => (
                    <CardP_Best 
                        key={project.id_project}
                        title={project.title_roject}
                        description={project.desc_roject}
                        backgroundImage={project.src_bg_roject}
                        chibiImage={project.src_chib_roject}
                        likes={project.likes_roject}
                        tags={project.tags_project}
                    />
                ))}
            </div>
      </div>
    </div>
  )
}

export default MainPortfolio